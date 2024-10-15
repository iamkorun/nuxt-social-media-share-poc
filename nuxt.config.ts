// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },

  runtimeConfig: {
    public: {
      WEB_URL: process.env.WEB_URL,
    },
  },

  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
});
