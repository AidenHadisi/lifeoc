<template>
  <div class="relative py-20 bg-fixed bg-cover bg-center text-white font-sans tracking-wider"
    style="background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('/sunset.webp')">
    <div class="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-800/80"></div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center mb-12" data-aos="fade-down">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">What We <span class="text-yellow-500">Believe In</span></h2>
        <div class="w-24 h-1 bg-yellow-500 mx-auto"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto" data-aos="fade-up" data-aos-delay="200">
        <div v-for="value in values" :key="value.title" class="group relative overflow-hidden rounded-2xl">
          <div
            class="absolute inset-0 bg-gradient-to-b from-gray-800/30 to-gray-900/90 opacity-80 group-hover:opacity-90 transition-opacity duration-300">
          </div>

          <div
            class="relative z-10 p-8 flex flex-col items-center justify-center h-full min-h-[280px] transition-all duration-500 transform group-hover:-translate-y-2">
            <div class="bg-gray-900/50 p-5 rounded-full mb-6 group-hover:bg-yellow-500/20 transition-all duration-300">
              <Icon :name="value.icon"
                class="text-5xl text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300" />
            </div>

            <h3
              class="text-2xl md:text-3xl font-bold tracking-wider mb-4 group-hover:text-yellow-300 transition-colors duration-300">
              {{ value.title }}
            </h3>

            <p class="text-gray-300 text-center opacity-0 group-hover:opacity-100 transition-all duration-500">
              {{ value.description }}
            </p>

            <div
              class="absolute bottom-0 left-0 w-full h-1 bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left">
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
    description: 'We pursue an intimate relationship with God through worship, prayer, and the study of His Word.'
  },
  {
    title: 'Walking Together',
    icon: 'ph:heart-straight-duotone',
      description: 'We are committed to authentic community, supporting one another in love as we grow in Christ.'
    },
    {
      title: 'Witness to the World',
      icon: 'ph:globe-hemisphere-west-duotone',
      description: 'We share the Gospel through our words and actions, serving others and making disciples locally and globally.'
    },
  ];
</script>
