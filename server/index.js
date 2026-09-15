import cors from "cors";
import express from "express";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import contactHandler from "../api/contact.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.join(__dirname, "..", "dist");
const hasFrontend = fs.existsSync(path.join(distPath, "index.html"));

const app = express();
const port = Number(process.env.PORT) || 3000;

const allowedOrigins = (process.env.FRONTEND_URL || "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      if (
        !origin ||
        allowedOrigins.length === 0 ||
        allowedOrigins.includes(origin)
      ) {
        callback(null, true);
        return;
      }

      callback(null, false);
    },
  }),
);

app.use(express.json({ limit: "32kb" }));

app.get("/health", (_req, res) => {
  res.json({ ok: true, frontend: hasFrontend });
});

app.post("/api/contact", contactHandler);

if (hasFrontend) {
  app.use(express.static(distPath));

  app.get("*", (req, res, next) => {
    if (req.path.startsWith("/api/")) {
      return next();
    }

    res.sendFile(path.join(distPath, "index.html"));
  });
} else {
  app.use((_req, res) => {
    res.status(404).json({
      error:
        "API is running, but frontend build is missing. Run npm run build first.",
    });
  });
}

app.listen(port, "0.0.0.0", () => {
  console.log(
    hasFrontend
      ? `App (frontend + API) listening on port ${port}`
      : `API only listening on port ${port}`,
  );
});
