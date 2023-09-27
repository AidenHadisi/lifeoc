<template>
  <section class="px-4 lg:px-8 py-12 bg-gray-900 text-gray-300">
    <h2 class="text-4xl font-bold mb-6 text-center">Upcoming Events</h2>
    <div class="flex gap-3 items-center flex-wrap justify-center">
      <div
        v-for="event in events"
        :key="event.id"
        class="p-6 rounded-lg shadow-xl w-96 bg-slate-800 transform transition-all duration-500 hover:scale-105"
      >
        <h3
          class="text-4xl font-semibold font-display text-yellow-400 uppercase tracking-widest"
        >
          {{ moment(event.date).format('hh:mm a') }}
        </h3>
        <h3
          class="text-xl font-semibold font-display text-yellow-400 uppercase mb-1"
        >
          {{ moment(event.date).format('ddd DD MMM') }}
        </h3>
        <h3 class="text-xl mb-2 font-bold">{{ event.title }}</h3>
        <p>{{ event.description }}</p>
      </div>
    </div>
  </section>
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
