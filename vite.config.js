import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Remove base for Vercel deployment (it serves from root)
  // For GitHub Pages, uncomment: base: '/History-of-Sport-Final/',
})
