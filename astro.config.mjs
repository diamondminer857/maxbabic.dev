// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://maxbabic.dev',

  build: {
    format: 'directory',
  },

  adapter: cloudflare(),
});