<template>
  <section id="videos" class="py-12 bg-gradient-to-br from-gray-100 to-gray-200">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold mb-8 text-center text-gray-800" data-aos="fade-up">
        <span class="border-b-4 border-yellow-500 pb-2">Latest Videos</span>
      </h2>

      <div class="flex flex-col lg:flex-row gap-6">
        <!-- Video Player Section -->
        <div v-if="activeVideo" class="lg:w-2/3 rounded-xl overflow-hidden shadow-2xl order-1 lg:order-2"
          data-aos="fade-left" data-aos-delay="200">
          <div class="relative pb-[56.25%] h-0">
            <iframe :src="selectedVideoUrl" class="absolute top-0 left-0 w-full h-full rounded-xl"
              allowfullscreen></iframe>
          </div>

          <div class="bg-white p-4 rounded-b-xl">
            <h3 class="text-lg font-semibold text-gray-800" v-if="activeVideo">
              {{ activeVideo.snippet.title }}
            </h3>
            <p class="text-sm text-gray-600 mt-1" v-if="activeVideo">
              {{ formatDate(activeVideo.snippet.publishedAt) }}
            </p>
          </div>
        </div>

        <!-- Video List Section -->
        <div class="lg:w-1/3 bg-white rounded-xl shadow-xl overflow-hidden order-2 lg:order-1" data-aos="fade-right"
          data-aos-delay="200">
          <div class="p-4 bg-gradient-to-r from-gray-800 to-gray-700 text-white">
            <h3 class="text-xl font-semibold flex items-center">
              <Icon name="heroicons:video-camera" class="mr-2" /> Video Library
            </h3>
          </div>

          <div class="h-[500px] overflow-y-auto p-2 video-list">
            <div v-for="(video, i) in videos" :key="i"
              class="flex items-center cursor-pointer hover:bg-gray-100 p-3 rounded-lg transition mb-2 border-l-4"
              :class="{
                'bg-gray-100 border-yellow-500 shadow-md': activeVideo === video,
                'border-transparent': activeVideo !== video
              }" @click="setActiveVideo(video)">
              <div class="relative">
                <img :src="video.snippet.thumbnails.high.url" alt="thumbnail"
                  class="w-24 h-16 rounded-md object-cover" />
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="w-8 h-8 rounded-full bg-black bg-opacity-70 flex items-center justify-center"
                    :class="{ 'text-yellow-500': activeVideo === video, 'text-white': activeVideo !== video }">
                    <Icon name="heroicons:play" class="w-4 h-4" />
                  </div>
                </div>
              </div>
              <div class="ml-3">
                <h4 class="text-sm font-medium text-gray-800 line-clamp-2">
                  {{ video.snippet.title }}
                </h4>
                <p class="text-xs text-gray-500 mt-1">
                  {{ formatDate(video.snippet.publishedAt) }}
                </p>
              </div>
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
.video-list::-webkit-scrollbar {
  width: 6px;
}

.video-list::-webkit-scrollbar-track {
  background-color: #f1f1f1;
  border-radius: 10px;
}

.video-list::-webkit-scrollbar-thumb {
  background-color: #cccccc;
  border-radius: 10px;
}

.video-list::-webkit-scrollbar-thumb:hover {
  background-color: #aaaaaa;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
