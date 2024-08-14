<template>
  <div
    class="relative flex items-center justify-center min-h-[500px] bg-right bg-cover text-white font-sans px-3 py-5 tracking-wider"
    style="background-image: url('/sunset.webp')"
  >
    <div class="absolute inset-0 bg-[#283252] opacity-80"></div>
    <div class="relative text-center" data-aos="fade-up">
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 h-full items-center text-center"
      >
        <div
          v-for="value in values"
          :key="value.title"
          class="w-100 h-100 flex flex-col space-y-8 justify-center items-center p-10 rounded-full bg-transparent transition ease-in-out duration-500 hover:bg-white hover:text-black transform hover:-translate-y-2"
        >
          <Icon class="text-5xl text-red-300" :name="value.icon" />
          <div class="text-2xl md:text-3xl tracking-widest">
            {{ value.title }}
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
    },
    {
      title: 'Walking Together',
      icon: 'ph:heart-straight-duotone',
    },
    {
      title: 'Witness to the World',
      icon: 'ph:globe-hemisphere-west-duotone',
    },
  ];
</script>
