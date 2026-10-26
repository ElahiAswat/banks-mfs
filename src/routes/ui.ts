export function renderShowcaseHtml(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Banks & MFS BD | Blazing Fast Edge API & Logo CDN</title>
  <meta name="description" content="Ultra-fast Edge API, logo CDN, and Swift/Routing directory for all Bangladesh Banks and Mobile Financial Services (bKash, Nagad, Rocket, Upay). Powered by Cloudflare Workers, D1 & R2.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-dark: #07090e;
      --bg-card: rgba(18, 22, 34, 0.75);
      --bg-card-hover: rgba(28, 34, 52, 0.9);
      --border: rgba(255, 255, 255, 0.08);
      --border-focus: rgba(99, 102, 241, 0.5);
      --primary: #6366f1;
      --primary-hover: #4f46e5;
      --accent-cyan: #06b6d4;
      --accent-emerald: #10b981;
      --accent-amber: #f59e0b;
      --text-main: #f8fafc;
      --text-muted: #94a3b8;
      --text-sub: #64748b;
      --glow: rgba(99, 102, 241, 0.15);
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      background-color: var(--bg-dark);
      background-image: 
        radial-gradient(circle at 15% 10%, rgba(99, 102, 241, 0.12) 0%, transparent 40%),
        radial-gradient(circle at 85% 20%, rgba(6, 182, 212, 0.1) 0%, transparent 40%),
        radial-gradient(circle at 50% 80%, rgba(16, 185, 129, 0.06) 0%, transparent 50%);
      color: var(--text-main);
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
      min-height: 100vh;
      overflow-x: hidden;
    }

    /* Header & Hero */
    header {
      border-bottom: 1px solid var(--border);
      backdrop-filter: blur(12px);
      position: sticky;
      top: 0;
      z-index: 50;
      background: rgba(7, 9, 14, 0.85);
    }

    .nav-container {
      max-width: 1280px;
      margin: 0 auto;
      padding: 1rem 1.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      text-decoration: none;
      color: inherit;
    }

    .brand-logo-icon {
      width: 38px;
      height: 38px;
      border-radius: 10px;
      background: linear-gradient(135deg, #6366f1, #06b6d4);
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 0 20px rgba(99, 102, 241, 0.4);
    }

    .brand-title {
      font-family: 'Outfit', sans-serif;
      font-weight: 700;
      font-size: 1.25rem;
      letter-spacing: -0.02em;
    }

    .brand-title span {
      background: linear-gradient(90deg, #6366f1, #06b6d4);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .nav-links {
      display: flex;
      gap: 1.5rem;
      align-items: center;
    }

    .nav-link {
      color: var(--text-muted);
      text-decoration: none;
      font-size: 0.875rem;
      font-weight: 500;
      transition: color 0.2s;
    }

    .nav-link:hover, .nav-link.active {
      color: var(--text-main);
    }

    .edge-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.35rem 0.75rem;
      border-radius: 9999px;
      font-size: 0.75rem;
      font-weight: 600;
      background: rgba(16, 185, 129, 0.12);
      border: 1px solid rgba(16, 185, 129, 0.3);
      color: #34d399;
    }

    .edge-badge .pulse-dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #10b981;
      box-shadow: 0 0 8px #10b981;
      animation: pulse 2s infinite;
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.4; transform: scale(0.85); }
    }

    /* Main Container */
    main {
      max-width: 1280px;
      margin: 0 auto;
      padding: 3rem 1.5rem 6rem;
    }

    /* Hero */
    .hero {
      text-align: center;
      max-width: 800px;
      margin: 0 auto 3rem;
    }

    .hero-pill {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.35rem 1rem;
      border-radius: 9999px;
      background: rgba(99, 102, 241, 0.1);
      border: 1px solid rgba(99, 102, 241, 0.25);
      color: #a5b4fc;
      font-size: 0.8125rem;
      font-weight: 600;
      margin-bottom: 1.5rem;
    }

    .hero h1 {
      font-family: 'Outfit', sans-serif;
      font-size: clamp(2.25rem, 5vw, 3.5rem);
      font-weight: 800;
      line-height: 1.15;
      letter-spacing: -0.03em;
      margin-bottom: 1.25rem;
    }

    .hero h1 .gradient-text {
      background: linear-gradient(135deg, #a5b4fc 0%, #38bdf8 50%, #4ade80 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .hero p {
      color: var(--text-muted);
      font-size: 1.125rem;
      line-height: 1.6;
      margin-bottom: 2rem;
    }

    /* Quick Stats */
    .stats-bar {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 1rem;
      margin-bottom: 2.5rem;
    }

    .stat-card {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 1.25rem 1.5rem;
      backdrop-filter: blur(10px);
      transition: transform 0.2s, border-color 0.2s;
    }

    .stat-card:hover {
      transform: translateY(-2px);
      border-color: rgba(99, 102, 241, 0.3);
    }

    .stat-value {
      font-family: 'Outfit', sans-serif;
      font-size: 1.75rem;
      font-weight: 700;
      color: var(--text-main);
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .stat-label {
      color: var(--text-sub);
      font-size: 0.8125rem;
      margin-top: 0.25rem;
      font-weight: 500;
    }

    /* Search & Filter Controls */
    .search-filter-section {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 1.25rem;
      margin-bottom: 2.5rem;
      backdrop-filter: blur(12px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }

    .search-box-wrapper {
      position: relative;
      margin-bottom: 1rem;
    }

    .search-icon {
      position: absolute;
      left: 1.25rem;
      top: 50%;
      transform: translateY(-50%);
      color: var(--text-sub);
      pointer-events: none;
    }

    .search-input {
      width: 100%;
      background: rgba(10, 14, 24, 0.8);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 0.9rem 1rem 0.9rem 3.25rem;
      color: var(--text-main);
      font-size: 1rem;
      font-family: inherit;
      outline: none;
      transition: border-color 0.2s, box-shadow 0.2s;
    }

    .search-input:focus {
      border-color: var(--primary);
      box-shadow: 0 0 0 3px var(--glow);
    }

    .search-input::placeholder {
      color: var(--text-sub);
    }

    .filter-pills {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
    }

    .filter-btn {
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid var(--border);
      color: var(--text-muted);
      padding: 0.5rem 1rem;
      border-radius: 10px;
      font-size: 0.8125rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
    }

    .filter-btn:hover {
      background: rgba(255, 255, 255, 0.08);
      color: var(--text-main);
    }

    .filter-btn.active {
      background: var(--primary);
      border-color: var(--primary);
      color: #ffffff;
      box-shadow: 0 0 16px rgba(99, 102, 241, 0.4);
    }

    /* Tabs (Showcase vs API Docs) */
    .view-tabs {
      display: flex;
      gap: 1rem;
      margin-bottom: 2rem;
      border-bottom: 1px solid var(--border);
      padding-bottom: 0.75rem;
    }

    .view-tab {
      background: none;
      border: none;
      color: var(--text-sub);
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      padding: 0.5rem 0.75rem;
      position: relative;
      transition: color 0.2s;
    }

    .view-tab.active {
      color: var(--text-main);
    }

    .view-tab.active::after {
      content: '';
      position: absolute;
      bottom: -0.85rem;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(90deg, #6366f1, #06b6d4);
      border-radius: 2px;
    }

    /* Cards Grid */
    .cards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 1.25rem;
    }

    .card {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 1.25rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
      backdrop-filter: blur(8px);
      position: relative;
      overflow: hidden;
    }

    .card:hover {
      transform: translateY(-3px);
      border-color: rgba(99, 102, 241, 0.35);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4), 0 0 20px var(--glow);
    }

    .card-top {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      margin-bottom: 1rem;
    }

    .logo-container {
      width: 64px;
      height: 64px;
      min-width: 64px;
      border-radius: 12px;
      background: #ffffff;
      padding: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
      overflow: hidden;
    }

    .logo-container img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }

    .card-header-info {
      flex: 1;
      overflow: hidden;
    }

    .card-title {
      font-family: 'Outfit', sans-serif;
      font-size: 1.125rem;
      font-weight: 700;
      color: var(--text-main);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .card-subtitle {
      font-size: 0.75rem;
      color: var(--text-sub);
      margin-top: 0.15rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .badge-row {
      display: flex;
      gap: 0.4rem;
      margin-top: 0.4rem;
      flex-wrap: wrap;
    }

    .badge {
      display: inline-block;
      padding: 0.2rem 0.5rem;
      border-radius: 6px;
      font-size: 0.6875rem;
      font-weight: 600;
      letter-spacing: 0.02em;
    }

    .badge-primary {
      background: rgba(99, 102, 241, 0.15);
      color: #818cf8;
      border: 1px solid rgba(99, 102, 241, 0.3);
    }

    .badge-islamic {
      background: rgba(16, 185, 129, 0.15);
      color: #34d399;
      border: 1px solid rgba(16, 185, 129, 0.3);
    }

    .badge-foreign {
      background: rgba(245, 158, 11, 0.15);
      color: #fbbf24;
      border: 1px solid rgba(245, 158, 11, 0.3);
    }

    .badge-mfs {
      background: rgba(236, 72, 153, 0.15);
      color: #f472b6;
      border: 1px solid rgba(236, 72, 153, 0.3);
    }

    /* Key Information Pills */
    .card-codes {
      background: rgba(10, 14, 24, 0.6);
      border-radius: 10px;
      padding: 0.75rem;
      margin-bottom: 1rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.5rem;
    }

    .code-item {
      display: flex;
      flex-direction: column;
    }

    .code-label {
      font-size: 0.6875rem;
      color: var(--text-sub);
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 0.04em;
    }

    .code-val-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.8125rem;
      color: #e2e8f0;
      background: none;
      border: none;
      cursor: pointer;
      text-align: left;
      padding: 0.15rem 0;
      transition: color 0.15s;
    }

    .code-val-btn:hover {
      color: #38bdf8;
    }

    .card-actions {
      display: flex;
      gap: 0.5rem;
      padding-top: 0.75rem;
      border-top: 1px solid var(--border);
    }

    .btn {
      flex: 1;
      padding: 0.55rem 0.75rem;
      border-radius: 8px;
      font-size: 0.75rem;
      font-weight: 600;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.4rem;
      transition: all 0.2s;
      text-decoration: none;
    }

    .btn-secondary {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid var(--border);
      color: var(--text-muted);
    }

    .btn-secondary:hover {
      background: rgba(255, 255, 255, 0.1);
      color: var(--text-main);
    }

    .btn-primary {
      background: var(--primary);
      border: 1px solid var(--primary);
      color: #ffffff;
    }

    .btn-primary:hover {
      background: var(--primary-hover);
    }

    /* Modal */
    .modal-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.75);
      backdrop-filter: blur(8px);
      z-index: 100;
      display: none;
      align-items: center;
      justify-content: center;
      padding: 1.5rem;
    }

    .modal-backdrop.open {
      display: flex;
    }

    .modal {
      background: #0f1420;
      border: 1px solid var(--border);
      border-radius: 20px;
      max-width: 640px;
      width: 100%;
      max-height: 85vh;
      overflow-y: auto;
      padding: 2rem;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
      position: relative;
    }

    .modal-close {
      position: absolute;
      top: 1.5rem;
      right: 1.5rem;
      background: rgba(255, 255, 255, 0.08);
      border: none;
      color: var(--text-muted);
      width: 32px;
      height: 32px;
      border-radius: 8px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.25rem;
    }

    .modal-close:hover {
      background: rgba(255, 255, 255, 0.15);
      color: var(--text-main);
    }

    /* API Docs Section */
    .api-docs {
      display: none;
    }

    .api-docs.active {
      display: block;
    }

    .endpoint-card {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 1.5rem;
      margin-bottom: 1.25rem;
    }

    .endpoint-header {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 0.75rem;
    }

    .method-badge {
      background: rgba(16, 185, 129, 0.2);
      color: #34d399;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.75rem;
      font-weight: 700;
      padding: 0.25rem 0.6rem;
      border-radius: 6px;
    }

    .endpoint-path {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.9375rem;
      color: #e2e8f0;
    }

    .code-block {
      background: #090c15;
      border: 1px solid var(--border);
      border-radius: 10px;
      padding: 1rem;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.8125rem;
      color: #38bdf8;
      overflow-x: auto;
      margin-top: 0.75rem;
      position: relative;
    }

    .interactive-playground {
      margin-top: 1rem;
      display: flex;
      gap: 0.75rem;
      align-items: center;
    }

    /* Toast notification */
    .toast {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      background: #1e1b4b;
      border: 1px solid #6366f1;
      color: #e0e7ff;
      padding: 0.75rem 1.25rem;
      border-radius: 10px;
      font-size: 0.875rem;
      font-weight: 600;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
      transform: translateY(100px);
      opacity: 0;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
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

  <!-- Top Navigation -->
  <header>
    <div class="nav-container">
      <a href="/" class="brand">
        <div class="brand-logo-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
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
        <div class="brand-title">Banks & MFS <span>BD</span></div>
      </a>

      <div class="nav-links">
        <div class="edge-badge">
          <span class="pulse-dot"></span>
          <span>Cloudflare Edge Active</span>
        </div>
        <a href="#docs" class="nav-link" id="nav-docs-btn">API Docs</a>
        <a href="https://github.com" target="_blank" class="nav-link">GitHub</a>
      </div>
    </div>
  </header>

  <!-- Main View -->
  <main>
    <!-- Hero Header -->
    <div class="hero">
      <div class="hero-pill">
        ⚡ Sub-15ms Edge Response & Zero Egress
      </div>
      <h1>
        All Bangladesh Banks & MFS<br>
        <span class="gradient-text">Logos, Swift Codes & Instant API</span>
      </h1>
      <p>
        Effortless direct CDN links for checkout forms, payment gateways, and KYC apps.
        Powered by Cloudflare Workers, D1 SQLite, and R2 Object Storage.
      </p>
    </div>

    <!-- Quick Stats -->
    <div class="stats-bar">
      <div class="stat-card">
        <div class="stat-value" id="stat-banks">61</div>
        <div class="stat-label">Scheduled Commercial Banks</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" id="stat-mfs">4</div>
        <div class="stat-label">Mobile Financial Services (MFS)</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" style="color: #34d399;">&lt; 15 ms</div>
        <div class="stat-label">Global & Dhaka Edge Latency</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" style="color: #38bdf8;">WebP & PNG</div>
        <div class="stat-label">Optimized R2 Asset Formats</div>
      </div>
    </div>

    <!-- View Mode Switcher -->
    <div class="view-tabs">
      <button class="view-tab active" id="tab-explorer" onclick="switchTab('explorer')">Explorer & Logos</button>
      <button class="view-tab" id="tab-docs" onclick="switchTab('docs')">Edge API Documentation</button>
    </div>

    <!-- Explorer Section -->
    <div id="section-explorer">
      <!-- Search & Filters -->
      <div class="search-filter-section">
        <div class="search-box-wrapper">
          <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input 
            type="text" 
            id="search-input" 
            class="search-input" 
            placeholder="Search by bank name, slug, Swift code (e.g. BRAKBDDH), or bank code..." 
            oninput="handleSearch()"
          />
        </div>

        <div class="filter-pills">
          <button class="filter-btn active" onclick="setFilter('all', this)">All Institutions</button>
          <button class="filter-btn" onclick="setFilter('mfs', this)">MFS (bKash, Nagad...)</button>
          <button class="filter-btn" onclick="setFilter('islamic', this)">Islami Banks</button>
          <button class="filter-btn" onclick="setFilter('private', this)">Private Banks</button>
          <button class="filter-btn" onclick="setFilter('public', this)">State-Owned Banks</button>
          <button class="filter-btn" onclick="setFilter('foreign', this)">Foreign Banks</button>
        </div>
      </div>

      <!-- Institutions Card Grid -->
      <div class="cards-grid" id="cards-container">
        <!-- Rendered dynamically by JS -->
      </div>
    </div>

    <!-- API Docs Section -->
    <div id="section-docs" class="api-docs">
      <div class="endpoint-card">
        <div class="endpoint-header">
          <span class="method-badge">GET</span>
          <span class="endpoint-path">/api/v1/banks</span>
        </div>
        <p style="color: var(--text-muted); font-size: 0.875rem;">
          Returns all 61 banks with Swift codes, bank codes, branch services, and WebP/PNG CDN URLs. Supports <code>?search=</code>, <code>?type=</code>, and <code>?origin=</code>.
        </p>
        <div class="code-block" id="example-banks">curl -s https://[your-worker].workers.dev/api/v1/banks</div>
        <div class="interactive-playground">
          <button class="btn btn-secondary" onclick="tryApi('/api/v1/banks')">▶ Run Live Test</button>
        </div>
      </div>

      <div class="endpoint-card">
        <div class="endpoint-header">
          <span class="method-badge">GET</span>
          <span class="endpoint-path">/api/v1/banks/:slug</span>
        </div>
        <p style="color: var(--text-muted); font-size: 0.875rem;">
          Get bank details by its slug (e.g. <code>brac</code>, <code>dbbl</code>) or Swift code (e.g. <code>BRAKBDDH</code>).
        </p>
        <div class="code-block">curl -s https://[your-worker].workers.dev/api/v1/banks/brac</div>
        <div class="interactive-playground">
          <button class="btn btn-secondary" onclick="tryApi('/api/v1/banks/brac')">▶ Run Live Test (BRAC)</button>
        </div>
      </div>

      <div class="endpoint-card">
        <div class="endpoint-header">
          <span class="method-badge">GET</span>
          <span class="endpoint-path">/api/v1/mfs</span>
        </div>
        <p style="color: var(--text-muted); font-size: 0.875rem;">
          List all Mobile Financial Services providers (bKash, Nagad, Rocket, Upay) with logo CDN URLs and parent institutions.
        </p>
        <div class="code-block">curl -s https://[your-worker].workers.dev/api/v1/mfs</div>
        <div class="interactive-playground">
          <button class="btn btn-secondary" onclick="tryApi('/api/v1/mfs')">▶ Run Live Test</button>
        </div>
      </div>

      <div class="endpoint-card">
        <div class="endpoint-header">
          <span class="method-badge">GET</span>
          <span class="endpoint-path">/logos/banks/:filename & /logos/mfs/:filename</span>
        </div>
        <p style="color: var(--text-muted); font-size: 0.875rem;">
          Stream high-performance logos directly from Cloudflare R2 with 1-year immutable edge caching.
        </p>
        <div class="code-block">&lt;img src="https://[your-worker].workers.dev/logos/banks/brac.webp" alt="BRAC Bank" /&gt;
&lt;img src="https://[your-worker].workers.dev/logos/mfs/bkash.webp" alt="bKash" /&gt;</div>
      </div>

      <!-- Live JSON Result Modal/Box -->
      <div id="live-response-box" style="display: none; margin-top: 1.5rem;" class="endpoint-card">
        <h4 style="margin-bottom: 0.5rem; color: #34d399;">Live API Response:</h4>
        <pre id="live-response-pre" style="max-height: 400px; overflow-y: auto; background: #05070d; padding: 1rem; border-radius: 8px; font-family: 'JetBrains Mono', monospace; font-size: 0.8125rem; color: #f8fafc;"></pre>
      </div>
    </div>
  </main>

  <!-- Bank Details Modal -->
  <div class="modal-backdrop" id="detail-modal" onclick="closeModalOnBackdrop(event)">
    <div class="modal" id="modal-content">
      <button class="modal-close" onclick="closeModal()">&times;</button>
      <div id="modal-body"></div>
    </div>
  </div>

  <!-- Toast Notification -->
  <div class="toast" id="toast">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#34d399" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span id="toast-msg">Copied to clipboard!</span>
  </div>

  <script>
    let allData = { banks: [], mfs: [] };
    let currentFilter = 'all';

    async function loadData() {
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
        console.error('Failed to load institutions:', err);
      }
    }

    function renderCards() {
      const container = document.getElementById('cards-container');
      const search = document.getElementById('search-input').value.toLowerCase().trim();
      container.innerHTML = '';

      let list = [];

      // Combine according to filter
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

      // Filter by search query
      if (search) {
        list = list.filter(item => {
          return (
            (item.name && item.name.toLowerCase().includes(search)) ||
            (item.slug && item.slug.toLowerCase().includes(search)) ||
            (item.swift_code && item.swift_code.toLowerCase().includes(search)) ||
            (item.bank_code && item.bank_code.toLowerCase().includes(search)) ||
            (item.call_center && item.call_center.toLowerCase().includes(search))
          );
        });
      }

      if (list.length === 0) {
        container.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-sub);">No institutions matched your search query.</div>';
        return;
      }

      list.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';

        const logoUrl = item.isMfs 
          ? '/logos/mfs/' + item.slug + '.webp' 
          : '/logos/banks/' + item.slug + '.webp';

        const isIslamic = !item.isMfs && item.name.toLowerCase().includes('islam');
        const badgeClass = item.isMfs 
          ? 'badge-mfs' 
          : (isIslamic ? 'badge-islamic' : (item.origin === 'Foreign Bank' ? 'badge-foreign' : 'badge-primary'));
        
        const badgeText = item.isMfs ? 'MFS' : (item.type || 'Bank');

        card.innerHTML = \`
          <div class="card-top">
            <div class="logo-container">
              <img src="\${logoUrl}" alt="\${item.name}" loading="lazy" onerror="this.src='/logos/\${item.isMfs ? 'mfs' : 'banks'}/\${item.slug}.png'" />
            </div>
            <div class="card-header-info">
              <div class="card-title" title="\${item.name}">\${item.name}</div>
              <div class="card-subtitle">\${item.registered_name || item.parent || 'Bangladesh'}</div>
              <div class="badge-row">
                <span class="badge \${badgeClass}">\${badgeText}</span>
                \${item.established ? '<span class="badge badge-primary">Est. ' + item.established + '</span>' : ''}
              </div>
            </div>
          </div>

          <div class="card-codes">
            <div class="code-item">
              <span class="code-label">\${item.isMfs ? 'Parent Org' : 'Swift Code'}</span>
              <button class="code-val-btn" onclick="copyText('\${item.swift_code || item.parent || 'N/A'}', 'Swift Code')">
                \${item.swift_code || item.parent || 'N/A'}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
              </button>
            </div>
            <div class="code-item">
              <span class="code-label">\${item.isMfs ? 'Helpline' : 'Bank Code'}</span>
              <button class="code-val-btn" onclick="copyText('\${item.bank_code || item.call_center || 'N/A'}', 'Code/Helpline')">
                \${item.bank_code || item.call_center || 'N/A'}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
              </button>
            </div>
          </div>

          <div class="card-actions">
            <button class="btn btn-secondary" onclick="copyLogoUrl('\${logoUrl}')">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
              Logo URL
            </button>
            <button class="btn btn-primary" onclick="openDetailModal('\${item.slug}', \${item.isMfs})">
              Details
            </button>
          </div>
        \`;

        container.appendChild(card);
      });
    }

    function handleSearch() {
      renderCards();
    }

    function setFilter(filter, btn) {
      currentFilter = filter;
      document.querySelectorAll('.filter-pills .filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderCards();
    }

    function switchTab(tab) {
      if (tab === 'explorer') {
        document.getElementById('section-explorer').style.display = 'block';
        document.getElementById('section-docs').classList.remove('active');
        document.getElementById('tab-explorer').classList.add('active');
        document.getElementById('tab-docs').classList.remove('active');
      } else {
        document.getElementById('section-explorer').style.display = 'none';
        document.getElementById('section-docs').classList.add('active');
        document.getElementById('tab-explorer').classList.remove('active');
        document.getElementById('tab-docs').classList.add('active');
      }
    }

    document.getElementById('nav-docs-btn').addEventListener('click', (e) => {
      e.preventDefault();
      switchTab('docs');
      window.scrollTo({ top: 400, behavior: 'smooth' });
    });

    function copyText(text, label) {
      if (!text || text === 'N/A') return;
      navigator.clipboard.writeText(text);
      showToast(\`Copied \${label}: \${text}\`);
    }

    function copyLogoUrl(relUrl) {
      const fullUrl = window.location.origin + relUrl;
      navigator.clipboard.writeText(fullUrl);
      showToast('Copied WebP CDN Logo URL!');
    }

    function showToast(msg) {
      const toast = document.getElementById('toast');
      document.getElementById('toast-msg').textContent = msg;
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 2500);
    }

    function openDetailModal(slug, isMfs) {
      const item = isMfs 
        ? allData.mfs.find(m => m.slug === slug)
        : allData.banks.find(b => b.slug === slug);
      if (!item) return;

      const logoUrl = isMfs ? '/logos/mfs/' + item.slug + '.webp' : '/logos/banks/' + item.slug + '.webp';
      const body = document.getElementById('modal-body');

      let servicesHtml = '';
      if (item.services && Array.isArray(item.services)) {
        servicesHtml = \`
          <div style="margin-top: 1.25rem;">
            <div style="font-size: 0.75rem; text-transform: uppercase; color: var(--text-sub); font-weight: 700; margin-bottom: 0.5rem;">Services & Facilities</div>
            <div style="display: flex; flex-wrap: wrap; gap: 0.4rem;">
              \${item.services.map(s => '<span class="badge badge-primary">' + s + '</span>').join('')}
            </div>
          </div>
        \`;
      }

      body.innerHTML = \`
        <div style="display: flex; gap: 1.25rem; align-items: center; margin-bottom: 1.5rem;">
          <div class="logo-container" style="width: 72px; height: 72px;">
            <img src="\${logoUrl}" alt="\${item.name}" />
          </div>
          <div>
            <h2 style="font-family: 'Outfit'; font-size: 1.5rem; font-weight: 700;">\${item.name}</h2>
            <p style="color: var(--text-muted); font-size: 0.875rem;">\${item.registered_name || item.parent || ''}</p>
          </div>
        </div>

        <div style="background: rgba(10, 14, 24, 0.6); border-radius: 12px; padding: 1rem; display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; font-size: 0.875rem;">
          <div><strong style="color: var(--text-sub);">Swift Code:</strong> \${item.swift_code || 'N/A'}</div>
          <div><strong style="color: var(--text-sub);">Bank Code:</strong> \${item.bank_code || 'N/A'}</div>
          <div><strong style="color: var(--text-sub);">Call Center:</strong> \${item.call_center || 'N/A'}</div>
          <div><strong style="color: var(--text-sub);">Email:</strong> \${item.email || 'N/A'}</div>
          <div><strong style="color: var(--text-sub);">Established:</strong> \${item.established || 'N/A'}</div>
          <div><strong style="color: var(--text-sub);">Website:</strong> \${item.website ? '<a href="' + item.website + '" target="_blank" style="color: #38bdf8; text-decoration: none;">Visit Site &nearr;</a>' : 'N/A'}</div>
        </div>

        \${item.address ? \`
          <div style="margin-top: 1.25rem; font-size: 0.875rem;">
            <strong style="color: var(--text-sub); display: block; font-size: 0.75rem; text-transform: uppercase; margin-bottom: 0.25rem;">Head Office Address:</strong>
            <p style="color: var(--text-main); line-height: 1.5;">\${item.address}</p>
          </div>
        \` : ''}

        \${servicesHtml}

        <div style="margin-top: 1.75rem; display: flex; gap: 0.75rem;">
          <button class="btn btn-primary" onclick="copyLogoUrl('\${logoUrl}')">Copy WebP CDN URL</button>
          <a href="\${logoUrl}" download="\${item.slug}.webp" class="btn btn-secondary">Download WebP</a>
        </div>
      \`;

      document.getElementById('detail-modal').classList.add('open');
    }

    function closeModal() {
      document.getElementById('detail-modal').classList.remove('open');
    }

    function closeModalOnBackdrop(e) {
      if (e.target.id === 'detail-modal') closeModal();
    }

    async function tryApi(url) {
      const box = document.getElementById('live-response-box');
      const pre = document.getElementById('live-response-pre');
      box.style.display = 'block';
      pre.textContent = 'Loading live data from Cloudflare edge...';

      try {
        const res = await fetch(url);
        const data = await res.json();
        pre.textContent = JSON.stringify(data, null, 2);
        box.scrollIntoView({ behavior: 'smooth' });
      } catch (err) {
        pre.textContent = 'Error fetching API: ' + err.message;
      }
    }

    loadData();
  </script>
</body>
</html>`;
}
