import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  css: [
    'vuetify/lib/styles/main.css',
    '@mdi/font/css/materialdesignicons.min.css',
  ],
  vite: {
    ssr: {
      noExternal: ['vuetify'],
    },
  },
  modules: [
    async (_, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', config => { config.plugins?.push(vuetify()) })
    },
  ],
  build: {
    transpile: [
      'vuetify',
    ],
  },
})
