import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Optimized Vite config for Render/Production
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    minify: 'esbuild',
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'animation-vendor': ['framer-motion'],
          'icons': ['lucide-react']
        }
      }
    }
  }
})
