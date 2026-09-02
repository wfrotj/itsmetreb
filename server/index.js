import cors from "cors";
import express from "express";
import contactHandler from "../api/contact.js";

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
  res.json({ ok: true });
});

app.post("/api/contact", contactHandler);

app.use((_req, res) => {
  res.status(404).json({ error: "Not found" });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Contact API listening on port ${port}`);
});
