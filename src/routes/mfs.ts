import { Hono } from "hono";
import { Env } from "../types";
import { formatMfs } from "../utils";

export const mfsRouter = new Hono<{ Bindings: Env }>();

// GET /api/v1/mfs
mfsRouter.get("/", async (c) => {
  const result = await c.env.DB.prepare("SELECT * FROM mfs ORDER BY name ASC").all();
  const list = (result.results || []).map((row) => formatMfs(row, c.req.url));

  c.header("Cache-Control", "public, max-age=3600, stale-while-revalidate=86400");
  return c.json({
    success: true,
    count: list.length,
    data: list,
  });
});

// GET /api/v1/mfs/:slug
mfsRouter.get("/:slug", async (c) => {
  const slug = c.req.param("slug").trim().toLowerCase();
  
  const result = await c.env.DB.prepare(
    "SELECT * FROM mfs WHERE LOWER(slug) = ? LIMIT 1"
  ).bind(slug).first();

  if (!result) {
    return c.json(
      {
        success: false,
        error: `MFS provider not found with slug '${slug}'`,
      },
      404
    );
  }

  c.header("Cache-Control", "public, max-age=86400, stale-while-revalidate=604800");
  return c.json({
    success: true,
    data: formatMfs(result, c.req.url),
  });
});
