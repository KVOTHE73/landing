import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  base: command === "build" ? "/landing/" : "/",
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true, // Silencia los warnings de dependencias
      },
    },
  },
}));
