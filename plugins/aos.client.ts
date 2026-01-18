import AOS from 'aos';

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    nuxtApp.hook('app:mounted', () => {
      AOS.init({
        duration: 1000,
        delay: 100,
        once: true,
        disable: () => window.innerWidth < 1024, // Disables on mobile and tablet (< 1024px)
        startEvent: 'DOMContentLoaded',
        disableMutationObserver: false,
      });
    });

    // Re-initialize AOS on route changes
    nuxtApp.hook('page:finish', () => {
      setTimeout(() => {
        AOS.refresh();
      }, 100);
    });
  }
});
