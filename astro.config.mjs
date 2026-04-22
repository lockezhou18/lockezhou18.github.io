import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
// https://astro.build/config

export default defineConfig({
  site: "https://lockezhou18.github.io",
  integrations: [mdx()],
  output: "static",
  markdown: {
    shikiConfig: {
      theme: "github-light",
      wrap: true,
    },
  },
});
