// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {enabled: true},
  modules: [
    '@unocss/nuxt',
  ],
  // @ts-ignore
  css: ['~/assets/main.css'],
  ssr: false,
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    keepalive: true,
    head: {
      titleTemplate: '%s - tondouble.com',
      meta: [
        {name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no'},
        {name: 'apple-mobile-web-app-capable', content: 'yes'},
        {name: 'apple-touch-fullscreen', content: 'yes'},
        {name: 'MobileOptimized', content: '176'},
        {name: 'HandheldFriendly', content: 'True'},
      ],
      script: [
        {
          src: 'https://telegram.org/js/telegram-web-app.js?1'
        }
      ]
    },
  },
})
