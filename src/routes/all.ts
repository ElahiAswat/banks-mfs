import { Hono } from "hono";
import { Env } from "../types";
import { formatBank, formatMfs } from "../utils";

export const allRouter = new Hono<{ Bindings: Env }>();

// GET /api/v1/all
allRouter.get("/all", async (c) => {
  const [banksRes, mfsRes] = await Promise.all([
    c.env.DB.prepare("SELECT * FROM banks ORDER BY name ASC").all(),
    c.env.DB.prepare("SELECT * FROM mfs ORDER BY name ASC").all(),
  ]);

  const banks = (banksRes.results || []).map((r) => formatBank(r, c.req.url));
  const mfs = (mfsRes.results || []).map((r) => formatMfs(r, c.req.url));

  c.header("Cache-Control", "public, max-age=3600, stale-while-revalidate=86400");
  return c.json({
    success: true,
    total: banks.length + mfs.length,
    data: {
      banks,
      mfs,
    },
  });
});

// GET /api/v1/search?q=...
allRouter.get("/search", async (c) => {
  const query = c.req.query("q")?.trim();

  if (!query) {
    return c.json(
      {
        success: false,
        error: "Query parameter 'q' is required for search (e.g. /api/v1/search?q=brac)",
      },
      400
    );
  }

  const term = `%${query}%`;

  const [banksRes, mfsRes] = await Promise.all([
    c.env.DB.prepare(
      `SELECT * FROM banks 
       WHERE name LIKE ? OR registered_name LIKE ? OR slug LIKE ? 
          OR swift_code LIKE ? OR bank_code LIKE ? OR services LIKE ?
       ORDER BY name ASC`
    ).bind(term, term, term, term, term, term).all(),
    c.env.DB.prepare(
      `SELECT * FROM mfs 
       WHERE name LIKE ? OR registered_name LIKE ? OR slug LIKE ? OR parent LIKE ?
       ORDER BY name ASC`
    ).bind(term, term, term, term).all(),
  ]);

  const matchedBanks = (banksRes.results || []).map((r) => formatBank(r, c.req.url));
  const matchedMfs = (mfsRes.results || []).map((r) => formatMfs(r, c.req.url));

  return c.json({
    success: true,
    query,
    count: matchedBanks.length + matchedMfs.length,
    data: {
      banks: matchedBanks,
      mfs: matchedMfs,
    },
  });
});
