import vuetify from 'vite-plugin-vuetify'
import vue from '@vitejs/plugin-vue'
import { messages, locales } from './locales'

export default defineNuxtConfig({
  css: [
    'vuetify/lib/styles/main.css',
    '@mdi/font/css/materialdesignicons.min.css',
    '~/assets/styles.scss',
  ],
  vite: {
    ssr: {
      noExternal: ['vuetify'],
    },
    plugins: [vue()],
  },
  modules: [
    async (_, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', config => { config.plugins?.push(vuetify()) })
    },
    [
      '@nuxtjs/i18n',
      {
        strategy: 'no_prefix',
        locales,
        vueI18n: {
          legacy: false,
          defaultLocale: 'en',
          fallbackLocale: 'en',
          locale: 'en',
          messages,
        },
      },
    ],
  ],
  build: {
    transpile: [
      'vuetify',
    ],
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },
  imports: {
    dirs: [
      'composables/**',
    ],
  },
})
