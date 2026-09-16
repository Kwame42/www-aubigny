import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
// TODO: Re-enable sitemap when @astrojs/sitemap is fixed (currently has bug with v4.16)
// import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://aubigny.wine",
  output: "static",
  integrations: [],
  // TODO: Add back when sitemap is fixed
  // integrations: [sitemap()],
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
