import path from 'node:path'
import { defineConfig } from 'vite';

// https://vitejs.dev/config
export default defineConfig({
  build: {
    outDir: path.join(__dirname, '.vite/preload'),
  }
});
