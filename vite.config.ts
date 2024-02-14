import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      // Proxying API requests to bypass CORS
      "/api": {
        target: "https://api.rawg.io", // The base URL for the API
        changeOrigin: true, // needed for virtual hosted sites
        rewrite: (path) => path.replace(/^\/api/, ""), // remove /api from API requests
        // secure: false, // if you want to proxy websockets or are having SSL issues
      },
    },
  },
});
