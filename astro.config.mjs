import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
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