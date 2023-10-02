<template>
  <div
    class="bg-[url('/img2.jpg')] min-h-[500px] relative bg-cover bg-center text-white md:bg-fixed flex items-center justify-center px-3 py-5"
  >
    <div class="bg-[#283252] opacity-80 absolute w-full h-full top-0 left-0" />
    <div class="relative w-full h-full" data-aos="fade-up">
      <h2 class="text-5xl mb-8 font-display text-center">Upcoming Events</h2>

      <div class="md:flex gap-3 h-full justify-center">
        <div
          v-for="(event, index) in events"
          :key="event.id"
          class="p-6 px-12 flex flex-col gap-8"
          :class="{
            'md:border-r max-md:border-b': index !== events.length - 1,
          }"
        >
          <div
            class="w-20 h-20 bg-white border-2 border-gray-300 rounded-lg text-center shadow-lg"
          >
            <div class="border-b-2 border-gray-300 text-gray-500">
              <span class="text-xs">{{
                moment(event.date).format('ddd')
              }}</span>
            </div>
            <div class="pt-1">
              <h3 class="text-xl font-bold text-blue-400">
                {{ moment(event.date).format('DD') }}
              </h3>
              <p class="text-xs mt-[-5px] text-gray-500">
                {{ moment(event.date).format('MMM') }}
              </p>
            </div>
          </div>
          <div>
            <h3 class="text-3xl font-display font-semibold text-gray-200">
              {{ event.title }}
            </h3>

            <p
              class="text-yellow-300 font-display font-semibold tracking-wider"
            >
              {{ moment(event.date).format('hh:mm a') }}
            </p>
          </div>
          <p class="text-gray-300 font-display">{{ event.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import moment from 'moment';
  const events = reactive([
    {
      id: 1,
      title: 'Sunday Service',
      date: new Date(),
      description: 'Join us for our Sunday Service',
    },
    {
      id: 2,
      title: 'Event 2',
      date: new Date(),
      description: 'Description for Event 2',
    },
    // add more events as needed...
  ]);
</script>
