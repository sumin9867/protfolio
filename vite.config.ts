import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from https://sumin9867.github.io/protfolio/ on GitHub Pages,
// so production asset URLs must be prefixed with the repo name. Local
// dev (and `preview`) stay at '/'.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/protfolio/' : '/',
  plugins: [react()],
}))
