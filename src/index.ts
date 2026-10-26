import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { Env } from "./types";
import { banksRouter } from "./routes/banks";
import { mfsRouter } from "./routes/mfs";
import { allRouter } from "./routes/all";
import { logosRouter } from "./routes/logos";
import { renderShowcaseHtml } from "./routes/ui";

const app = new Hono<{ Bindings: Env }>();

// Global Middleware
app.use("*", logger());
app.use(
  "*",
  cors({
    origin: "*",
    allowMethods: ["GET", "HEAD", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization"],
    maxAge: 86400,
  })
);

// Interactive UI Showcase
app.get("/", (c) => {
  c.header("Cache-Control", "public, max-age=3600, stale-while-revalidate=86400");
  return c.html(renderShowcaseHtml());
});

// Health check endpoint
app.get("/health", async (c) => {
  try {
    const dbCheck = await c.env.DB.prepare("SELECT count(*) as count FROM banks").first();
    return c.json({
      status: "ok",
      edge: "active",
      timestamp: new Date().toISOString(),
      d1_connected: true,
      bank_count: dbCheck?.count,
    });
  } catch (err: any) {
    return c.json({
      status: "degraded",
      edge: "active",
      timestamp: new Date().toISOString(),
      d1_connected: false,
      error: err.message,
    }, 500);
  }
});

// API Routes
app.route("/api/v1/banks", banksRouter);
app.route("/api/v1/mfs", mfsRouter);
app.route("/api/v1", allRouter);

// R2 Logo Routes
app.route("/logos", logosRouter);

// 404 Handler
app.notFound((c) => {
  return c.json(
    {
      success: false,
      error: `Endpoint not found: ${c.req.method} ${c.req.path}`,
    },
    404
  );
});

// Error Handler
app.onError((err, c) => {
  console.error("Worker Error:", err);
  return c.json(
    {
      success: false,
      error: err.message || "Internal Server Error",
    },
    500
  );
});

export default app;
