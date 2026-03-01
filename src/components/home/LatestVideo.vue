<!-- src/components/home/LatestVideo.vue -->
<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useYouTube } from '../../composables/useYouTube'
import { format, parseISO } from 'date-fns'

const { videos, loading, error, fetchVideos } = useYouTube()

const latest = computed(() => videos.value[0] ?? null)

onMounted(() => fetchVideos(1))
</script>

<template>
  <section class="py-24 px-6">
    <div class="max-w-6xl mx-auto">
      <h2 class="section-heading mb-12">Latest Message</h2>

      <!-- Loading -->
      <div v-if="loading" class="aspect-video bg-surface rounded-xl animate-pulse max-w-3xl" />

      <!-- Error -->
      <p v-else-if="error" class="text-text-muted text-sm">Unable to load latest video.</p>

      <!-- Video -->
      <div v-else-if="latest" class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div class="aspect-video rounded-xl overflow-hidden border border-border-default shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <iframe
            :src="`https://www.youtube.com/embed/${latest.id}`"
            :title="latest.title"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowfullscreen
            class="w-full h-full"
          />
        </div>
        <div>
          <p class="text-accent text-sm font-body font-medium mb-2">
            {{ latest.publishedAt ? format(parseISO(latest.publishedAt), 'MMMM d, yyyy') : '' }}
          </p>
          <h3 class="font-display text-text-primary text-2xl md:text-3xl mb-4 leading-snug">
            {{ latest.title }}
          </h3>
          <p class="text-text-muted text-sm leading-relaxed mb-6 line-clamp-3">
            {{ latest.description }}
          </p>
          <a href="/videos" class="btn-outline">View All Messages</a>
        </div>
      </div>

      <!-- Empty state -->
      <p v-else class="text-text-muted text-sm">No messages available.</p>
    </div>
  </section>
</template>
