<template>
  <section
    class="flex max-md:flex-col border-t border-gray-500 w-full overflow-x-hidden"
  >
    <div v-if="activeVideo" class="flex-1 flex" data-aos="fade-right">
      <iframe
        :src="selectedVideoUrl"
        class="shadow-lg h-[300px] w-full md:h-full"
        allowfullscreen
      ></iframe>
    </div>
    <div
      class="w-full md:w-[400px] md:h-[600px] overflow-auto px-4 py-4 md:shadow-lg shadow-gray-400 bg-[#283252] text-white"
      data-aos="fade-left"
      data-aos-anchor-placement="top-bottom"
    >
      <h1
        class="hidden md:block text-2xl mb-3 font-display tracking-wider text-center border-b pb-3"
      >
        Latest Videos
      </h1>
      <div class="flex md:grid grid-cols-2 gap-4">
        <div
          v-for="(video, i) in videos"
          :key="i"
          class="cursor-pointer hover:scale-105 duration-300 text-gray-300 transform min-w-[100px]"
          :class="{ 'text-yellow-300': activeVideo === video }"
          @click="setActiveVideo(video)"
        >
          <img
            :src="video.snippet.thumbnails.high.url"
            alt="thumbnail"
            class="rounded-xl"
          />
          <h3 class="mt-2 text-xs">{{ video.snippet.title }}</h3>
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

  watch(videos, () => {
    if (videos.value && videos.value.length > 0) {
      setActiveVideo(videos.value[0]);
    }
  });
</script>
