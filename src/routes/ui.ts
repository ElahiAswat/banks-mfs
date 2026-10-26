export function renderShowcaseHtml(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Banks & MFS BD — Minimal Edge API & Logo CDN</title>
  <meta name="description" content="Minimal, ultra-fast Edge API, logo CDN, and Swift/Branch directory for all Bangladesh Banks and Mobile Financial Services (bKash, Nagad, Rocket, Upay).">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-page: #f8fafc;
      --bg-card: #ffffff;
      --bg-subtle: #f1f5f9;
      --border: #e2e8f0;
      --border-hover: #cbd5e1;
      --text-main: #0f172a;
      --text-muted: #475569;
      --text-sub: #64748b;
      --text-subtle: #94a3b8;
      --primary: #0f172a;
      --primary-hover: #1e293b;
      --accent-blue: #2563eb;
      --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
      --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);
      --shadow-lg: 0 12px 24px -4px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04);
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      background-color: var(--bg-page);
      color: var(--text-main);
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      min-height: 100vh;
      line-height: 1.5;
      -webkit-font-smoothing: antialiased;
    }

    /* Minimal Sticky Header */
    header {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(8px);
      border-bottom: 1px solid var(--border);
      position: sticky;
      top: 0;
      z-index: 50;
    }

    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0.85rem 1.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 0.65rem;
      text-decoration: none;
      color: var(--text-main);
    }

    .brand-icon {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      background: var(--primary);
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.95rem;
    }

    .brand-title {
      font-weight: 700;
      font-size: 1.05rem;
      letter-spacing: -0.02em;
    }

    .brand-title span {
      color: var(--text-sub);
      font-weight: 500;
      margin-left: 0.25rem;
    }

    .nav-actions {
      display: flex;
      align-items: center;
      gap: 1.25rem;
    }

    .edge-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.25rem 0.65rem;
      border-radius: 9999px;
      font-size: 0.75rem;
      font-weight: 600;
      background: #f0fdf4;
      border: 1px solid #bbf7d0;
      color: #166534;
    }

    .pulse-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #16a34a;
    }

    .nav-link {
      color: var(--text-muted);
      text-decoration: none;
      font-size: 0.85rem;
      font-weight: 600;
      transition: color 0.15s;
    }

    .nav-link:hover {
      color: var(--text-main);
    }

    /* Main Container */
    main {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2.5rem 1.5rem 5rem;
    }

    /* Hero Section */
    .hero {
      margin-bottom: 2.25rem;
    }

    .hero-label {
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--accent-blue);
      margin-bottom: 0.5rem;
    }

    .hero h1 {
      font-size: clamp(1.85rem, 3.5vw, 2.5rem);
      font-weight: 800;
      letter-spacing: -0.03em;
      color: var(--text-main);
      line-height: 1.2;
      margin-bottom: 0.75rem;
    }

    .hero p {
      color: var(--text-muted);
      font-size: 1rem;
      max-width: 720px;
      line-height: 1.6;
    }

    /* Minimal Stats Strip */
    .stats-strip {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
      gap: 0.75rem;
      margin-bottom: 2rem;
    }

    .stat-box {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 10px;
      padding: 0.9rem 1.15rem;
      box-shadow: var(--shadow-sm);
    }

    .stat-num {
      font-size: 1.35rem;
      font-weight: 800;
      color: var(--text-main);
      letter-spacing: -0.02em;
    }

    .stat-label {
      font-size: 0.75rem;
      color: var(--text-sub);
      font-weight: 500;
      margin-top: 0.1rem;
    }

    /* Tabs */
    .tab-nav {
      display: flex;
      gap: 1.5rem;
      border-bottom: 1px solid var(--border);
      margin-bottom: 1.75rem;
    }

    .tab-btn {
      background: none;
      border: none;
      padding: 0.65rem 0.2rem;
      font-size: 0.9rem;
      font-weight: 600;
      color: var(--text-sub);
      cursor: pointer;
      position: relative;
      transition: color 0.15s;
    }

    .tab-btn:hover {
      color: var(--text-main);
    }

    .tab-btn.active {
      color: var(--text-main);
    }

    .tab-btn.active::after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 0;
      right: 0;
      height: 2px;
      background: var(--text-main);
      border-radius: 2px;
    }

    /* Search & Filter Bar */
    .controls-panel {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 1rem;
      margin-bottom: 1.75rem;
      box-shadow: var(--shadow-sm);
    }

    .search-wrapper {
      position: relative;
      margin-bottom: 0.85rem;
    }

    .search-icon {
      position: absolute;
      left: 1rem;
      top: 50%;
      transform: translateY(-50%);
      color: var(--text-subtle);
      pointer-events: none;
    }

    .search-input {
      width: 100%;
      background: var(--bg-page);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 0.75rem 1rem 0.75rem 2.65rem;
      font-size: 0.925rem;
      color: var(--text-main);
      font-family: inherit;
      outline: none;
      transition: border-color 0.15s, box-shadow 0.15s;
    }

    .search-input:focus {
      border-color: var(--primary);
      background: #ffffff;
      box-shadow: 0 0 0 3px rgba(15, 23, 42, 0.06);
    }

    .search-input::placeholder {
      color: var(--text-subtle);
    }

    .filter-tags {
      display: flex;
      gap: 0.45rem;
      flex-wrap: wrap;
    }

    .filter-pill {
      background: var(--bg-page);
      border: 1px solid var(--border);
      color: var(--text-muted);
      padding: 0.35rem 0.75rem;
      border-radius: 6px;
      font-size: 0.78rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.15s;
    }

    .filter-pill:hover {
      background: #ffffff;
      color: var(--text-main);
      border-color: var(--border-hover);
    }

    .filter-pill.active {
      background: var(--primary);
      color: #ffffff;
      border-color: var(--primary);
    }

    /* Cards Grid */
    .cards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 1rem;
    }

    .card {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 1.15rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: border-color 0.15s, box-shadow 0.15s, transform 0.15s;
      box-shadow: var(--shadow-sm);
    }

    .card:hover {
      border-color: var(--border-hover);
      box-shadow: var(--shadow-md);
      transform: translateY(-2px);
    }

    .card-head {
      display: flex;
      align-items: flex-start;
      gap: 0.85rem;
      margin-bottom: 0.85rem;
    }

    .logo-frame {
      width: 52px;
      height: 52px;
      min-width: 52px;
      border-radius: 8px;
      background: #ffffff;
      border: 1px solid var(--border);
      padding: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    .logo-frame img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }

    .card-title-group {
      flex: 1;
      overflow: hidden;
    }

    .card-title {
      font-size: 1rem;
      font-weight: 700;
      color: var(--text-main);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      letter-spacing: -0.01em;
    }

    .card-sub {
      font-size: 0.75rem;
      color: var(--text-sub);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-top: 0.1rem;
    }

    .tag-row {
      display: flex;
      gap: 0.35rem;
      margin-top: 0.35rem;
      flex-wrap: wrap;
    }

    .tag {
      font-size: 0.6875rem;
      font-weight: 600;
      padding: 0.15rem 0.45rem;
      border-radius: 4px;
    }

    .tag-slate {
      background: var(--bg-subtle);
      color: var(--text-muted);
      border: 1px solid var(--border);
    }

    .tag-emerald {
      background: #f0fdf4;
      color: #166534;
      border: 1px solid #bbf7d0;
    }

    .tag-amber {
      background: #fefce8;
      color: #854d0e;
      border: 1px solid #fef08a;
    }

    .tag-rose {
      background: #fff1f2;
      color: #9f1239;
      border: 1px solid #fecdd3;
    }

    /* Codes Grid */
    .card-data-grid {
      background: var(--bg-page);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 0.65rem 0.85rem;
      margin-bottom: 0.85rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.5rem;
    }

    .data-item {
      display: flex;
      flex-direction: column;
    }

    .data-key {
      font-size: 0.65rem;
      font-weight: 700;
      text-transform: uppercase;
      color: var(--text-subtle);
      letter-spacing: 0.04em;
    }

    .data-val-btn {
      background: none;
      border: none;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.8rem;
      color: var(--text-main);
      font-weight: 600;
      cursor: pointer;
      text-align: left;
      padding: 0.1rem 0;
      display: inline-flex;
      align-items: center;
      gap: 0.3rem;
      transition: color 0.15s;
    }

    .data-val-btn:hover {
      color: var(--accent-blue);
    }

    /* Branch preview strip on card */
    .card-branch-summary {
      font-size: 0.75rem;
      color: var(--text-sub);
      display: flex;
      align-items: center;
      gap: 0.35rem;
      margin-bottom: 0.75rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .card-actions {
      display: flex;
      gap: 0.5rem;
      padding-top: 0.75rem;
      border-top: 1px solid var(--border);
    }

    .btn {
      flex: 1;
      padding: 0.5rem 0.75rem;
      border-radius: 6px;
      font-size: 0.78rem;
      font-weight: 600;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.35rem;
      transition: all 0.15s;
      text-decoration: none;
      border: 1px solid transparent;
    }

    .btn-secondary {
      background: #ffffff;
      border-color: var(--border);
      color: var(--text-main);
    }

    .btn-secondary:hover {
      background: var(--bg-page);
      border-color: var(--border-hover);
    }

    .btn-primary {
      background: var(--primary);
      color: #ffffff;
      border-color: var(--primary);
    }

    .btn-primary:hover {
      background: var(--primary-hover);
    }

    /* Modal Dialog */
    .modal-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(15, 23, 42, 0.45);
      backdrop-filter: blur(4px);
      z-index: 100;
      display: none;
      align-items: center;
      justify-content: center;
      padding: 1.25rem;
    }

    .modal-backdrop.open {
      display: flex;
    }

    .modal {
      background: #ffffff;
      border: 1px solid var(--border);
      border-radius: 14px;
      max-width: 620px;
      width: 100%;
      max-height: 88vh;
      overflow-y: auto;
      padding: 1.75rem;
      box-shadow: var(--shadow-lg);
      position: relative;
    }

    .modal-close {
      position: absolute;
      top: 1.25rem;
      right: 1.25rem;
      background: var(--bg-page);
      border: 1px solid var(--border);
      color: var(--text-sub);
      width: 28px;
      height: 28px;
      border-radius: 6px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.1rem;
      transition: all 0.15s;
    }

    .modal-close:hover {
      background: var(--border);
      color: var(--text-main);
    }

    /* Branch & Location Box in Modal */
    .branch-box {
      background: #f8fafc;
      border: 1px solid var(--border);
      border-radius: 10px;
      padding: 1rem;
      margin: 1.25rem 0;
    }

    .branch-box-title {
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--accent-blue);
      display: flex;
      align-items: center;
      gap: 0.4rem;
      margin-bottom: 0.4rem;
    }

    .branch-address {
      font-size: 0.875rem;
      color: var(--text-main);
      line-height: 1.5;
    }

    .branch-actions {
      display: flex;
      gap: 0.5rem;
      margin-top: 0.85rem;
      flex-wrap: wrap;
    }

    .branch-link-btn {
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--accent-blue);
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 0.3rem;
      background: #eff6ff;
      border: 1px solid #bfdbfe;
      padding: 0.35rem 0.65rem;
      border-radius: 6px;
      transition: background 0.15s;
    }

    .branch-link-btn:hover {
      background: #dbeafe;
    }

    /* API Docs Container */
    .docs-section {
      display: none;
    }

    .docs-section.active {
      display: block;
    }

    .endpoint-card {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 10px;
      padding: 1.25rem;
      margin-bottom: 1rem;
      box-shadow: var(--shadow-sm);
    }

    .endpoint-header {
      display: flex;
      align-items: center;
      gap: 0.65rem;
      margin-bottom: 0.5rem;
    }

    .method-pill {
      background: #f0fdf4;
      border: 1px solid #bbf7d0;
      color: #166534;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.72rem;
      font-weight: 700;
      padding: 0.15rem 0.5rem;
      border-radius: 4px;
    }

    .code-box {
      background: #0f172a;
      border-radius: 8px;
      padding: 0.85rem 1rem;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.8rem;
      color: #38bdf8;
      overflow-x: auto;
      margin-top: 0.65rem;
    }

    /* Toast */
    .toast {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      background: #0f172a;
      color: #ffffff;
      padding: 0.65rem 1.15rem;
      border-radius: 8px;
      font-size: 0.825rem;
      font-weight: 600;
      box-shadow: var(--shadow-lg);
      transform: translateY(60px);
      opacity: 0;
      transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
      z-index: 200;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .toast.show {
      transform: translateY(0);
      opacity: 1;
    }
  </style>
</head>
<body>

  <!-- Minimal Header -->
  <header>
    <div class="nav-container">
      <a href="/" class="brand">
        <div class="brand-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="21" x2="21" y2="21"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
            <polyline points="5 6 12 3 19 6"></polyline>
            <line x1="4" y1="10" x2="4" y2="21"></line>
            <line x1="20" y1="10" x2="20" y2="21"></line>
            <line x1="8" y1="14" x2="8" y2="17"></line>
            <line x1="12" y1="14" x2="12" y2="17"></line>
            <line x1="16" y1="14" x2="16" y2="17"></line>
          </svg>
        </div>
        <div class="brand-title">Banks & MFS <span>Directory</span></div>
      </a>

      <div class="nav-actions">
        <div class="edge-badge">
          <span class="pulse-dot"></span>
          <span>Cloudflare Edge (Dhaka DAC)</span>
        </div>
        <a href="#docs" class="nav-link" id="nav-docs-link">API Reference</a>
        <a href="https://github.com/ElahiAswat/banks-mfs" target="_blank" class="nav-link">GitHub</a>
      </div>
    </div>
  </header>

  <!-- Main Content -->
  <main>
    <!-- Hero Header -->
    <div class="hero">
      <div class="hero-label">Bangladesh Financial Services Directory</div>
      <h1>Bank Details, Branches & Logos</h1>
      <p>
        Instant Swift codes, principal branch locations, routing codes, and high-performance CDN logos for all 61 scheduled banks and 4 mobile financial services.
      </p>
    </div>

    <!-- Quick Stats -->
    <div class="stats-strip">
      <div class="stat-box">
        <div class="stat-num" id="stat-banks">61</div>
        <div class="stat-label">Scheduled Commercial Banks</div>
      </div>
      <div class="stat-box">
        <div class="stat-num" id="stat-mfs">4</div>
        <div class="stat-label">Mobile Financial Services (MFS)</div>
      </div>
      <div class="stat-box">
        <div class="stat-num" style="color: #16a34a;">&lt; 15 ms</div>
        <div class="stat-label">Edge Cache Response Time</div>
      </div>
      <div class="stat-box">
        <div class="stat-num" style="color: #2563eb;">WebP & PNG</div>
        <div class="stat-label">Dual CDN Asset Formats</div>
      </div>
    </div>

    <!-- View Mode Switcher -->
    <div class="tab-nav">
      <button class="tab-btn active" id="tab-explorer-btn" onclick="switchView('explorer')">Directory & Branches</button>
      <button class="tab-btn" id="tab-docs-btn" onclick="switchView('docs')">API Reference</button>
    </div>

    <!-- Directory Explorer Section -->
    <div id="view-explorer">
      <!-- Search & Filters -->
      <div class="controls-panel">
        <div class="search-wrapper">
          <svg class="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input 
            type="text" 
            id="search-input" 
            class="search-input" 
            placeholder="Search by bank name, slug, Swift code (e.g. BRAKBDDH), or branch address..." 
            oninput="renderCards()"
          />
        </div>

        <div class="filter-tags">
          <button class="filter-pill active" onclick="setFilter('all', this)">All Institutions</button>
          <button class="filter-pill" onclick="setFilter('mfs', this)">MFS (bKash, Nagad...)</button>
          <button class="filter-pill" onclick="setFilter('islamic', this)">Islamic Banking</button>
          <button class="filter-pill" onclick="setFilter('private', this)">Private Banks</button>
          <button class="filter-pill" onclick="setFilter('public', this)">State-Owned Banks</button>
          <button class="filter-pill" onclick="setFilter('foreign', this)">Foreign Banks</button>
        </div>
      </div>

      <!-- Card Grid -->
      <div class="cards-grid" id="cards-container">
        <!-- Injected via JavaScript -->
      </div>
    </div>

    <!-- API Reference Section -->
    <div id="view-docs" class="docs-section">
      <div class="endpoint-card">
        <div class="endpoint-header">
          <span class="method-pill">GET</span>
          <span style="font-family: 'JetBrains Mono', monospace; font-size: 0.9rem; font-weight: 600;">/api/v1/banks</span>
        </div>
        <p style="color: var(--text-muted); font-size: 0.85rem;">
          Returns all 61 banks with Swift codes, bank codes, branch services, headquarters address, and WebP/PNG CDN URLs. Supports <code>?search=</code>, <code>?type=</code>, and <code>?origin=</code>.
        </p>
        <div class="code-box">curl -s https://banks-mfs-api.asuhi-elaat.workers.dev/api/v1/banks</div>
        <div style="margin-top: 0.75rem;">
          <button class="btn btn-secondary" style="flex: none;" onclick="runApiTest('/api/v1/banks')">▶ Test Endpoint</button>
        </div>
      </div>

      <div class="endpoint-card">
        <div class="endpoint-header">
          <span class="method-pill">GET</span>
          <span style="font-family: 'JetBrains Mono', monospace; font-size: 0.9rem; font-weight: 600;">/api/v1/banks/:slug</span>
        </div>
        <p style="color: var(--text-muted); font-size: 0.85rem;">
          Lookup bank by slug (e.g. <code>brac</code>, <code>dbbl</code>) or Swift code (e.g. <code>BRAKBDDH</code>).
        </p>
        <div class="code-box">curl -s https://banks-mfs-api.asuhi-elaat.workers.dev/api/v1/banks/brac</div>
        <div style="margin-top: 0.75rem;">
          <button class="btn btn-secondary" style="flex: none;" onclick="runApiTest('/api/v1/banks/brac')">▶ Test BRAC Bank</button>
        </div>
      </div>

      <div class="endpoint-card">
        <div class="endpoint-header">
          <span class="method-pill">GET</span>
          <span style="font-family: 'JetBrains Mono', monospace; font-size: 0.9rem; font-weight: 600;">/api/v1/mfs</span>
        </div>
        <p style="color: var(--text-muted); font-size: 0.85rem;">
          Returns bKash, Nagad, Rocket, and Upay with logo CDN URLs and parent company info.
        </p>
        <div class="code-box">curl -s https://banks-mfs-api.asuhi-elaat.workers.dev/api/v1/mfs</div>
        <div style="margin-top: 0.75rem;">
          <button class="btn btn-secondary" style="flex: none;" onclick="runApiTest('/api/v1/mfs')">▶ Test MFS</button>
        </div>
      </div>

      <div class="endpoint-card">
        <div class="endpoint-header">
          <span class="method-pill">GET</span>
          <span style="font-family: 'JetBrains Mono', monospace; font-size: 0.9rem; font-weight: 600;">/logos/banks/:filename & /logos/mfs/:filename</span>
        </div>
        <p style="color: var(--text-muted); font-size: 0.85rem;">
          Direct CDN logo streaming from Cloudflare R2 with 1-year immutable edge caching.
        </p>
        <div class="code-box">&lt;img src="https://banks-mfs-api.asuhi-elaat.workers.dev/logos/banks/brac.webp" alt="BRAC Bank" /&gt;
&lt;img src="https://banks-mfs-api.asuhi-elaat.workers.dev/logos/mfs/bkash.webp" alt="bKash" /&gt;</div>
      </div>

      <!-- Live JSON Result Viewer -->
      <div id="api-result-box" style="display: none;" class="endpoint-card">
        <h4 style="font-size: 0.85rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.5rem;">Live Edge Response:</h4>
        <pre id="api-result-pre" style="max-height: 400px; overflow-y: auto; background: #0f172a; padding: 1rem; border-radius: 8px; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #f8fafc;"></pre>
      </div>
    </div>
  </main>

  <!-- Details & Branch Modal -->
  <div class="modal-backdrop" id="detail-modal" onclick="closeOnBackdrop(event)">
    <div class="modal" id="modal-box">
      <button class="modal-close" onclick="closeModal()">&times;</button>
      <div id="modal-content"></div>
    </div>
  </div>

  <!-- Toast Notification -->
  <div class="toast" id="toast">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4ade80" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span id="toast-text">Copied to clipboard</span>
  </div>

  <script>
    let allData = { banks: [], mfs: [] };
    let currentFilter = 'all';

    async function init() {
      try {
        const res = await fetch('/api/v1/all');
        const json = await res.json();
        if (json.success) {
          allData = json.data;
          document.getElementById('stat-banks').textContent = allData.banks.length;
          document.getElementById('stat-mfs').textContent = allData.mfs.length;
          renderCards();
        }
      } catch (err) {
        console.error('Failed to load data:', err);
      }
    }

    function renderCards() {
      const container = document.getElementById('cards-container');
      const search = document.getElementById('search-input').value.toLowerCase().trim();
      container.innerHTML = '';

      let list = [];

      if (currentFilter === 'all') {
        list = [
          ...allData.mfs.map(m => ({ ...m, isMfs: true })),
          ...allData.banks.map(b => ({ ...b, isMfs: false }))
        ];
      } else if (currentFilter === 'mfs') {
        list = allData.mfs.map(m => ({ ...m, isMfs: true }));
      } else {
        list = allData.banks.filter(b => {
          if (currentFilter === 'islamic') return (b.name + ' ' + (b.services || '')).toLowerCase().includes('islam');
          if (currentFilter === 'private') return (b.type || '').toLowerCase().includes('private');
          if (currentFilter === 'public') return (b.type || '').toLowerCase().includes('public');
          if (currentFilter === 'foreign') return (b.origin || '').toLowerCase().includes('foreign');
          return true;
        }).map(b => ({ ...b, isMfs: false }));
      }

      if (search) {
        list = list.filter(item => {
          return (
            (item.name && item.name.toLowerCase().includes(search)) ||
            (item.slug && item.slug.toLowerCase().includes(search)) ||
            (item.swift_code && item.swift_code.toLowerCase().includes(search)) ||
            (item.bank_code && item.bank_code.toLowerCase().includes(search)) ||
            (item.address && item.address.toLowerCase().includes(search)) ||
            (item.call_center && item.call_center.toLowerCase().includes(search))
          );
        });
      }

      if (list.length === 0) {
        container.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-sub);">No institutions matched your query.</div>';
        return;
      }

      list.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';

        const logoUrl = item.isMfs 
          ? '/logos/mfs/' + item.slug + '.webp' 
          : '/logos/banks/' + item.slug + '.webp';

        const isIslamic = !item.isMfs && item.name.toLowerCase().includes('islam');
        const tagClass = item.isMfs 
          ? 'tag-rose' 
          : (isIslamic ? 'tag-emerald' : (item.origin === 'Foreign Bank' ? 'tag-amber' : 'tag-slate'));

        const branchSnippet = item.isMfs 
          ? 'Digital Mobile Wallet • Bangladesh' 
          : (item.address ? '📍 ' + item.address.split(',')[0] + ' (Head Office)' : 'Head Office in Bangladesh');

        card.innerHTML = \`
          <div>
            <div class="card-head">
              <div class="logo-frame">
                <img src="\${logoUrl}" alt="\${item.name}" loading="lazy" onerror="this.src='/logos/\${item.isMfs ? 'mfs' : 'banks'}/\${item.slug}.png'" />
              </div>
              <div class="card-title-group">
                <div class="card-title" title="\${item.name}">\${item.name}</div>
                <div class="card-sub">\${item.registered_name || item.parent || 'Bangladesh'}</div>
                <div class="tag-row">
                  <span class="tag \${tagClass}">\${item.isMfs ? 'MFS' : (item.type || 'Bank')}</span>
                  \${item.established ? '<span class="tag tag-slate">Est. ' + item.established + '</span>' : ''}
                </div>
              </div>
            </div>

            <div class="card-data-grid">
              <div class="data-item">
                <span class="data-key">\${item.isMfs ? 'Parent Org' : 'Swift Code'}</span>
                <button class="data-val-btn" onclick="copyText('\${item.swift_code || item.parent || 'N/A'}', 'Swift Code')">
                  \${item.swift_code || item.parent || 'N/A'}
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                </button>
              </div>
              <div class="data-item">
                <span class="data-key">\${item.isMfs ? 'Helpline' : 'Bank Code'}</span>
                <button class="data-val-btn" onclick="copyText('\${item.bank_code || item.call_center || 'N/A'}', 'Code/Helpline')">
                  \${item.bank_code || item.call_center || 'N/A'}
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                </button>
              </div>
            </div>

            <div class="card-branch-summary" title="\${item.address || ''}">
              \${branchSnippet}
            </div>
          </div>

          <div class="card-actions">
            <button class="btn btn-secondary" onclick="copyLogoUrl('\${logoUrl}')">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
              Copy Logo URL
            </button>
            <button class="btn btn-primary" onclick="openModal('\${item.slug}', \${item.isMfs})">
              Details & Branches
            </button>
          </div>
        \`;

        container.appendChild(card);
      });
    }

    function setFilter(filter, el) {
      currentFilter = filter;
      document.querySelectorAll('.filter-tags .filter-pill').forEach(b => b.classList.remove('active'));
      el.classList.add('active');
      renderCards();
    }

    function switchView(view) {
      if (view === 'explorer') {
        document.getElementById('view-explorer').style.display = 'block';
        document.getElementById('view-docs').classList.remove('active');
        document.getElementById('tab-explorer-btn').classList.add('active');
        document.getElementById('tab-docs-btn').classList.remove('active');
      } else {
        document.getElementById('view-explorer').style.display = 'none';
        document.getElementById('view-docs').classList.add('active');
        document.getElementById('tab-explorer-btn').classList.remove('active');
        document.getElementById('tab-docs-btn').classList.add('active');
      }
    }

    document.getElementById('nav-docs-link').addEventListener('click', (e) => {
      e.preventDefault();
      switchView('docs');
      window.scrollTo({ top: 300, behavior: 'smooth' });
    });

    function copyText(val, name) {
      if (!val || val === 'N/A') return;
      navigator.clipboard.writeText(val);
      showToast(\`Copied \${name}: \${val}\`);
    }

    function copyLogoUrl(relUrl) {
      const full = window.location.origin + relUrl;
      navigator.clipboard.writeText(full);
      showToast('Copied WebP CDN Logo URL!');
    }

    function showToast(msg) {
      const toast = document.getElementById('toast');
      document.getElementById('toast-text').textContent = msg;
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 2200);
    }

    function openModal(slug, isMfs) {
      const item = isMfs
        ? allData.mfs.find(m => m.slug === slug)
        : allData.banks.find(b => b.slug === slug);
      if (!item) return;

      const logoUrl = isMfs ? '/logos/mfs/' + item.slug + '.webp' : '/logos/banks/' + item.slug + '.webp';
      const modal = document.getElementById('modal-content');

      let servicesHtml = '';
      if (item.services && Array.isArray(item.services)) {
        servicesHtml = \`
          <div style="margin-top: 1rem;">
            <div style="font-size: 0.72rem; text-transform: uppercase; color: var(--text-sub); font-weight: 700; margin-bottom: 0.4rem;">Services & Facilities</div>
            <div style="display: flex; flex-wrap: wrap; gap: 0.35rem;">
              \${item.services.map(s => '<span class="tag tag-slate">' + s + '</span>').join('')}
            </div>
          </div>
        \`;
      }

      let branchHtml = '';
      if (!isMfs) {
        branchHtml = \`
          <div class="branch-box">
            <div class="branch-box-title">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              Principal Office & Head Branch Location
            </div>
            <div class="branch-address">\${item.address || 'Address not listed'}</div>
            <div style="font-size: 0.8rem; color: var(--text-sub); margin-top: 0.4rem;">
              <strong>Hours:</strong> Sunday – Thursday: 10:00 am - 4:00 pm (Friday/Saturday Closed)
            </div>
            
            <div class="branch-actions">
              \${item.website ? \`<a href="\${item.website}" target="_blank" rel="noopener" class="branch-link-btn">
                <span>Official Branch & ATM Finder</span> &nearr;
              </a>\` : ''}
              \${item.url ? \`<a href="\${item.url}" target="_blank" rel="noopener" class="branch-link-btn">
                <span>View Full Branch Routing Numbers</span> &nearr;
              </a>\` : ''}
            </div>
          </div>
        \`;
      } else {
        branchHtml = \`
          <div class="branch-box">
            <div class="branch-box-title">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              Agent Network & Service Points
            </div>
            <div class="branch-address">
              Operates digitally nationwide via authorized agent points, merchant QR codes, and digital wallets across all districts in Bangladesh.
            </div>
            \${item.website ? \`
              <div class="branch-actions">
                <a href="\${item.website}" target="_blank" rel="noopener" class="branch-link-btn">
                  <span>Visit \${item.name} Official Website</span> &nearr;
                </a>
              </div>
            \` : ''}
          </div>
        \`;
      }

      modal.innerHTML = \`
        <div style="display: flex; gap: 1rem; align-items: center; margin-bottom: 1.25rem;">
          <div class="logo-frame" style="width: 64px; height: 64px;">
            <img src="\${logoUrl}" alt="\${item.name}" />
          </div>
          <div>
            <h2 style="font-size: 1.35rem; font-weight: 800; letter-spacing: -0.02em;">\${item.name}</h2>
            <p style="color: var(--text-sub); font-size: 0.85rem;">\${item.registered_name || item.parent || ''}</p>
          </div>
        </div>

        <div style="background: var(--bg-page); border: 1px solid var(--border); border-radius: 8px; padding: 0.85rem; display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; font-size: 0.85rem;">
          <div><strong style="color: var(--text-sub);">Swift Code:</strong> \${item.swift_code || 'N/A'}</div>
          <div><strong style="color: var(--text-sub);">Bank Code:</strong> \${item.bank_code || 'N/A'}</div>
          <div><strong style="color: var(--text-sub);">Call Center:</strong> \${item.call_center || 'N/A'}</div>
          <div><strong style="color: var(--text-sub);">Email:</strong> \${item.email || 'N/A'}</div>
          <div><strong style="color: var(--text-sub);">Established:</strong> \${item.established || 'N/A'}</div>
          <div><strong style="color: var(--text-sub);">Website:</strong> \${item.website ? '<a href="' + item.website + '" target="_blank" style="color: var(--accent-blue); text-decoration: none;">' + item.website.replace('https://', '') + ' &nearr;</a>' : 'N/A'}</div>
        </div>

        \${branchHtml}

        \${servicesHtml}

        <div style="margin-top: 1.5rem; display: flex; gap: 0.5rem; padding-top: 1rem; border-top: 1px solid var(--border);">
          <button class="btn btn-primary" onclick="copyLogoUrl('\${logoUrl}')">Copy WebP CDN Link</button>
          <a href="\${logoUrl}" download="\${item.slug}.webp" class="btn btn-secondary">Download WebP</a>
          <a href="/logos/\${isMfs ? 'mfs' : 'banks'}/\${item.slug}.png" download="\${item.slug}.png" class="btn btn-secondary">Download PNG</a>
        </div>
      \`;

      document.getElementById('detail-modal').classList.add('open');
    }

    function closeModal() {
      document.getElementById('detail-modal').classList.remove('open');
    }

    function closeOnBackdrop(e) {
      if (e.target.id === 'detail-modal') closeModal();
    }

    async function runApiTest(url) {
      const box = document.getElementById('api-result-box');
      const pre = document.getElementById('api-result-pre');
      box.style.display = 'block';
      pre.textContent = 'Fetching from Cloudflare Edge...';

      try {
        const res = await fetch(url);
        const data = await res.json();
        pre.textContent = JSON.stringify(data, null, 2);
        box.scrollIntoView({ behavior: 'smooth' });
      } catch (err) {
        pre.textContent = 'Error: ' + err.message;
      }
    }

    init();
  </script>
</body>
</html>`;
}
