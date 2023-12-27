import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      include: "**/*.tsx",
    }),
  ],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
     watch: {
       usePolling: true
     }
  } 
});
