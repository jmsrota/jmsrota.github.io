import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue' // or react() if using React

export default defineConfig({
  base: './', // important for GitHub Pages
  plugins: [vue()],
  build: {
    outDir: 'dist'
  }
})
