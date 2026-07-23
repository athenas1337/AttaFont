import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  // Dynamic base: /AttaFont/ on GitHub Actions Pages build, ./ on Netlify / Vercel / Local
  base: process.env.GITHUB_ACTIONS ? '/AttaFont/' : './',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
