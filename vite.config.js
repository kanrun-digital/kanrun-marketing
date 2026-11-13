import { defineConfig } from 'vite'
import { resolve } from 'path'

// base './' — собранный dist работает на любом хостинге и подпути
export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        seo: resolve(__dirname, 'seo.html'),
        ppc: resolve(__dirname, 'ppc.html'),
        smm: resolve(__dirname, 'smm.html'),
        development: resolve(__dirname, 'development.html'),
        company: resolve(__dirname, 'company.html'),
        contacts: resolve(__dirname, 'contacts.html'),
      },
    },
  },
})
