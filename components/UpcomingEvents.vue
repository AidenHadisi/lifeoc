<template>
  <div
    class="bg-[url('/img2.jpg')] min-h-[500px] relative bg-cover bg-center text-white md:bg-fixed flex items-center justify-center px-3 py-5"
  >
    <div class="bg-[#283252] opacity-80 absolute w-full h-full top-0 left-0" />
    <div class="relative w-full h-full" data-aos="fade-up">
      <h2 class="text-5xl mb-8 font-display text-center">Upcoming Events</h2>

      <div class="md:flex gap-3 h-full justify-between">
        <p
          v-if="events.length === 0"
          class="ont-display tracking-wider text-2xl text-center"
        >
          No upcoming events
        </p>
        <div
          v-for="(event, index) in events"
          :key="event.id"
          class="p-6 px-12 flex flex-col gap-4 items-center flex-1 text-center"
          :class="{
            'md:border-r max-md:border-b border-gray-500':
              index !== events.length - 1,
          }"
        >
          <div
            class="w-20 h-20 bg-white border-2 border-gray-300 rounded-lg text-center shadow-lg"
          >
            <div class="border-b-2 border-gray-300 text-gray-500">
              <span class="text-xs">{{
                moment(event.start_date).format('ddd')
              }}</span>
            </div>
            <div class="pt-1">
              <h3 class="text-xl font-bold text-blue-400">
                {{ moment(event.start_date).format('DD') }}
              </h3>
              <p class="text-xs mt-[-5px] text-gray-500">
                {{ moment(event.start_date).format('MMM') }}
              </p>
            </div>
          </div>
          <div>
            <h3 class="text-2xl font-display font-semibold text-gray-200">
              {{ event.title }}
            </h3>

            <p
              class="text-brown font-display font-semibold tracking-wider text-center"
            >
              {{ moment(event.start_date).format('hh:mm a') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import moment from 'moment';
  const { events } = useUpcomingEvents();
</script>
