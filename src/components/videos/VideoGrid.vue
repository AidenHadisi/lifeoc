<!-- src/components/videos/VideoGrid.vue -->
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { format, parseISO } from 'date-fns'
import { useYouTube } from '../../composables/useYouTube'
import type { YouTubeVideo } from '../../composables/useYouTube'

const { videos, loading, error, fetchVideos } = useYouTube()

const activeVideo = ref<YouTubeVideo | null>(null)

function openVideo(video: YouTubeVideo) {
  activeVideo.value = video
}

function closeVideo() {
  activeVideo.value = null
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') closeVideo()
}

onMounted(() => {
  fetchVideos(12)
  window.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
})
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
      <button
        v-for="video in videos"
        :key="video.id"
        class="card group block overflow-hidden text-left cursor-pointer"
        @click="openVideo(video)"
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
      </button>
    </div>

    <!-- Video modal -->
    <Teleport to="body">
      <div
        v-if="activeVideo"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        @click.self="closeVideo"
      >
        <div class="relative w-full max-w-4xl">
          <button
            class="absolute -top-10 right-0 text-white/70 hover:text-white transition-colors"
            aria-label="Close video"
            @click="closeVideo"
          >
            <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div class="aspect-video rounded-xl overflow-hidden border border-border-default shadow-2xl">
            <iframe
              :src="`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1`"
              :title="activeVideo.title"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowfullscreen
              class="w-full h-full"
            />
          </div>
          <p class="mt-3 text-text-primary font-display text-lg leading-snug">
            {{ activeVideo.title }}
          </p>
        </div>
      </div>
    </Teleport>
  </div>
</template>
