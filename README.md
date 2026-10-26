# Bangladesh Banks & MFS Edge API & Logo CDN

Ultra-fast Edge API, Swift/Routing directory, and Logo CDN for all scheduled banks in Bangladesh and Mobile Financial Services (bKash, Nagad, Rocket, Upay).

Built natively for **Cloudflare Workers**, **Cloudflare D1 (SQLite)**, and **Cloudflare R2 (Object Storage)** for **sub-15ms edge latency** and **zero egress costs**.

---

## ⚡ Highlights

* **61 Commercial Banks & 4 MFS**: Complete directory with Swift codes, bank codes, call centers, and headquarters addresses.
* **Dual-Format Logo Assets**: High-performance `.webp` (<5 KB) with `.png` fallbacks.
* **Zero Egress Fees**: Logo delivery backed by Cloudflare R2 and 1-year immutable edge cache headers (`Cache-Control: public, max-age=31536000, immutable`).
* **Sub-15ms Edge DB**: Powered by Cloudflare D1 (SQLite at the edge).
* **Developer Showcase**: Interactive web UI at `/` with search, copy-paste Swift codes, and instant API sandbox.

---

## 🗄 Cloudflare Resource Configuration

* **D1 Database ID**: `63db858a-1756-4416-87f9-03d25c3c8fdb` (Bound to `DB`)
* **R2 Bucket Name**: `bank-mfs` (Bound to `BUCKET`)

---

## 🚀 Quick Setup & Deployment

### 1. Install Dependencies
```bash
npm install
```

### 2. Apply D1 Migrations & Seed Data
To apply migrations to your remote Cloudflare D1 database:
```bash
npm run db:migrate
```
*(Or test locally with `npm run db:migrate:local`)*

### 3. Upload Logos to Cloudflare R2
The optimized WebP and PNG assets are pre-generated in `dist/assets/logos/`. Upload them directly to your `bank-mfs` bucket:
```bash
npm run assets:upload
```

### 4. Local Development
Start the local Worker dev server:
```bash
npm run dev
```
Open [http://localhost:8787](http://localhost:8787) in your browser to explore the interactive showcase.

### 5. Deploy to Cloudflare Edge
Deploy globally across all Cloudflare edge data centers (including Dhaka):
```bash
npm run deploy
```

---

## 📡 API Reference

Base URL: `https://[your-worker].workers.dev`

### 1. List All Banks
```http
GET /api/v1/banks
```
Query parameters:
* `search`: Search name, Swift code, or bank code (e.g. `?search=brac`)
* `type`: Filter by bank type (`?type=Private Bank`, `?type=Public Bank`)
* `origin`: Filter by origin (`?origin=Local Bank`, `?origin=Foreign Bank`)

### 2. Get Single Bank
```http
GET /api/v1/banks/:slug
```
* Supports lookup by slug (e.g. `/api/v1/banks/brac`) or Swift code (e.g. `/api/v1/banks/BRAKBDDH`).

### 3. List MFS Providers
```http
GET /api/v1/mfs
```
* Returns bKash, Nagad, Rocket, and Upay with logo CDN URLs and parent company info.

### 4. Global Search (Banks + MFS)
```http
GET /api/v1/search?q=islamic
```

### 5. Stream Logos Directly (R2 CDN)
Embed logos straight into HTML or mobile apps:
```html
<!-- Bank Logo (WebP) -->
<img src="https://[your-worker].workers.dev/logos/banks/brac.webp" alt="BRAC Bank" />

<!-- MFS Logo (WebP) -->
<img src="https://[your-worker].workers.dev/logos/mfs/bkash.webp" alt="bKash" />
```
*Also supports format omission (e.g. `/logos/banks/brac`) with automatic content negotiation.*

---

## 📁 Repository Structure

```
banks-mfs/
├── dist/assets/logos/         # Optimized WebP and PNG assets ready for R2
│   ├── banks/                 # 61 bank logos in .webp, .png, .jpg
│   └── mfs/                   # 4 MFS logos in .webp, .png, .jpg
├── migrations/
│   └── 0001_init.sql          # D1 migration & seed SQL for 61 banks + 4 MFS
├── scripts/
│   ├── generate_sql.py        # Generates clean SQL seed from banks.json
│   ├── optimize_assets.py     # Optimizes images using cwebp & convert
│   └── upload_to_r2.sh        # Uploads assets to R2 bucket 'bank-mfs'
├── src/
│   ├── index.ts               # Worker entry point & CORS
│   ├── types.ts               # Environment bindings & models
│   ├── utils.ts               # JSON formatters & logo URL builders
│   └── routes/
│       ├── banks.ts           # Bank endpoints & query filters
│       ├── mfs.ts             # MFS endpoints
│       ├── all.ts             # Combined & search endpoints
│       ├── logos.ts           # R2 streaming with immutable caching
│       └── ui.ts              # Interactive Web Showcase HTML
├── wrangler.jsonc             # Cloudflare Worker, D1 & R2 configuration
└── package.json               # NPM scripts and dependencies
```
