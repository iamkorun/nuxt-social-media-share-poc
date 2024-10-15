// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Your Website Title',
      meta: [
        { charset: 'utf-8' },
        { property: 'og:title', content: 'Your Open Graph Title' },
        { property: 'og:description', content: 'Your Open Graph Description' },
        { property: 'og:image', content: 'https://example.com/image.jpg' },
        { property: 'og:url', content: 'https://example.com' },
        { property: 'og:type', content: 'website' },
      ],
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
