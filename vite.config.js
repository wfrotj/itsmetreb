import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { contactApiDevPlugin } from "./vite-plugin-contact-api.js";

const port = Number(process.env.PORT) || 5173;

export default defineConfig(({ mode }) => ({
  base: "/",
  plugins: [react(), contactApiDevPlugin(mode)],
  build: {
    outDir: "dist",
  },
  server: {
    host: "0.0.0.0",
    port,
    strictPort: true,
  },
  preview: {
    host: "0.0.0.0",
    port: Number(process.env.PORT) || 4173,
    strictPort: true,
  },
}));
