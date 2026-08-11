import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  // base for canonical URLs, absolute og:image URLs and the sitemap
  site: 'https://cxxdbg.org',
  integrations: [
    tailwind(),
    sitemap(),
    // astro-compress must stay last so it sees the final output
    compress({
      // svgo's preset-default drops viewBox when width/height are present,
      // which breaks scaling of the SVG favicon into the icon slot
      SVG: {
        svgo: {
          multipass: true,
          js2svg: { indent: 0, pretty: false },
          plugins: [
            { name: 'preset-default', params: { overrides: { removeViewBox: false } } },
          ],
        },
      },
    }),
  ]
});