// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  typescript: {
    shim: false,
  },

  app: {
    head: {
      title: 'Life Church of Orange',
    },
    pageTransition: {
      name: 'fade',
      mode: 'out-in',
    },
  },

  css: ['aos/dist/aos.css'],

  runtimeConfig: {
    public: {
      googleApiKey: 'AIzaSyC28-XZOTiJHnLpQg5Vcc-Mcs1_LsCrn4Q',
      youtubeChannelId: 'UCoVX240Rcw6ek5Opx2J84QA',
      googleCalendarId:
        '129d72ba476e5a268724ea7b31f2d40e1b1563ffd9963b2a9345c7c24d08e437@group.calendar.google.com',
      formUrl: 'https://formspree.io/f/mkndgrjn',
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

  compatibilityDate: '2024-09-15',
});
