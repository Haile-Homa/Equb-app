import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // binds to 0.0.0.0
    port: 5173, // optional, default is 5173
  },
   // This helps Vite set correct MIME types
  assetsInclude: ['**/*.pdf'],
});
