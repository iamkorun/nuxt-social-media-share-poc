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

  modules: ['@nuxtjs/seo'],

  site: {
    // environment variables provided by Netlify
    url: process.env.NUXT_PUBLIC_WEB_URL || 'http://localhost:3000',
    name: 'Cat Social Share',
    indexable: false, // set indexable only on production, not on branch deploys
    trailingSlash: true,
    defaultLocale: 'en',
  },

  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
});
