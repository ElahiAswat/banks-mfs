import { Hono } from "hono";
import { Env } from "../types";

export const logosRouter = new Hono<{ Bindings: Env }>();

function getContentType(key: string): string {
  if (key.endsWith(".webp")) return "image/webp";
  if (key.endsWith(".png")) return "image/png";
  if (key.endsWith(".jpg") || key.endsWith(".jpeg")) return "image/jpeg";
  if (key.endsWith(".svg")) return "image/svg+xml";
  return "application/octet-stream";
}

async function serveR2Object(
  bucket: R2Bucket,
  prefix: "logos/banks" | "logos/mfs",
  param: string
): Promise<Response> {
  const cleanParam = param.trim();
  const hasExt = cleanParam.includes(".");
  
  const candidateKeys: string[] = [];
  if (hasExt) {
    candidateKeys.push(`${prefix}/${cleanParam}`);
  } else {
    // Try webp first, then png, then jpg/jpeg
    candidateKeys.push(
      `${prefix}/${cleanParam}.webp`,
      `${prefix}/${cleanParam}.png`,
      `${prefix}/${cleanParam}.jpg`,
      `${prefix}/${cleanParam}.jpeg`
    );
  }

  for (const key of candidateKeys) {
    const object = await bucket.get(key);
    if (object) {
      const headers = new Headers();
      object.writeHttpMetadata(headers);
      
      headers.set("etag", object.httpEtag);
      headers.set("Cache-Control", "public, max-age=31536000, immutable");
      headers.set("Access-Control-Allow-Origin", "*");
      headers.set("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS");
      
      // Ensure content-type is accurate
      if (!headers.get("content-type") || headers.get("content-type") === "application/octet-stream") {
        headers.set("content-type", getContentType(key));
      }

      return new Response(object.body, { headers });
    }
  }

  return new Response(
    JSON.stringify({
      success: false,
      error: `Logo not found in ${prefix} for '${param}'`,
    }),
    {
      status: 404,
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
}

// GET /logos/banks/:filename
logosRouter.get("/banks/:filename", async (c) => {
  const filename = c.req.param("filename");
  return serveR2Object(c.env.BUCKET, "logos/banks", filename);
});

// GET /logos/mfs/:filename
logosRouter.get("/mfs/:filename", async (c) => {
  const filename = c.req.param("filename");
  return serveR2Object(c.env.BUCKET, "logos/mfs", filename);
});
