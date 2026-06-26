import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from the custom domain https://www.suminmaharjan98.com.np/ at the
// root, so the base path is '/'. (The CNAME in /public binds the domain.)
export default defineConfig({
  base: '/',
  plugins: [react()],
})
