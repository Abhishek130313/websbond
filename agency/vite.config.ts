import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
    proxy: {
      "/api": {
        target: "http://localhost:8081",
        changeOrigin: true,
        secure: false,
      }
    }
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
  build: {
    // Increase chunk size warning threshold (our chunks are intentionally sized)
    chunkSizeWarningLimit: 600,
    // Enable minification
    minify: "esbuild",
    // CSS code splitting
    cssCodeSplit: true,
    // Rollup options for manual chunk splitting
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Core React runtime — smallest possible critical chunk
          if (id.includes("node_modules/react/") || id.includes("node_modules/react-dom/") || id.includes("node_modules/scheduler/")) {
            return "react-core";
          }
          // React Router — needed on every page
          if (id.includes("node_modules/react-router-dom") || id.includes("node_modules/react-router/")) {
            return "react-router";
          }
          // TanStack Query
          if (id.includes("node_modules/@tanstack/")) {
            return "tanstack-query";
          }
          // Recharts — heavy charting library, isolated since it's rarely used
          if (id.includes("node_modules/recharts") || id.includes("node_modules/d3-")) {
            return "recharts";
          }
          // Radix UI — split into its own chunk so it can be cached independently
          if (id.includes("node_modules/@radix-ui/")) {
            return "radix-ui";
          }
          // Lucide icons
          if (id.includes("node_modules/lucide-react")) {
            return "lucide-icons";
          }
          // Embla carousel
          if (id.includes("node_modules/embla-carousel")) {
            return "embla-carousel";
          }
          // All other vendor libs
          if (id.includes("node_modules/")) {
            return "vendor";
          }
        },
        // Predictable asset filenames for caching
        assetFileNames: "assets/[name]-[hash][extname]",
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
      },
    },
  },
}));
