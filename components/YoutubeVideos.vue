<template>
  <section id="videos"
    class="relative py-28 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
    <!-- Decorative background elements -->
    <div class="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    <div class="absolute -right-40 top-20 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[150px]"></div>
    <div class="absolute -left-40 bottom-20 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[120px]"></div>

    <div class="container mx-auto px-6 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16" data-aos="fade-up">

        <h2 class="text-4xl md:text-6xl font-bold text-white mb-4">
          Latest
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">Videos</span>
        </h2>
        <p class="text-white/50 max-w-2xl mx-auto">
          Watch our most recent services and messages from Life Church of Orange
        </p>
      </div>

      <!-- Video Content Area -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <!-- Video Player Column -->
        <div class="lg:col-span-8" data-aos="fade-right">
          <div v-if="activeVideo" class="relative group">
            <!-- Featured Video with modern frame -->
            <div class="rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/5">
              <!-- Video iframe -->
              <div class="relative pb-[56.25%] h-0 bg-slate-900">
                <iframe :src="selectedVideoUrl" class="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen></iframe>
              </div>

              <!-- Video Info Panel -->
              <div
                class="bg-gradient-to-r from-slate-800/90 to-slate-900/90 backdrop-blur-md p-6 border-t border-white/5">
                <h3 class="text-xl md:text-2xl font-bold text-white mb-3 line-clamp-2">
                  {{ activeVideo.snippet.title }}
                </h3>
                <div class="flex items-center justify-between flex-wrap gap-4">
                  <div class="flex items-center text-white/60">
                    <Icon name="heroicons:calendar" class="mr-2 h-4 w-4 text-yellow-400" />
                    <span>{{
                      formatDate(activeVideo.snippet.publishedAt)
                    }}</span>
                  </div>
                  <!-- Watch on YouTube button -->
                  <a :href="`https://www.youtube.com/watch?v=${activeVideo.contentDetails.upload.videoId}`"
                    target="_blank"
                    class="group/btn inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-300">
                    <Icon name="ph:youtube-logo" class="h-5 w-5" />
                    <span class="text-sm font-medium">Watch on YouTube</span>
                    <Icon name="heroicons:arrow-up-right"
                      class="h-4 w-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Video Playlist Column -->
        <div class="lg:col-span-4" data-aos="fade-left" data-aos-delay="100">
          <div
            class="h-full rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden flex flex-col">
            <!-- Playlist Header -->
            <div class="p-5 border-b border-white/10 flex items-center justify-between bg-white/5">
              <div class="flex items-center gap-3">
                <div class="p-2 rounded-lg bg-yellow-500/10">
                  <Icon name="heroicons:rectangle-stack" class="h-5 w-5 text-yellow-400" />
                </div>
                <h3 class="text-lg font-semibold text-white">Recent Videos</h3>
              </div>
              <span class="text-sm text-white/50 px-3 py-1 bg-white/5 rounded-full">{{ videos.length }}</span>
            </div>

            <!-- Video List -->
            <div class="overflow-y-auto flex-1 max-h-[500px] custom-scrollbar">
              <div v-for="(video, i) in videos" :key="i" @click="setActiveVideo(video)"
                class="group p-4 border-b border-white/5 hover:bg-white/5 cursor-pointer transition-all duration-200"
                :class="{
                  'bg-yellow-500/10 hover:bg-yellow-500/15 border-l-2 border-l-yellow-400':
                    activeVideo === video,
                }">
                <div class="flex gap-4">
                  <!-- Thumbnail with play indicator -->
                  <div class="relative flex-shrink-0">
                    <img :src="video.snippet.thumbnails.high.url" :alt="video.snippet.title"
                      class="w-28 h-16 object-cover rounded-lg" />
                    <div
                      class="absolute inset-0 flex items-center justify-center bg-black/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                      <div class="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center">
                        <Icon name="heroicons:play-solid" class="w-5 h-5 text-slate-900 ml-0.5" />
                      </div>
                    </div>
                    <div v-if="activeVideo === video" class="absolute -left-1 top-1/2 -translate-y-1/2">
                      <div class="w-1.5 h-8 bg-gradient-to-b from-yellow-400 to-amber-500 rounded-full"></div>
                    </div>
                  </div>

                  <!-- Video info -->
                  <div class="flex-1 overflow-hidden">
                    <h4
                      class="font-medium text-sm text-white/90 line-clamp-2 group-hover:text-yellow-300 transition-colors"
                      :class="{ 'text-yellow-300': activeVideo === video }">
                      {{ video.snippet.title }}
                    </h4>
                    <p class="text-xs text-white/40 mt-2">
                      {{ formatDate(video.snippet.publishedAt) }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- More Videos Button -->
            <div class="p-4 bg-slate-900/50 border-t border-white/5">
              <a href="https://www.youtube.com/channel/UCoVX240Rcw6ek5Opx2J84QA" target="_blank"
                class="group/yt w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl hover:from-red-500 hover:to-red-600 transition-all duration-300 font-medium">
                <Icon name="ph:youtube-logo-fill" class="h-5 w-5" />
                Visit Our Channel
                <Icon name="heroicons:arrow-right" class="h-4 w-4 group-hover/yt:translate-x-1 transition-transform" />
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
    day: 'numeric',
  });
}

watch(videos, () => {
  if (videos.value && videos.value.length > 0) {
    setActiveVideo(videos.value[0]);
  }
});
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.2);
}
</style>
