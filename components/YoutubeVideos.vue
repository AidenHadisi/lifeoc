<template>
  <section
    id="videos"
    class="flex max-md:flex-col md:py-8 md:px-8 md:gap-5 bg-gray-200"
  >
    <div
      class="bg-gray-300 md:rounded-xl shadow-lg shadow-gray-400 md:h-[640px] md:w-1/3 p-6 overflow-auto"
      data-aos="fade-right"
      data-aos-anchor-placement="top-bottom"
    >
      <h2 class="text-2xl mb-6 font-semibold text-brown tracking-wider">
        Latest Videos
      </h2>
      <div class="gap-4 max-md:flex overflow-auto items-start">
        <div
          v-for="(video, i) in videos"
          :key="i"
          class="flex max-md:flex-col items-center cursor-pointer hover:bg-gray-100 p-2 rounded-md transition min-w-[200px] max-md:gap-2"
          :class="{ 'bg-gray-100': activeVideo === video }"
          @click="setActiveVideo(video)"
        >
          <img
            :src="video.snippet.thumbnails.high.url"
            alt="thumbnail"
            class="w-32 h-24 rounded-md flex-shrink-0"
          />
          <h3 class="ml-4 text-xs text-gray-700">
            {{ video.snippet.title }}
          </h3>
        </div>
      </div>
    </div>
    <div v-if="activeVideo" class="flex-1" data-aos="fade-left">
      <iframe
        :src="selectedVideoUrl"
        class="shadow-lg h-[300px] w-full md:h-full md:rounded-xl shadow-gray-500"
        allowfullscreen
      ></iframe>
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

  watch(videos, () => {
    if (videos.value && videos.value.length > 0) {
      setActiveVideo(videos.value[0]);
    }
  });
</script>
