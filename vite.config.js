import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "@testing-library/react",
      "@testing-library/jest-dom",
    ],
  },
  resolve: {
    alias: {
      // Alias for importing images from the assets directory
      "/@assets/": path.resolve(__dirname, "src/assets"),
    },
  },
});
