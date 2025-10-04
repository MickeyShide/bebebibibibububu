import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 5173,
    strictPort: true,
    allowedHosts: [
      "asdsdasda.ru.tuna.am",
      "asldkmaksldk.ru.tuna.am"
    ], // 👈 разрешённый хост

  },
});
