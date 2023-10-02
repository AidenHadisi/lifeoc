import AOS from 'aos';

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    nuxtApp.hook('vue:setup', () => {
      AOS.init({
        duration: 2000,
        delay: 300,
      });
    });
  }
});
