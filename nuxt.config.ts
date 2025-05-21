// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/ui-pro',
    '@pinia/nuxt'
  ],
  css: [
    '~/assets/css/main.css'
  ],
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'zinc'
    }
  }
})