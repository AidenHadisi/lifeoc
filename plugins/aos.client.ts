import AOS from 'aos';

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    nuxtApp.hook('vue:setup', () => {
      AOS.init({
        duration: 1000, // Reduced duration for better mobile performance
        delay: 100, // Reduced delay for better mobile performance
        once: true, // Only animate once - better for mobile performance
        // Instead of disabling entirely on mobile, we'll use a responsive approach
        disable: window.innerWidth < 768 ? false : false, // Enable on all devices
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
