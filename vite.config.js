import { defineConfig } from "vite";
const path = require("path");
import react from "@vitejs/plugin-react";

// hhttps://cn.vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "./lib/index.ts"),
      name: "reactRouterMiddlewarePlus",
      fileName: "index",
      formats: ["es", "cjs", "umd"],
    },
  },
});
