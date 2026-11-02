import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://aubigny.wine",
  output: "static",
  integrations: [sitemap()],
  redirects: {
    "/cgv": "https://shop.aubigny.wine/terms",
    "/en/cgv": "https://shop.aubigny.wine/en/terms",
  },
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
  build: { inlineStylesheets: "auto" },
});
