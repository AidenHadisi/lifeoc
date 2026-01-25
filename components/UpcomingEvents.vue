<template>
  <div class="relative min-h-[600px] py-24 overflow-hidden">
    <!-- Background with parallax effect -->
    <div class="absolute inset-0 bg-[url('/img2.jpg')] bg-cover bg-center bg-fixed"></div>
    <div class="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95"></div>

    <!-- Decorative elements -->
    <div class="absolute top-20 left-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-[100px]"></div>
    <div class="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px]"></div>

    <div class="container mx-auto px-6 relative z-10" data-aos="fade-up">
      <!-- Section header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-6xl font-bold text-white mb-4">
          Upcoming
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">Events</span>
        </h2>
        <p class="text-white/60 max-w-2xl mx-auto">
          Join us for worship, fellowship, and community gatherings
        </p>
      </div>

      <!-- Events grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div v-if="events.length === 0" class="col-span-full">
          <div class="text-center py-16 px-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10">
            <Icon name="heroicons:calendar" class="w-16 h-16 text-white/30 mx-auto mb-4" />
            <p class="font-display tracking-wider text-2xl text-white/70">
              No upcoming events
            </p>
            <p class="text-white/50 mt-2">Check back soon for new events!</p>
          </div>
        </div>

        <div v-for="(event, index) in events" :key="event.id" class="group relative" data-aos="fade-up"
          :data-aos-delay="index * 100">
          <!-- Card with glassmorphism -->
          <div
            class="relative h-full rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden hover:bg-white/10 hover:border-yellow-400/30 transition-all duration-500">
            <!-- Glow effect on hover -->
            <div
              class="absolute inset-0 bg-gradient-to-br from-yellow-400/0 to-yellow-400/0 group-hover:from-yellow-400/5 group-hover:to-transparent transition-all duration-500">
            </div>

            <!-- Card header -->
            <div class="relative p-6 pb-4">
              <div class="flex items-start gap-4">
                <!-- Date badge -->
                <div class="flex-shrink-0">
                  <div class="w-16 rounded-xl overflow-hidden shadow-lg bg-white">
                    <div class="bg-gradient-to-r from-yellow-400 to-amber-500 py-1 text-center">
                      <span class="text-xs font-bold text-slate-900 uppercase">{{ formatDay(getEventStartDate(event))
                        }}</span>
                    </div>
                    <div class="py-2 text-center">
                      <span class="text-2xl font-black text-slate-900">{{
                        formatDayNumber(getEventStartDate(event))
                        }}</span>
                      <p class="text-xs font-medium text-slate-500 uppercase">
                        {{ formatMonth(getEventStartDate(event)) }}
                      </p>
                    </div>
                  </div>
                </div>

                <!-- Event info -->
                <div class="flex-1 min-w-0">
                  <h3
                    class="text-xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300 line-clamp-2">
                    {{ event.summary }}
                  </h3>
                  <div class="flex items-center mt-3 text-white/60">
                    <Icon name="heroicons:clock" class="h-4 w-4 mr-2 text-yellow-400" />
                    <span class="text-sm font-medium">{{
                      formatTime(getEventStartDate(event))
                      }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Description -->
            <div v-if="event.description" class="px-6 pb-6">
              <p class="text-sm text-white/50 line-clamp-2">
                {{ event.description }}
              </p>
            </div>

            <!-- Bottom accent line -->
            <div
              class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import moment from 'moment';
const { events } = useUpcomingEvents();

// Helper function to get event start date
function getEventStartDate(event: any): string {
  return event.start.dateTime || event.start.date;
}

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
