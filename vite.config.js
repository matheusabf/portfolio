import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [vue(), VitePWA({
    registerType: 'autoUpdate',
    manifest: {
      "name": "matheusabf.github.io",
      "short_name": "Matheus",
      "start_url": ".",
      "display": "standalone",
      "description": "um simples portfólio",
    },
  }), svgLoader({svgo: false})],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/styles/variables";@import "./src/styles/breakpoints";',
      }
    }
  },
  server: {
    host: true
  }
})
