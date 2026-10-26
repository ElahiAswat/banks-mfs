import { Hono } from "hono";
import { Env } from "../types";
import { formatBank } from "../utils";

export const banksRouter = new Hono<{ Bindings: Env }>();

// GET /api/v1/banks
banksRouter.get("/", async (c) => {
  const { search, type, origin, category, limit, offset } = c.req.query();
  
  let query = "SELECT * FROM banks WHERE 1=1";
  const params: any[] = [];

  if (search) {
    query += " AND (name LIKE ? OR registered_name LIKE ? OR slug LIKE ? OR swift_code LIKE ? OR bank_code LIKE ?)";
    const term = `%${search.trim()}%`;
    params.push(term, term, term, term, term);
  }

  if (type) {
    query += " AND LOWER(type) LIKE LOWER(?)";
    params.push(`%${type.trim()}%`);
  }

  if (origin) {
    query += " AND LOWER(origin) = LOWER(?)";
    params.push(origin.trim());
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

  const result = await c.env.DB.prepare(query).bind(...params).all();
  const banks = (result.results || []).map((row) => formatBank(row, c.req.url));

  c.header("Cache-Control", "public, max-age=3600, stale-while-revalidate=86400");
  return c.json({
    success: true,
    count: banks.length,
    data: banks,
  });
});

// GET /api/v1/banks/:slug
banksRouter.get("/:slug", async (c) => {
  const param = c.req.param("slug").trim();
  
  // Search by slug first, then fallback to swift_code or bank_code
  const result = await c.env.DB.prepare(
    "SELECT * FROM banks WHERE LOWER(slug) = LOWER(?) OR UPPER(swift_code) = UPPER(?) OR bank_code = ? LIMIT 1"
  ).bind(param, param, param).first();

  if (!result) {
    return c.json(
      {
        success: false,
        error: `Bank not found with slug or code '${param}'`,
      },
      404
    );
  }

  c.header("Cache-Control", "public, max-age=86400, stale-while-revalidate=604800");
  return c.json({
    success: true,
    data: formatBank(result, c.req.url),
  });
});
