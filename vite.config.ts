import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      exclude: ['./src/TicketsTable.svelte'],
      emitCss: false,

    }),
    svelte({
      include: ['./src/TicketsTable.svelte'],
      emitCss: false,
      compilerOptions: {
        customElement: true,
      }
    })
  ],
});