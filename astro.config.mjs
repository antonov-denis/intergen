// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://antonov-denis.github.io/intergen',
  base: '/intergen',
  vite: {
    plugins: [tailwindcss()],
  },
});
