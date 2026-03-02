<!-- src/components/videos/VideoGrid.vue -->
<script setup lang="ts">
import { onMounted } from 'vue'
import { format, parseISO } from 'date-fns'
import { useYouTube } from '../../composables/useYouTube'

const { videos, loading, error, fetchVideos } = useYouTube()

onMounted(() => fetchVideos(12))
</script>

<template>
  <div>
    <!-- Loading skeleton -->
    <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="i in 6" :key="i" class="card animate-pulse">
        <div class="aspect-video bg-border-default rounded-t-lg" />
        <div class="p-4">
          <div class="h-4 bg-border-default rounded w-1/4 mb-2" />
          <div class="h-5 bg-border-default rounded w-full" />
        </div>
      </div>
    </div>

    <!-- Error -->
    <p v-else-if="error" class="text-text-muted text-sm text-center py-12">
      Unable to load videos at this time.
    </p>

    <!-- Empty -->
    <p v-else-if="videos.length === 0" class="text-text-muted text-sm text-center py-12">
      No videos available yet.
    </p>

    <!-- Grid -->
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <a
        v-for="video in videos"
        :key="video.id"
        :href="`https://www.youtube.com/watch?v=${video.id}`"
        target="_blank"
        rel="noopener noreferrer"
        class="card group block overflow-hidden"
      >
        <div class="relative aspect-video overflow-hidden">
          <img
            :src="video.thumbnail"
            :alt="video.title"
            class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          <div class="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
            <div class="w-14 h-14 rounded-full bg-accent/90 flex items-center justify-center">
              <svg class="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
        <div class="p-4">
          <p class="text-accent text-xs font-medium mb-1">
            {{ video.publishedAt ? format(parseISO(video.publishedAt), 'MMM d, yyyy') : '' }}
          </p>
          <h3 class="font-display text-text-primary text-base leading-snug line-clamp-2 group-hover:text-accent transition-colors duration-150">
            {{ video.title }}
          </h3>
        </div>
      </a>
    </div>
  </div>
</template>
