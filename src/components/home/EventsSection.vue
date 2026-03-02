<!-- src/components/home/EventsSection.vue -->
<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { format, parseISO, addDays, endOfDay } from 'date-fns'
import { useGoogleCalendar } from '../../composables/useGoogleCalendar'

const { events, loading, error, fetchEvents } = useGoogleCalendar()

const weekEvents = computed(() => {
  const cutoff = endOfDay(addDays(new Date(), 7))
  return events.value
    .filter(e => new Date(e.start) <= cutoff)
    .slice(0, 3)
})

onMounted(() => fetchEvents(10))
</script>

<template>
  <section class="py-24 px-6 bg-surface">
    <div class="max-w-6xl mx-auto">
      <h2 class="section-heading mb-12">Upcoming Events</h2>

      <!-- Loading state -->
      <div v-if="loading" class="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div v-for="i in 3" :key="i" class="card flex gap-0 overflow-hidden animate-pulse h-24">
          <div class="w-20 shrink-0 bg-border-default" />
          <div class="flex-1 p-5 flex flex-col gap-2 justify-center">
            <div class="h-4 bg-border-default rounded w-1/3" />
            <div class="h-5 bg-border-default rounded w-2/3" />
          </div>
        </div>
      </div>

      <!-- Error state -->
      <p v-else-if="error" class="text-text-muted text-sm">
        Unable to load events at this time.
      </p>

      <!-- Empty state -->
      <p v-else-if="weekEvents.length === 0" class="text-text-muted text-sm">
        No events this week. Check back soon!
      </p>

      <!-- Events list -->
      <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <article
          v-for="event in weekEvents"
          :key="event.id"
          class="card flex gap-0 overflow-hidden"
        >
          <!-- Calendar date tab -->
          <div class="w-20 shrink-0 bg-accent flex flex-col items-center justify-center py-5 gap-0.5">
            <span class="text-base font-body font-bold uppercase tracking-widest text-xs leading-none" style="color: rgba(0,0,0,0.6)">
              {{ format(parseISO(event.start), 'MMM') }}
            </span>
            <span class="font-display text-3xl leading-none font-bold" style="color: var(--color-base)">
              {{ format(parseISO(event.start), 'd') }}
            </span>
            <span class="text-xs font-body" style="color: rgba(0,0,0,0.5)">
              {{ format(parseISO(event.start), 'EEE') }}
            </span>
          </div>

          <!-- Event details -->
          <div class="flex-1 px-5 py-4 flex flex-col justify-center gap-1 min-w-0">
            <h3 class="font-display text-text-primary text-lg leading-snug truncate">{{ event.title }}</h3>
            <div class="flex items-center gap-3 text-sm text-text-muted flex-wrap">
              <span v-if="event.formattedTime !== 'All day'" class="flex items-center gap-1">
                <svg class="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                </svg>
                {{ event.formattedTime }}
              </span>
              <span v-if="event.location" class="flex items-center gap-1 truncate">
                <svg class="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                {{ event.location }}
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
