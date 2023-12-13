// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/google-fonts',
    '@nuxt/content',
    'nuxt-icon',
  ],
  googleFonts: {
    families: {
      'Roboto': true,
      'Open Sans': true,
    },
  },
  typescript: {
    typeCheck: true,
  },
  devtools: { enabled: true },
})
