import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 5173
  },
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react-icons', 'lucide-react']
    }
  },
  base: "/grandhermes/"
})
