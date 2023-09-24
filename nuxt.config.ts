// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    shim: false,
    typeCheck: true,
  },
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/robots',
    'nuxt-gtag',
    '@vueuse/nuxt',
    'nuxt-icon',
  ],
  googleFonts: {
    families: {
      Montserrat: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      'Roboto Flex': [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },
});
