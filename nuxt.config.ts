// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt'
  ],
  typescript: {
    typeCheck: true
  },
  devtools: { enabled: true }
})
