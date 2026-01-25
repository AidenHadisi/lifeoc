<template>
  <div
    class="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-gray-900">
    <!-- Animated gradient orbs -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-yellow-500/20 rounded-full blur-[100px] animate-pulse-slow">
      </div>
      <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/15 rounded-full blur-[120px] animate-pulse-slow"
        style="animation-delay: 2s"></div>
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-yellow-500/5 to-transparent rounded-full">
      </div>
    </div>

    <!-- Subtle grid pattern overlay -->
    <div
      class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]">
    </div>

    <!-- Floating particles -->
    <div class="particles absolute inset-0 pointer-events-none">
      <div v-for="n in 20" :key="n" class="particle absolute w-1 h-1 bg-yellow-400/40 rounded-full" :style="{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${5 + Math.random() * 10}s`,
      }"></div>
    </div>

    <!-- Shadow effects -->
    <div class="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/60 to-transparent"></div>
    <div class="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/60 to-transparent"></div>

    <!-- Content Container -->
    <div class="z-10 text-white flex flex-col items-center justify-center w-full px-6">
      <div class="animate-fadeIn flex justify-center w-full">
        <!-- Logo with enhanced glow effect -->
        <div class="relative">
          <div class="absolute inset-0 blur-2xl bg-yellow-500/20 rounded-full scale-150 animate-pulse-slow"></div>
          <img src="/logo.png"
            class="relative md:w-[280px] w-[200px] opacity-95 filter drop-shadow-[0_0_30px_rgba(234,179,8,0.4)] mb-8 mx-auto hover:scale-105 transition-transform duration-500"
            alt="Life Church of Orange" />
        </div>
      </div>

      <!-- Text Content with staggered animation -->
      <div class="text-center">
        <h2 class="text-white/90 text-2xl md:text-5xl font-light mb-4 animate-slideUp tracking-wide"
          style="animation-delay: 300ms">
          Join us Sundays at
        </h2>

        <div class="relative my-6 animate-slideUp" style="animation-delay: 600ms">
          <div class="relative inline-block">
            <p
              class="text-5xl font-black md:text-8xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-100 to-white">
              1:00 <span class="text-yellow-400">PM</span>
            </p>
            <!-- Animated underline -->
            <div
              class="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent">
            </div>
          </div>
        </div>

        <!-- Location badge -->
        <div class="animate-slideUp mt-8 mb-6" style="animation-delay: 800ms">
          <a href="/contact"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-yellow-400/50 transition-all duration-300 group">
            <Icon name="heroicons:map-pin" class="w-5 h-5 text-yellow-400" />
            <span class="text-white/80 text-sm md:text-base">840 N Shattuck Pl, Orange, CA</span>
            <Icon name="heroicons:arrow-right"
              class="w-4 h-4 text-white/50 group-hover:translate-x-1 group-hover:text-yellow-400 transition-all" />
          </a>
        </div>
      </div>

      <!-- Social Media with modern design -->
      <div class="flex justify-center gap-4 animate-slideUp" style="animation-delay: 1000ms">
        <a href="https://www.youtube.com/channel/UCoVX240Rcw6ek5Opx2J84QA" target="_blank" rel="noopener noreferrer"
          class="group" aria-label="YouTube">
          <div
            class="relative bg-white/5 p-4 rounded-2xl backdrop-blur-sm border border-white/10 group-hover:border-red-500/50 group-hover:bg-red-500/10 transition-all duration-300">
            <img src="/youtube.svg" alt="YouTube"
              class="w-7 h-7 group-hover:scale-110 transition-transform duration-300" />
            <div
              class="absolute inset-0 rounded-2xl bg-red-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10">
            </div>
          </div>
        </a>
        <a href="https://www.facebook.com/lifechurchorangeca" target="_blank" rel="noopener noreferrer" class="group"
          aria-label="Facebook">
          <div
            class="relative bg-white/5 p-4 rounded-2xl backdrop-blur-sm border border-white/10 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all duration-300">
            <img src="/facebook.svg" alt="Facebook"
              class="w-7 h-7 group-hover:scale-110 transition-transform duration-300" />
            <div
              class="absolute inset-0 rounded-2xl bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10">
            </div>
          </div>
        </a>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 mx-auto flex flex-col items-center text-center w-full">
        <a href="#streaming-notice" class="group flex flex-col items-center cursor-pointer">
          <p class="text-xs text-white/50 mb-3 group-hover:text-yellow-400 transition-colors">
            Scroll to Explore
          </p>
          <div class="relative">
            <div
              class="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center group-hover:border-yellow-400/50 transition-colors">
              <div class="w-1 h-2 bg-white/50 rounded-full mt-2 animate-bounce group-hover:bg-yellow-400"></div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0) translateX(0);
    opacity: 0.4;
  }

  50% {
    transform: translateY(-100px) translateX(20px);
    opacity: 0.8;
  }
}

.animate-fadeIn {
  animation: fadeIn 1.2s ease-out forwards;
}

.animate-slideUp {
  opacity: 0;
  animation: slideUp 0.8s ease-out forwards;
}

.particle {
  animation: float linear infinite;
}
</style>
