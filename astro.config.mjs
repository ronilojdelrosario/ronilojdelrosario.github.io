// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  site: 'https://ronilojdelrosario.github.io/',
  experimental: {
    fonts: [{
      provider: fontProviders.fontsource(),
      name: "Roboto",
      cssVariable: "--font-roboto",
  }]}
});