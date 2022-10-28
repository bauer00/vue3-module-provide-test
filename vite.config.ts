import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
    // Uncomment this to make it work
    // optimizeDeps: {
    //     exclude: ["@test/module"],
    // },
    plugins: [vue()],
});
