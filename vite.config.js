import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/Progetto-Js-Advanced/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        news: resolve(__dirname, 'src/news.html'),
      },
    },
  },
})
