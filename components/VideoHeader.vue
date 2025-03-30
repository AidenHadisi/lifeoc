<template>
  <div class="relative flex items-center justify-center h-screen overflow-hidden">
    <video ref="videoRef" class="absolute w-full h-full object-cover" autoplay loop muted playsinline>
      <source src="/video.mp4" type="video/mp4" />
    </video>

    <!-- Multi-layer overlay for depth -->
    <div class="absolute w-full h-full bg-gradient-to-b from-black/30 to-gray-900/70"></div>
    <div class="absolute w-full h-full bg-[#283252] opacity-40"></div>

    <!-- Content Container -->
    <div class="z-10 text-white flex flex-col items-center justify-center w-full px-6">
      <div class="animate-fadeIn flex justify-center w-full">
        <!-- Logo with glow effect - reduced size by 20% -->
        <img src="/logo.png"
          class="md:w-[24%] w-[64%] opacity-90 filter drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] mb-6 mx-auto"
          alt="Life Church of Orange" />
      </div>

      <!-- Text Content with staggered animation -->
      <div class="text-center">
        <h2 class="text-white text-3xl md:text-6xl font-bold mb-2 animate-slideUp" style="animation-delay: 300ms;">
          Join us Sundays at
        </h2>

        <div class="relative my-4 animate-slideUp" style="animation-delay: 600ms;">
          <p class="text-4xl font-extrabold md:text-7xl tracking-widest text-white">
            10:15 <span class="text-yellow-400">AM</span>
          </p>
          <!-- Decorative elements -->
          <div class="absolute -left-4 top-1/2 w-12 h-[2px] bg-yellow-400 transform -translate-y-1/2 hidden md:block">
          </div>
          <div class="absolute -right-4 top-1/2 w-12 h-[2px] bg-yellow-400 transform -translate-y-1/2 hidden md:block">
          </div>
        </div>

      </div>

      <!-- Social Media with bounce effect -->
      <div class="flex justify-center space-x-6  animate-slideUp" style="animation-delay: 1000ms;">
        <a href="https://www.youtube.com/channel/UCoVX240Rcw6ek5Opx2J84QA" target="_blank" rel="noopener noreferrer"
          class="group" aria-label="YouTube">
          <div
            class="bg-white/10 p-3 rounded-full backdrop-blur-sm group-hover:bg-red-600/80 transition-all duration-300">
            <img src="/youtube.svg" alt="YouTube"
              class="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
          </div>
        </a>
        <a href="https://www.facebook.com/lifechurchorangeca" target="_blank" rel="noopener noreferrer" class="group"
          aria-label="Facebook">
          <div
            class="bg-white/10 p-3 rounded-full backdrop-blur-sm group-hover:bg-blue-600/80 transition-all duration-300">
            <img src="/facebook.svg" alt="Facebook"
              class="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
          </div>
        </a>
      </div>

      <div class="absolute bottom-0 mx-auto flex flex-col items-center animate-bounce text-center w-full mb-4">
        <p class="text-xs text-gray-300 mb-2">Scroll to Explore</p>
        <Icon name="heroicons:chevron-down" class="w-6 h-6 text-white/70" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const videoRef = ref<HTMLVideoElement | null>(null);

onMounted(() => {
  if (videoRef.value) {
    videoRef.value.playbackRate = 0.6;
  }
});
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 1.5s ease forwards;
}

.animate-slideUp {
  opacity: 0;
  animation: slideUp 1s ease forwards;
}
</style>
