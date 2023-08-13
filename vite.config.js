import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: "localhost:2020",
  },
});

// proxy: "https://itsmetreb.onrender.com",
// https://itsmetreb-m0f3.onrender.com
