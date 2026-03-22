import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Optimized and Robust Vite 8 configuration for Render
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        // Universal function syntax to ensure compatibility with modern bundlers like Rolldown and Oxc
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    }
  }
})
