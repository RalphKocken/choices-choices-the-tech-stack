// https://nuxt.com/docs/api/configuration/nuxt-config

import { resolve } from 'path'

export default({
  devtools: { enabled: true },
  alias: {
    '@': resolve(__dirname, "/"),
  },
  css: [
    "~/assets/main.css"
  ], 
  buildModules: [
    '@nuxt/google-fonts',
  ],
  googleFonts: {
    preconnect: true,
    families: {
      Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      Quicksand: [300, 400, 500, 600, 700],
      Sora: [100, 200, 300, 400, 500, 600, 700, 800],
    },
  },
})
