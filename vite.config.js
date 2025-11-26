import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue' // or react() if using React
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // important for GitHub Pages
  plugins: [vue(), react()],
  build: {
    outDir: 'dist'
  }
})
