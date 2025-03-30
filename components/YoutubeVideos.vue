<template>
  <section id="videos" class="relative py-24 overflow-hidden bg-gradient-to-b from-gray-900 to-black">
    <!-- Decorative background elements -->
    <div class="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-gray-800 to-transparent"></div>
    <div class="absolute -right-32 -top-32 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
    <div class="absolute -left-32 top-64 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>

    <div class="container mx-auto px-4 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-12" data-aos="fade-up">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-4 inline-flex items-center justify-center gap-3">
          <Icon name="ph:youtube-logo-duotone" class="text-red-500" />
          <span>Latest <span class="text-yellow-400">Videos</span></span>
        </h2>
        <p class="text-gray-400 max-w-2xl mx-auto mt-4">
          Watch our most recent services and messages from Life Church of Orange
        </p>
      </div>

      <!-- Video Content Area -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <!-- Video Player Column -->
        <div class="lg:col-span-8" data-aos="fade-right">
          <div v-if="activeVideo" class="relative group">
            <!-- Featured Video with modern frame -->
            <div
              class="rounded-xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_40px_rgba(234,179,8,0.2)] transition-shadow duration-500">
              <!-- Video Thumbnail Overlay (shows before playing) -->
              <div class="relative">
                <div class="relative pb-[56.25%] h-0 bg-gray-900">
                  <iframe :src="selectedVideoUrl" class="absolute top-0 left-0 w-full h-full rounded-t-xl"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
                </div>

                <!-- Video Info Panel -->
                <div class="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-b-xl border-t border-gray-700/50">
                  <h3 class="text-xl md:text-2xl font-semibold text-white mb-2">
                    {{ activeVideo.snippet.title }}
                  </h3>
                  <div class="flex items-center justify-between flex-wrap gap-y-2">
                    <div class="flex items-center text-gray-400">
                      <Icon name="heroicons:calendar" class="mr-2 h-4 w-4 text-yellow-500" />
                      <span>{{ formatDate(activeVideo.snippet.publishedAt) }}</span>
                    </div>
                    <!-- Share buttons -->
                    <div class="flex items-center gap-2">
                      <button
                        class="p-2 rounded-full bg-gray-700/50 hover:bg-gray-700 transition-colors text-gray-300 hover:text-white"
                        aria-label="Share on Facebook">
                        <Icon name="ph:facebook-logo" class="h-4 w-4" />
                      </button>
                      <button
                        class="p-2 rounded-full bg-gray-700/50 hover:bg-gray-700 transition-colors text-gray-300 hover:text-white"
                        aria-label="Share on Twitter">
                        <Icon name="ph:twitter-logo" class="h-4 w-4" />
                      </button>
                      <a :href="`https://www.youtube.com/watch?v=${activeVideo.contentDetails.upload.videoId}`"
                        target="_blank"
                        class="flex items-center gap-1 px-3 py-1 rounded-full bg-red-600/20 text-red-400 hover:bg-red-600 hover:text-white transition-colors text-sm">
                        <Icon name="ph:youtube-logo" class="h-4 w-4" />
                        <span>Watch on YouTube</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Video Playlist Column -->
        <div class="lg:col-span-4" data-aos="fade-left" data-aos-delay="100">
          <div
            class="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-gray-700/30 h-full flex flex-col">
            <!-- Playlist Header -->
            <div
              class="bg-gradient-to-r from-gray-800 to-gray-900 p-4 border-b border-gray-700/30 flex items-center justify-between">
              <div class="flex items-center">
                <Icon name="heroicons:rectangle-stack" class="h-5 w-5 text-yellow-500 mr-2" />
                <h3 class="text-lg font-medium text-white">Recent Videos</h3>
              </div>
              <span class="text-sm text-gray-400 px-2 py-1 bg-gray-800/50 rounded-full">{{ videos.length }}</span>
            </div>

            <!-- Video List -->
            <div class="overflow-y-auto video-list flex-1 custom-scrollbar">
              <div v-for="(video, i) in videos" :key="i" @click="setActiveVideo(video)"
                class="group p-3 border-b border-gray-800/50 hover:bg-gray-800/50 cursor-pointer transition-colors duration-200"
                :class="{ 'bg-yellow-500/10 hover:bg-yellow-500/20': activeVideo === video }">
                <div class="flex gap-3">
                  <!-- Thumbnail with play indicator -->
                  <div class="relative flex-shrink-0">
                    <img :src="video.snippet.thumbnails.medium.url" :alt="video.snippet.title"
                      class="w-24 h-16 object-cover rounded-md" />
                    <div class="absolute inset-0 flex items-center justify-center">
                      <div
                        class="w-8 h-8 rounded-full bg-black/70 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
                        <Icon name="heroicons:play-solid" class="w-4 h-4"
                          :class="{ 'text-yellow-400': activeVideo === video, 'text-white': activeVideo !== video }" />
                      </div>
                    </div>
                    <div v-if="activeVideo === video"
                      class="absolute -left-1 top-1/2 transform -translate-y-1/2 w-1 h-10 bg-yellow-500 rounded-r-full">
                    </div>
                  </div>

                  <!-- Video info -->
                  <div class="flex-1 overflow-hidden">
                    <h4
                      class="font-medium text-sm text-gray-100 line-clamp-2 group-hover:text-yellow-300 transition-colors">
                      {{ video.snippet.title }}
                    </h4>
                    <p class="text-xs text-gray-500 mt-1">
                      {{ formatDate(video.snippet.publishedAt) }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- More Videos Button -->
            <div class="p-4 bg-gray-900/50 border-t border-gray-700/30 text-center">
              <a href="https://www.youtube.com/channel/UCoVX240Rcw6ek5Opx2J84QA" target="_blank"
                class="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-md hover:from-red-500 hover:to-red-600 transition-colors group">
                <Icon name="ph:youtube-logo-fill" class="mr-2 h-5 w-5" />
                Visit Our YouTube Channel
                <Icon name="heroicons:arrow-right"
                  class="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const activeVideo = ref<Video | null>(null);
const { videos } = useYoutube();

const selectedVideoUrl = computed(() => {
  if (activeVideo.value) {
    return `https://www.youtube.com/embed/${activeVideo.value.contentDetails.upload.videoId}`;
  }
  return '';
});

function setActiveVideo(video: Video) {
  activeVideo.value = video;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

watch(videos, () => {
  if (videos.value && videos.value.length > 0) {
    setActiveVideo(videos.value[0]);
  }
});
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.2);
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
