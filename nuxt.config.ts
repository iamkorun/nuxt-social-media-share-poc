// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      WEB_URL: process.env.WEB_URL,
    },
  },

  ssr: false,
  modules: ['@stefanobartoletti/nuxt-social-share'],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
});
