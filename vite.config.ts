import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const base =
  process.env.VITE_BASE_PATH ||
  (process.env.GITHUB_ACTIONS === 'true' && repositoryName ? `/${repositoryName}/` : '/')

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
  build: {
    target: 'es2022',
    cssCodeSplit: true,
    sourcemap: false,
  },
})
