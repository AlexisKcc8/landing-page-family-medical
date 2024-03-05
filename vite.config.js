import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@components",
        replacement: path.resolve(path.join(__dirname, "/src/components")),
      },
      {
        find: "@layouts",
        replacement: path.resolve(path.join(__dirname, "/src/layouts")),
      },
      {
        find: "@data",
        replacement: path.resolve(path.join(__dirname, "/src/data")),
      },
      {
        find: "@partials",
        replacement: path.resolve(path.join(__dirname, "/src/partials")),
      },
    ],
  },
});
