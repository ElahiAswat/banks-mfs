// Standalone Cloudflare Worker for Bangladesh Banks & MFS
// Can be deployed directly with `wrangler deploy worker.js` or pasted into Cloudflare Dashboard

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;
    const origin = url.origin;

    // Handle CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
          "Access-Control-Max-Age": "86400",
        },
      });
    }

    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    };

    try {
      // 1. Interactive UI Showcase at root (GET /)
      if (path === "/" || path === "/index.html") {
        return new Response(renderUI(), {
          headers: {
            "Content-Type": "text/html; charset=utf-8",
            "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
            ...corsHeaders,
          },
        });
      }

      // 2. Health check (GET /health)
      if (path === "/health") {
        let dbOk = false;
        let count = 0;
        try {
          const res = await env.DB.prepare("SELECT count(*) as cnt FROM banks").first();
          count = res ? res.cnt : 0;
          dbOk = true;
        } catch (e) {
          dbOk = false;
        }
        return jsonResponse(
          {
            status: dbOk ? "ok" : "degraded",
            edge: "active",
            timestamp: new Date().toISOString(),
            d1_connected: dbOk,
            bank_count: count,
          },
          corsHeaders,
          dbOk ? 200 : 500
        );
      }

      // 3. R2 Logos: GET /logos/banks/:filename & GET /logos/mfs/:filename
      if (path.startsWith("/logos/")) {
        return await handleLogoRequest(path, env, corsHeaders);
      }

      // 4. API Routes: /api/v1/*
      if (path === "/api/v1/banks") {
        return await handleBanksList(url, env, corsHeaders);
      }

      if (path.startsWith("/api/v1/banks/")) {
        const slug = path.replace("/api/v1/banks/", "");
        return await handleSingleBank(slug, env, origin, corsHeaders);
      }

      if (path === "/api/v1/mfs") {
        return await handleMfsList(env, origin, corsHeaders);
      }

      if (path.startsWith("/api/v1/mfs/")) {
        const slug = path.replace("/api/v1/mfs/", "");
        return await handleSingleMfs(slug, env, origin, corsHeaders);
      }

      if (path === "/api/v1/all") {
        return await handleAllInstitutions(env, origin, corsHeaders);
      }

      if (path === "/api/v1/search") {
        return await handleSearch(url, env, origin, corsHeaders);
      }

      // 404 Handler
      return jsonResponse(
        { success: false, error: `Endpoint not found: ${request.method} ${path}` },
        corsHeaders,
        404
      );
    } catch (err) {
      console.error("Worker Execution Error:", err);
      return jsonResponse(
        { success: false, error: err.message || "Internal Server Error" },
        corsHeaders,
        500
      );
    }
  },
};

// --- Route Handlers ---

async function handleBanksList(url, env, corsHeaders) {
  const search = url.searchParams.get("search");
  const type = url.searchParams.get("type");
  const originParam = url.searchParams.get("origin");
  const category = url.searchParams.get("category");
  const limit = url.searchParams.get("limit");
  const offset = url.searchParams.get("offset");

  let query = "SELECT * FROM banks WHERE 1=1";
  const params = [];

  if (search) {
    query += " AND (name LIKE ? OR registered_name LIKE ? OR slug LIKE ? OR swift_code LIKE ? OR bank_code LIKE ?)";
    const term = `%${search.trim()}%`;
    params.push(term, term, term, term, term);
  }

  if (type) {
    query += " AND LOWER(type) LIKE LOWER(?)";
    params.push(`%${type.trim()}%`);
  }

  if (originParam) {
    query += " AND LOWER(origin) = LOWER(?)";
    params.push(originParam.trim());
  }

  if (category) {
    query += " AND LOWER(category) LIKE LOWER(?)";
    params.push(`%${category.trim()}%`);
  }

  query += " ORDER BY name ASC";

  if (limit) {
    query += " LIMIT ?";
    params.push(parseInt(limit, 10));
    if (offset) {
      query += " OFFSET ?";
      params.push(parseInt(offset, 10));
    }
  }

  const result = await env.DB.prepare(query).bind(...params).all();
  const origin = url.origin;
  const banks = (result.results || []).map((row) => formatBank(row, origin));

  return jsonResponse(
    { success: true, count: banks.length, data: banks },
    { ...corsHeaders, "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400" }
  );
}

async function handleSingleBank(slugOrSwift, env, origin, corsHeaders) {
  const param = decodeURIComponent(slugOrSwift).trim();
  const result = await env.DB.prepare(
    "SELECT * FROM banks WHERE LOWER(slug) = LOWER(?) OR UPPER(swift_code) = UPPER(?) OR bank_code = ? LIMIT 1"
  ).bind(param, param, param).first();

  if (!result) {
    return jsonResponse(
      { success: false, error: `Bank not found for '${param}'` },
      corsHeaders,
      404
    );
  }

  return jsonResponse(
    { success: true, data: formatBank(result, origin) },
    { ...corsHeaders, "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800" }
  );
}

async function handleMfsList(env, origin, corsHeaders) {
  const result = await env.DB.prepare("SELECT * FROM mfs ORDER BY name ASC").all();
  const list = (result.results || []).map((row) => formatMfs(row, origin));

  return jsonResponse(
    { success: true, count: list.length, data: list },
    { ...corsHeaders, "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400" }
  );
}

async function handleSingleMfs(slug, env, origin, corsHeaders) {
  const param = decodeURIComponent(slug).trim().toLowerCase();
  const result = await env.DB.prepare(
    "SELECT * FROM mfs WHERE LOWER(slug) = ? LIMIT 1"
  ).bind(param).first();

  if (!result) {
    return jsonResponse(
      { success: false, error: `MFS provider not found for '${param}'` },
      corsHeaders,
      404
    );
  }

  return jsonResponse(
    { success: true, data: formatMfs(result, origin) },
    { ...corsHeaders, "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800" }
  );
}

async function handleAllInstitutions(env, origin, corsHeaders) {
  const [banksRes, mfsRes] = await Promise.all([
    env.DB.prepare("SELECT * FROM banks ORDER BY name ASC").all(),
    env.DB.prepare("SELECT * FROM mfs ORDER BY name ASC").all(),
  ]);

  const banks = (banksRes.results || []).map((r) => formatBank(r, origin));
  const mfs = (mfsRes.results || []).map((r) => formatMfs(r, origin));

  return jsonResponse(
    {
      success: true,
      total: banks.length + mfs.length,
      data: { banks, mfs },
    },
    { ...corsHeaders, "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400" }
  );
}

async function handleSearch(url, env, origin, corsHeaders) {
  const query = url.searchParams.get("q")?.trim();
  if (!query) {
    return jsonResponse(
      { success: false, error: "Query parameter 'q' is required for search" },
      corsHeaders,
      400
    );
  }

  const term = `%${query}%`;
  const [banksRes, mfsRes] = await Promise.all([
    env.DB.prepare(
      `SELECT * FROM banks 
       WHERE name LIKE ? OR registered_name LIKE ? OR slug LIKE ? 
          OR swift_code LIKE ? OR bank_code LIKE ? OR services LIKE ?
       ORDER BY name ASC`
    ).bind(term, term, term, term, term, term).all(),
    env.DB.prepare(
      `SELECT * FROM mfs 
       WHERE name LIKE ? OR registered_name LIKE ? OR slug LIKE ? OR parent LIKE ?
       ORDER BY name ASC`
    ).bind(term, term, term, term).all(),
  ]);

  const banks = (banksRes.results || []).map((r) => formatBank(r, origin));
  const mfs = (mfsRes.results || []).map((r) => formatMfs(r, origin));

  return jsonResponse(
    {
      success: true,
      query,
      count: banks.length + mfs.length,
      data: { banks, mfs },
    },
    corsHeaders
  );
}

// --- Logo Delivery from R2 with Caching ---

async function handleLogoRequest(path, env, corsHeaders) {
  let subpath = path.replace("/logos/", "");
  let prefix = "";
  if (subpath.startsWith("banks/")) {
    prefix = "logos/banks";
    subpath = subpath.replace("banks/", "");
  } else if (subpath.startsWith("mfs/")) {
    prefix = "logos/mfs";
    subpath = subpath.replace("mfs/", "");
  } else {
    return jsonResponse({ success: false, error: "Invalid logo path. Use /logos/banks/ or /logos/mfs/" }, corsHeaders, 400);
  }

  const hasExt = subpath.includes(".");
  const candidateKeys = [];
  if (hasExt) {
    candidateKeys.push(`${prefix}/${subpath}`);
  } else {
    candidateKeys.push(
      `${prefix}/${subpath}.webp`,
      `${prefix}/${subpath}.png`,
      `${prefix}/${subpath}.jpg`,
      `${prefix}/${subpath}.jpeg`
    );
  }

  for (const key of candidateKeys) {
    const object = await env.BUCKET.get(key);
    if (object) {
      const headers = new Headers();
      object.writeHttpMetadata(headers);
      headers.set("etag", object.httpEtag);
      headers.set("Cache-Control", "public, max-age=31536000, immutable");
      headers.set("Access-Control-Allow-Origin", "*");

      let contentType = headers.get("content-type");
      if (!contentType || contentType === "application/octet-stream") {
        if (key.endsWith(".webp")) contentType = "image/webp";
        else if (key.endsWith(".png")) contentType = "image/png";
        else if (key.endsWith(".jpg") || key.endsWith(".jpeg")) contentType = "image/jpeg";
        else if (key.endsWith(".svg")) contentType = "image/svg+xml";
        headers.set("content-type", contentType || "image/webp");
      }

      return new Response(object.body, { headers });
    }
  }

  return jsonResponse({ success: false, error: `Logo not found in ${prefix} for '${subpath}'` }, corsHeaders, 404);
}

// --- Helpers ---

function formatBank(row, origin) {
  let services = row.services;
  if (typeof services === "string") {
    try { services = JSON.parse(services); } catch (e) {}
  }
  let service_hours = row.service_hours;
  if (typeof service_hours === "string") {
    try { service_hours = JSON.parse(service_hours); } catch (e) {}
  }
  return {
    ...row,
    services,
    service_hours,
    logo_url: `${origin}/logos/banks/${row.slug}.webp`,
    logo_webp: `${origin}/logos/banks/${row.slug}.webp`,
    logo_png: `${origin}/logos/banks/${row.slug}.png`,
  };
}

function formatMfs(row, origin) {
  return {
    ...row,
    logo_url: `${origin}/logos/mfs/${row.slug}.webp`,
    logo_webp: `${origin}/logos/mfs/${row.slug}.webp`,
    logo_png: `${origin}/logos/mfs/${row.slug}.png`,
  };
}

function jsonResponse(data, headers = {}, status = 200) {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      ...headers,
    },
  });
}

function renderUI() {
  // Same HTML as UI renderer
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Banks & MFS BD | Blazing Fast Edge API & Logo CDN</title>
  <meta name="description" content="Ultra-fast Edge API, logo CDN, and Swift/Routing directory for all Bangladesh Banks and Mobile Financial Services. Powered by Cloudflare Workers, D1 & R2.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-dark: #07090e;
      --bg-card: rgba(18, 22, 34, 0.75);
      --border: rgba(255, 255, 255, 0.08);
      --primary: #6366f1;
      --primary-hover: #4f46e5;
      --text-main: #f8fafc;
      --text-muted: #94a3b8;
      --text-sub: #64748b;
      --glow: rgba(99, 102, 241, 0.15);
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background-color: var(--bg-dark);
      background-image: 
        radial-gradient(circle at 15% 10%, rgba(99, 102, 241, 0.12) 0%, transparent 40%),
        radial-gradient(circle at 85% 20%, rgba(6, 182, 212, 0.1) 0%, transparent 40%);
      color: var(--text-main);
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
      min-height: 100vh;
    }
    header {
      border-bottom: 1px solid var(--border);
      backdrop-filter: blur(12px);
      position: sticky; top: 0; z-index: 50;
      background: rgba(7, 9, 14, 0.85);
    }
    .nav-container {
      max-width: 1280px; margin: 0 auto; padding: 1rem 1.5rem;
      display: flex; align-items: center; justify-content: space-between;
    }
    .brand { display: flex; align-items: center; gap: 0.75rem; text-decoration: none; color: inherit; }
    .brand-logo-icon {
      width: 38px; height: 38px; border-radius: 10px;
      background: linear-gradient(135deg, #6366f1, #06b6d4);
      display: flex; align-items: center; justify-content: center;
      box-shadow: 0 0 20px rgba(99, 102, 241, 0.4);
    }
    .brand-title { font-family: 'Outfit', sans-serif; font-weight: 700; font-size: 1.25rem; }
    .brand-title span { background: linear-gradient(90deg, #6366f1, #06b6d4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    .edge-badge {
      display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.35rem 0.75rem;
      border-radius: 9999px; font-size: 0.75rem; font-weight: 600;
      background: rgba(16, 185, 129, 0.12); border: 1px solid rgba(16, 185, 129, 0.3); color: #34d399;
    }
    main { max-width: 1280px; margin: 0 auto; padding: 3rem 1.5rem 6rem; }
    .hero { text-align: center; max-width: 800px; margin: 0 auto 3rem; }
    .hero-pill {
      display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.35rem 1rem;
      border-radius: 9999px; background: rgba(99, 102, 241, 0.1); border: 1px solid rgba(99, 102, 241, 0.25);
      color: #a5b4fc; font-size: 0.8125rem; font-weight: 600; margin-bottom: 1.5rem;
    }
    .hero h1 { font-family: 'Outfit', sans-serif; font-size: clamp(2.25rem, 5vw, 3.5rem); font-weight: 800; line-height: 1.15; margin-bottom: 1.25rem; }
    .hero h1 .gradient-text { background: linear-gradient(135deg, #a5b4fc 0%, #38bdf8 50%, #4ade80 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    .hero p { color: var(--text-muted); font-size: 1.125rem; line-height: 1.6; margin-bottom: 2rem; }
    .stats-bar { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem; margin-bottom: 2.5rem; }
    .stat-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: 14px; padding: 1.25rem 1.5rem; }
    .stat-value { font-family: 'Outfit', sans-serif; font-size: 1.75rem; font-weight: 700; color: var(--text-main); }
    .stat-label { color: var(--text-sub); font-size: 0.8125rem; margin-top: 0.25rem; }
    .search-filter-section { background: var(--bg-card); border: 1px solid var(--border); border-radius: 16px; padding: 1.25rem; margin-bottom: 2.5rem; }
    .search-input {
      width: 100%; background: rgba(10, 14, 24, 0.8); border: 1px solid var(--border);
      border-radius: 12px; padding: 0.9rem 1.25rem; color: var(--text-main); font-size: 1rem; outline: none; margin-bottom: 1rem;
    }
    .search-input:focus { border-color: var(--primary); box-shadow: 0 0 0 3px var(--glow); }
    .filter-pills { display: flex; gap: 0.5rem; flex-wrap: wrap; }
    .filter-btn {
      background: rgba(255, 255, 255, 0.04); border: 1px solid var(--border);
      color: var(--text-muted); padding: 0.5rem 1rem; border-radius: 10px; font-size: 0.8125rem; font-weight: 600; cursor: pointer;
    }
    .filter-btn.active { background: var(--primary); border-color: var(--primary); color: #ffffff; }
    .cards-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1.25rem; }
    .card {
      background: var(--bg-card); border: 1px solid var(--border); border-radius: 16px;
      padding: 1.25rem; display: flex; flex-direction: column; justify-content: space-between; transition: transform 0.2s;
    }
    .card:hover { transform: translateY(-3px); border-color: rgba(99, 102, 241, 0.35); }
    .card-top { display: flex; align-items: flex-start; gap: 1rem; margin-bottom: 1rem; }
    .logo-container {
      width: 64px; height: 64px; min-width: 64px; border-radius: 12px;
      background: #ffffff; padding: 6px; display: flex; align-items: center; justify-content: center;
    }
    .logo-container img { max-width: 100%; max-height: 100%; object-fit: contain; }
    .card-title { font-family: 'Outfit', sans-serif; font-size: 1.125rem; font-weight: 700; }
    .card-subtitle { font-size: 0.75rem; color: var(--text-sub); }
    .card-codes { background: rgba(10, 14, 24, 0.6); border-radius: 10px; padding: 0.75rem; margin-bottom: 1rem; display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; }
    .code-label { font-size: 0.6875rem; color: var(--text-sub); font-weight: 600; text-transform: uppercase; }
    .code-val { font-family: 'JetBrains Mono', monospace; font-size: 0.8125rem; color: #38bdf8; cursor: pointer; }
    .btn { padding: 0.55rem 0.75rem; border-radius: 8px; font-size: 0.75rem; font-weight: 600; cursor: pointer; border: none; text-align: center; }
    .btn-secondary { background: rgba(255, 255, 255, 0.08); color: var(--text-main); }
    .btn-primary { background: var(--primary); color: #ffffff; }
    .toast {
      position: fixed; bottom: 2rem; right: 2rem; background: #1e1b4b; border: 1px solid #6366f1;
      color: #e0e7ff; padding: 0.75rem 1.25rem; border-radius: 10px; font-size: 0.875rem; font-weight: 600;
      opacity: 0; transform: translateY(50px); transition: all 0.3s;
    }
    .toast.show { opacity: 1; transform: translateY(0); }
  </style>
</head>
<body>
  <header>
    <div class="nav-container">
      <a href="/" class="brand">
        <div class="brand-logo-icon">🏛</div>
        <div class="brand-title">Banks & MFS <span>BD</span></div>
      </a>
      <div class="edge-badge">Cloudflare Edge & D1 Active</div>
    </div>
  </header>
  <main>
    <div class="hero">
      <div class="hero-pill">⚡ Sub-15ms Edge Response & Zero Egress</div>
      <h1>All Bangladesh Banks & MFS<br><span class="gradient-text">Logos, Swift Codes & Instant API</span></h1>
      <p>Direct CDN links, Swift codes, and routing data for checkout forms and payment gateways.</p>
    </div>
    <div class="stats-bar">
      <div class="stat-card"><div class="stat-value" id="stat-banks">61</div><div class="stat-label">Banks</div></div>
      <div class="stat-card"><div class="stat-value" id="stat-mfs">4</div><div class="stat-label">MFS Providers</div></div>
      <div class="stat-card"><div class="stat-value" style="color: #34d399;">&lt; 15 ms</div><div class="stat-label">Edge Latency</div></div>
      <div class="stat-card"><div class="stat-value" style="color: #38bdf8;">WebP & PNG</div><div class="stat-label">R2 Asset Formats</div></div>
    </div>
    <div class="search-filter-section">
      <input type="text" id="search-input" class="search-input" placeholder="Search by bank name, slug, or Swift code (e.g. BRAKBDDH)..." oninput="renderCards()" />
      <div class="filter-pills">
        <button class="filter-btn active" onclick="setFilter('all', this)">All</button>
        <button class="filter-btn" onclick="setFilter('mfs', this)">MFS</button>
        <button class="filter-btn" onclick="setFilter('islamic', this)">Islamic</button>
        <button class="filter-btn" onclick="setFilter('foreign', this)">Foreign</button>
      </div>
    </div>
    <div class="cards-grid" id="cards-container"></div>
  </main>
  <div class="toast" id="toast">Copied to clipboard!</div>
  <script>
    let allData = { banks: [], mfs: [] };
    let currentFilter = 'all';
    async function loadData() {
      const res = await fetch('/api/v1/all');
      const json = await res.json();
      if (json.success) {
        allData = json.data;
        document.getElementById('stat-banks').textContent = allData.banks.length;
        document.getElementById('stat-mfs').textContent = allData.mfs.length;
        renderCards();
      }
    }
    function renderCards() {
      const container = document.getElementById('cards-container');
      const search = document.getElementById('search-input').value.toLowerCase().trim();
      container.innerHTML = '';
      let list = currentFilter === 'mfs' 
        ? allData.mfs.map(m => ({ ...m, isMfs: true }))
        : [...allData.mfs.map(m => ({ ...m, isMfs: true })), ...allData.banks.map(b => ({ ...b, isMfs: false }))];
      if (currentFilter === 'islamic') {
        list = allData.banks.filter(b => (b.name + ' ' + (b.services || '')).toLowerCase().includes('islam')).map(b => ({ ...b, isMfs: false }));
      } else if (currentFilter === 'foreign') {
        list = allData.banks.filter(b => (b.origin || '').toLowerCase().includes('foreign')).map(b => ({ ...b, isMfs: false }));
      }
      if (search) {
        list = list.filter(item => (item.name || '').toLowerCase().includes(search) || (item.slug || '').toLowerCase().includes(search) || (item.swift_code || '').toLowerCase().includes(search) || (item.bank_code || '').toLowerCase().includes(search));
      }
      list.forEach(item => {
        const logoUrl = item.isMfs ? '/logos/mfs/' + item.slug + '.webp' : '/logos/banks/' + item.slug + '.webp';
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = \`
          <div class="card-top">
            <div class="logo-container"><img src="\${logoUrl}" alt="\${item.name}" loading="lazy" onerror="this.src='/logos/\${item.isMfs ? 'mfs' : 'banks'}/\${item.slug}.png'" /></div>
            <div>
              <div class="card-title">\${item.name}</div>
              <div class="card-subtitle">\${item.registered_name || item.parent || 'Bangladesh'}</div>
            </div>
          </div>
          <div class="card-codes">
            <div><span class="code-label">\${item.isMfs ? 'Parent' : 'Swift Code'}</span><div class="code-val" onclick="copy('\${item.swift_code || item.parent || 'N/A'}')">\${item.swift_code || item.parent || 'N/A'}</div></div>
            <div><span class="code-label">\${item.isMfs ? 'Helpline' : 'Bank Code'}</span><div class="code-val" onclick="copy('\${item.bank_code || item.call_center || 'N/A'}')">\${item.bank_code || item.call_center || 'N/A'}</div></div>
          </div>
          <button class="btn btn-secondary" onclick="copy('\${window.location.origin}\${logoUrl}')">Copy WebP CDN URL</button>
        \`;
        container.appendChild(card);
      });
    }
    function setFilter(f, btn) {
      currentFilter = f;
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderCards();
    }
    function copy(text) {
      navigator.clipboard.writeText(text);
      const toast = document.getElementById('toast');
      toast.textContent = 'Copied: ' + text;
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 2000);
    }
    loadData();
  </script>
</body>
</html>`;
}
