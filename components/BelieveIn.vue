<template>
  <div class="relative py-28 overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-[url('/sunset.webp')] bg-cover bg-center bg-fixed"></div>
    <div class="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95"></div>

    <!-- Animated gradient orbs -->
    <div
      class="absolute top-0 left-1/4 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[150px] animate-pulse-slow">
    </div>
    <div
      class="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px] animate-pulse-slow"
      style="animation-delay: 1s"></div>

    <div class="container mx-auto px-6 relative z-10">
      <!-- Section header -->
      <div class="text-center mb-20" data-aos="fade-down">

        <h2 class="text-4xl md:text-6xl font-bold text-white mb-4">
          What We
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">Believe In</span>
        </h2>
        <div class="w-24 h-1.5 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto rounded-full"></div>
      </div>

      <!-- Values grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto" data-aos="fade-up" data-aos-delay="200">
        <div v-for="(value, index) in values" :key="value.title" class="group relative"
          :data-aos-delay="200 + index * 100">
          <!-- Card -->
          <div
            class="relative h-full rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 p-8 overflow-hidden hover:bg-white/10 hover:border-yellow-400/30 transition-all duration-500">
            <!-- Gradient overlay on hover -->
            <div
              class="absolute inset-0 bg-gradient-to-br from-yellow-400/0 to-transparent group-hover:from-yellow-400/10 transition-all duration-500">
            </div>

            <!-- Content -->
            <div class="relative z-10 flex flex-col items-center text-center h-full">
              <!-- Icon container -->
              <div class="relative mb-8">
                <div
                  class="absolute inset-0 bg-yellow-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                </div>
                <div
                  class="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-yellow-400/30 transition-all duration-500">
                  <Icon :name="value.icon"
                    class="text-4xl text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300" />
                </div>
              </div>

              <!-- Title -->
              <h3
                class="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-yellow-300 transition-colors duration-300">
                {{ value.title }}
              </h3>

              <!-- Description -->
              <p class="text-white/60 leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                {{ value.description }}
              </p>
            </div>

            <!-- Bottom accent -->
            <div
              class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const values = [
  {
    title: 'Knowing God',
    icon: 'ph:cross-duotone',
    description:
      'We pursue an intimate relationship with God through worship, prayer, and the study of His Word.',
  },
  {
    title: 'Walking Together',
    icon: 'ph:heart-straight-duotone',
    description:
      'We are committed to authentic community, supporting one another in love as we grow in Christ.',
  },
  {
    title: 'Witness to the World',
    icon: 'ph:globe-hemisphere-west-duotone',
    description:
      'We share the Gospel through our words and actions, serving others and making disciples locally and globally.',
  },
];
</script>
