import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api/webhooks/leads': {
        target: 'https://newtracking-sales-sys.vercel.app',
        changeOrigin: true,
        secure: true,
      },
    },
  },
  preview: {
    allowedHosts: ['fonil-lp-garra-distribuidora-2.hqzrjv.easypanel.host'],
  },
})
