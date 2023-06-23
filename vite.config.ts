import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      exclude: ['./src/TicketsTableWrapper.svelte'],
      emitCss: false,

    }),
    svelte({
      include: ['./src/TicketsTableWrapper.svelte'],
      emitCss: false,
      compilerOptions: {
        customElement: true,
      }
    })
  ],
});