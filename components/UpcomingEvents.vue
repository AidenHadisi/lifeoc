<template>
  <div
    class="bg-[url('/img2.jpg')] min-h-[500px] relative bg-cover bg-center text-white md:bg-fixed flex items-center justify-center px-3 py-16">
    <!-- Overlay with gradient for better depth -->
    <div class="absolute inset-0 bg-gradient-to-br from-[#283252]/90 to-gray-900/80" />

    <div class="container mx-auto relative z-10" data-aos="fade-up">
      <h2 class="text-4xl md:text-5xl mb-10 font-bold text-center">
        <span class="relative inline-block">
          <span class="relative z-10">Upcoming Events</span>
          <span class="absolute -bottom-2 left-0 right-0 h-1 bg-yellow-500 transform scale-x-90"></span>
        </span>
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <p v-if="events.length === 0"
          class="col-span-full font-display tracking-wider text-2xl text-center py-10 bg-white/5 rounded-lg backdrop-blur-sm">
          No upcoming events
        </p>

        <div v-for="(event, index) in events" :key="event.id"
          class="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl hover:transform hover:-translate-y-1 transition-all duration-300 group"
          data-aos="fade-up" :data-aos-delay="index * 100">
          <!-- Event card header with date -->
          <div class="flex items-center gap-4 p-4 border-b border-white/10">
            <div class="flex-shrink-0">
              <!-- Date box with improved design -->
              <div class="w-16 h-18 bg-white rounded-lg overflow-hidden shadow-lg text-center flex flex-col">
                <div class="bg-yellow-500 text-black font-medium">
                  <span class="text-xs uppercase">{{ formatDay(event.start_date) }}</span>
                </div>
                <div class="flex-1 flex flex-col justify-center leading-tight">
                  <h3 class="text-xl font-bold text-gray-800">{{ formatDayNumber(event.start_date) }}</h3>
                  <p class="text-xs text-gray-600">{{ formatMonth(event.start_date) }}</p>
                </div>
              </div>
            </div>

            <div class="flex-1">
              <h3 class="text-xl font-semibold text-white group-hover:text-yellow-300 transition-colors duration-300">
                {{ event.title }}
              </h3>
              <div class="flex items-center mt-1 text-gray-300">
                <Icon name="heroicons:clock" class="h-4 w-4 mr-1" />
                <p class="text-sm">{{ formatTime(event.start_date) }}</p>
              </div>
            </div>
          </div>

          <!-- Only show description if available -->
          <div v-if="event.description" class="p-4 text-sm text-gray-300">
            <p class="line-clamp-2">{{ event.description }}</p>
          </div>


        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import moment from 'moment';
const { events } = useUpcomingEvents();

// Helper functions for formatting dates
function formatDay(date: string): string {
  return moment(date).format('ddd');
}

function formatDayNumber(date: string): string {
  return moment(date).format('DD');
}

function formatMonth(date: string): string {
  return moment(date).format('MMM');
}

function formatTime(date: string): string {
  return moment(date).format('h:mm A');
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
