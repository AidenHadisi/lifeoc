// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    shim: false,
    typeCheck: true,
  },
  runtimeConfig: {
    public: {
      youtubeApiKey: 'AIzaSyC28-XZOTiJHnLpQg5Vcc-Mcs1_LsCrn4Q',
      youtubeChannelId: 'UCoVX240Rcw6ek5Opx2J84QA',
    },
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
