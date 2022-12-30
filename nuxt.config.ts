import vuetify from 'vite-plugin-vuetify'

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
  },
  modules: [
    async (_, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', config => { config.plugins?.push(vuetify()) })
    },
    [
      '@nuxtjs/i18n',
      {
        strategy: 'no_prefix',
        locales: [
          {
            code: 'en',
            iso: 'en-US',
          },
          {
            code: 'ja',
            iso: 'ja_JP',
          },
        ],
        vueI18n: {
          legacy: false,
          defaultLocale: 'en',
          locale: 'en',
          messages: {
            en: {
              welcome: 'Welcome',
            },
            ja: {
              welcome: 'こんにちは',
            },
          },
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
