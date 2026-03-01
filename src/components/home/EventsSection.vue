<!-- src/components/home/EventsSection.vue -->
<script setup lang="ts">
import { onMounted } from 'vue'
import { useGoogleCalendar } from '../../composables/useGoogleCalendar'

const { events, loading, error, fetchEvents } = useGoogleCalendar()

onMounted(() => fetchEvents(6))
</script>

<template>
  <section class="py-24 px-6 bg-surface">
    <div class="max-w-6xl mx-auto">
      <h2 class="section-heading mb-12">Upcoming Events</h2>

      <!-- Loading state -->
      <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="i in 3"
          :key="i"
          class="card p-6 animate-pulse"
        >
          <div class="h-4 bg-border-default rounded w-1/3 mb-3" />
          <div class="h-5 bg-border-default rounded w-3/4 mb-2" />
          <div class="h-4 bg-border-default rounded w-1/2" />
        </div>
      </div>

      <!-- Error state -->
      <p v-else-if="error" class="text-text-muted text-sm">
        Unable to load events at this time.
      </p>

      <!-- Empty state -->
      <p v-else-if="events.length === 0" class="text-text-muted text-sm">
        No upcoming events. Check back soon!
      </p>

      <!-- Events grid -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
          v-for="event in events"
          :key="event.id"
          class="card p-6 flex flex-col gap-3"
        >
          <div class="flex items-center gap-2 text-accent text-sm font-body font-medium">
            <span>{{ event.formattedDate }}</span>
            <span v-if="event.formattedTime !== 'All day'" class="text-text-muted">·</span>
            <span v-if="event.formattedTime !== 'All day'" class="text-text-muted">{{ event.formattedTime }}</span>
          </div>
          <h3 class="font-display text-text-primary text-lg leading-snug">{{ event.title }}</h3>
          <p v-if="event.location" class="text-text-muted text-sm flex items-center gap-1">
            <span>📍</span> {{ event.location }}
          </p>
          <p v-if="event.description" class="text-text-muted text-sm leading-relaxed line-clamp-2">
            {{ event.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
