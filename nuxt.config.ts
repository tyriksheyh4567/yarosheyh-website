// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/color-mode', {
      preference: 'system',
      fallback: 'light',
      classSuffix: ''
    }]
  ],

  compatibilityDate: '2025-04-17'
})