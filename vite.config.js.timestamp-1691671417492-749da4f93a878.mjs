// vite.config.js
import { defineConfig } from "file:///C:/Users/ymendes/Desktop/platform/vite-remote/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/ymendes/Desktop/platform/vite-remote/node_modules/@vitejs/plugin-react/dist/index.mjs";
import federation from "file:///C:/Users/ymendes/Desktop/platform/vite-remote/node_modules/@originjs/vite-plugin-federation/dist/index.mjs";
import tailwindcss from "file:///C:/Users/ymendes/Desktop/platform/vite-remote/node_modules/tailwindcss/lib/index.js";
import sassDts from "file:///C:/Users/ymendes/Desktop/platform/vite-remote/node_modules/vite-plugin-sass-dts/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    sassDts(),
    federation({
      name: "product_a",
      filename: "remoteEntry.js",
      remotes: {
        host: "http://localhost:3000/assets/host-remoteEntry.js"
      },
      exposes: {
        "./App": "./src/App"
      },
      shared: {
        react: {
          eager: true,
          singleton: true
        },
        "react-dom": {
          eager: true,
          singleton: true
        }
      }
    })
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx5bWVuZGVzXFxcXERlc2t0b3BcXFxccGxhdGZvcm1cXFxcdml0ZS1yZW1vdGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHltZW5kZXNcXFxcRGVza3RvcFxcXFxwbGF0Zm9ybVxcXFx2aXRlLXJlbW90ZVxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMveW1lbmRlcy9EZXNrdG9wL3BsYXRmb3JtL3ZpdGUtcmVtb3RlL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjtcbmltcG9ydCBmZWRlcmF0aW9uIGZyb20gXCJAb3JpZ2luanMvdml0ZS1wbHVnaW4tZmVkZXJhdGlvblwiO1xuaW1wb3J0IHRhaWx3aW5kY3NzIGZyb20gXCJ0YWlsd2luZGNzc1wiO1xuaW1wb3J0IHNhc3NEdHMgZnJvbSBcInZpdGUtcGx1Z2luLXNhc3MtZHRzXCI7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgcmVhY3QoKSxcbiAgICB0YWlsd2luZGNzcygpLFxuICAgIHNhc3NEdHMoKSxcbiAgICBmZWRlcmF0aW9uKHtcbiAgICAgIG5hbWU6IFwicHJvZHVjdF9hXCIsXG4gICAgICBmaWxlbmFtZTogXCJyZW1vdGVFbnRyeS5qc1wiLFxuICAgICAgcmVtb3Rlczoge1xuICAgICAgICBob3N0OiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hc3NldHMvaG9zdC1yZW1vdGVFbnRyeS5qc1wiLFxuICAgICAgfSxcbiAgICAgIGV4cG9zZXM6IHtcbiAgICAgICAgXCIuL0FwcFwiOiBcIi4vc3JjL0FwcFwiLFxuICAgICAgfSxcbiAgICAgIHNoYXJlZDoge1xuICAgICAgICByZWFjdDoge1xuICAgICAgICAgIGVhZ2VyOiB0cnVlLFxuICAgICAgICAgIHNpbmdsZXRvbjogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZWFjdC1kb21cIjoge1xuICAgICAgICAgIGVhZ2VyOiB0cnVlLFxuICAgICAgICAgIHNpbmdsZXRvbjogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGJ1aWxkOiB7XG4gICAgbW9kdWxlUHJlbG9hZDogZmFsc2UsXG4gICAgdGFyZ2V0OiBcImVzbmV4dFwiLFxuICAgIG1pbmlmeTogZmFsc2UsXG4gICAgY3NzQ29kZVNwbGl0OiBmYWxzZSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFxVSxTQUFTLG9CQUFvQjtBQUNsVyxPQUFPLFdBQVc7QUFDbEIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxpQkFBaUI7QUFDeEIsT0FBTyxhQUFhO0FBR3BCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLFlBQVk7QUFBQSxJQUNaLFFBQVE7QUFBQSxJQUNSLFdBQVc7QUFBQSxNQUNULE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLFNBQVM7QUFBQSxRQUNQLE1BQU07QUFBQSxNQUNSO0FBQUEsTUFDQSxTQUFTO0FBQUEsUUFDUCxTQUFTO0FBQUEsTUFDWDtBQUFBLE1BQ0EsUUFBUTtBQUFBLFFBQ04sT0FBTztBQUFBLFVBQ0wsT0FBTztBQUFBLFVBQ1AsV0FBVztBQUFBLFFBQ2I7QUFBQSxRQUNBLGFBQWE7QUFBQSxVQUNYLE9BQU87QUFBQSxVQUNQLFdBQVc7QUFBQSxRQUNiO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLGNBQWM7QUFBQSxFQUNoQjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
