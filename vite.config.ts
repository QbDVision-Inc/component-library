import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import dts from "vite-plugin-dts";
import postcssNested from "postcss-nested";
import postcssCustomProperties from "postcss-custom-properties";

export default defineConfig(() => {
  const isExternal = (id: string) =>
    !id.startsWith(".") && !path.isAbsolute(id);

  return {
    esbuild: {
      minifyIdentifiers: false,
    },
    build: {
      minify: false,
      sourcemap: true,
      lib: {
        entry: path.resolve(__dirname, "src/lib/index.ts"),
        name: "ComponentLibrary",
        formats: ["es", "umd"],
        fileName: (format) => `component-library.${format}.js`,
      },
      rollupOptions: {
        external: isExternal,
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
    css: {
      modules: {
        localsConvention: "camelCase",
        generateScopedName: "[local]___[hash:base64:5]",
      },
      postcss: {
        plugins: [
          postcssNested(),
          postcssCustomProperties({
            importFrom: "./design-tokens.css",
            exportTo: "./design-tokens.json",
            preserve: false,
          }),
        ],
      },
    },
    test: {
      globals: true,
      environment: "jsdom",
      coverage: {
        reporter: "html",
      },
    },
  };
});
