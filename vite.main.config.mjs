import path from 'node:path'
import { defineConfig } from 'vite';
import { restart } from 'electron-forge-plugin-vite/plugin';

// https://vitejs.dev/config
export default defineConfig({
  plugins: [restart()],
  resolve: {
    // Some libs that can run in both Web and Node.js, such as `axios`, we need to tell Vite to build them in Node.js.
    browserField: false,
    conditions: ['node'],
    mainFields: ['module', 'jsnext:main', 'jsnext'],
  },
  build: {
    outDir: path.join(__dirname, '.vite/main'),
    rollupOptions: {
      external: [
        'serialport',
        'sqlite3',
        'vite'
      ]
    }
  }
});
