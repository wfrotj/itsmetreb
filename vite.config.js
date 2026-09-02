import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const port = Number(process.env.PORT) || 5173;

export default defineConfig(async ({ mode }) => {
  const plugins = [react()];

  if (mode === "development") {
    const { contactApiDevPlugin } = await import("./vite-plugin-contact-api.js");
    plugins.push(contactApiDevPlugin(mode));
  }

  return {
    base: "/",
    plugins,
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
  };
});
