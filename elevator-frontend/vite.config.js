import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// <https://vitejs.dev/config/>
export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    proxy: {
      '/api': "http://localHost:8080"
    }
  },
  build: {
    // generate .vite/manifest.json in outDir
    manifest: true,
    rollupOptions: {
      // overwrite default .html entry
      input: '/path/to/main.js',
    },
  },
})