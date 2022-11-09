import { resolve } from "path";
import { defineConfig } from "vite";
import VueTermui from "vite-plugin-vue-termui";

export default defineConfig({
  plugins: [VueTermui()],
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "src") }],
  },
});
