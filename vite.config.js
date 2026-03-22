import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Optimized & Ultra-Stable Vite config for Render (Vite 8 / Rolldown Compatible)
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    minify: 'esbuild', // Faster & more reliable than terser
    sourcemap: false,
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        // Standard chunking strategy that avoids the "manualChunks is not a function" error in Rolldown
        manualChunks(id) {
          if (id.includes('node_modules')) {
             return 'vendor';
          }
        }
      }
    }
  }
})
