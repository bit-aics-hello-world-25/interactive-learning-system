// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://bit-aics-hello-world-25.github.io',
  base: '/',
  vite: {
    plugins: [tailwindcss()]
  }
});