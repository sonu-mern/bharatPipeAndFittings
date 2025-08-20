import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from 'url';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const plugins = [react()];

  // Only in development, dynamically import lovable-tagger
  if (mode === "development") {
    import("lovable-tagger").then(({ componentTagger }) => {
      plugins.push(componentTagger());
    });
  }

  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    optimizeDeps: {
      exclude: ["lovable-tagger"], // prevents Vite from trying to require it
    },
    build: {
      // Generate manifest.json in outDir
      manifest: true,
      rollupOptions: {
        // Use index.html as the entry point
        input: path.resolve(__dirname, 'index.html'),
      },
      outDir: 'dist',
      emptyOutDir: true,
      ssrManifest: true,
    },
    ssr: {
      // List of dependencies to externalize for SSR
      noExternal: ['react-helmet-async'],
    },
  };
});
