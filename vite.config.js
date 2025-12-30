import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false
    // On utilise esbuild par défaut (plus rapide, déjà inclus, pas besoin de terser)
  },
  server: {
    port: 3000,
    open: true
  }
})
