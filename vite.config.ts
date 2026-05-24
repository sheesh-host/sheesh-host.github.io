import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// base '/' — this is an org root site (sheesh-host.github.io) served at the
// domain root (sheesh.host), so no subpath is needed.
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
})
