import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/lib/index.ts"),
      name: "ComponentLibrary",
      fileName: (format) => `component-library.${format}.js`,
    },
  },
  // @ts-ignore
  rollupOptions: {
    external: ["react", "react-dom"],
    output: {
      globals: {
        react: "React",
        "react-dom": "ReactDOM",
      },
    },
  },
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
    cssInjectedByJsPlugin(),
  ],
});
