// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Your Website Title',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1'
    },
  },

  runtimeConfig: {
    public: {
      WEB_URL: process.env.WEB_URL,
    },
  },

  ssr: false,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
});
