<template>
  <section
    id="videos"
    class="w-full py-8 md:px-8 text-white bg-slate-900 text-center"
  >
    <h2
      class="title-font font-display sm:text-4xl text-4xl mb-4 font-medium text-brown pb-3 border-b-2 border-gray-300 inline-block"
    >
      Latest Videos
    </h2>
    <div v-if="activeVideo" data-aos="fade-down">
      <iframe
        :src="selectedVideoUrl"
        class="h-full min-h-[300px] md:min-h-[500px] md:max-w-[800px] w-full md:rounded-xl ml-auto mr-auto md:shadow-[0px_4px_16px_0px_#9b8c7961]"
        allowfullscreen
      ></iframe>
    </div>
    <div
      class="w-full overflow-auto px-4 py-8"
      data-aos="fade-left"
      data-aos-anchor-placement="top-bottom"
    >
      <div class="flex gap-2 md:gap-4 align-middle justify-center flex-wrap">
        <div
          v-for="(video, i) in videos"
          :key="i"
          class="cursor-pointer hover:scale-105 duration-300 transform md:w-[200px] w-[100px]"
          @click="setActiveVideo(video)"
        >
          <img
            :src="video.snippet.thumbnails.high.url"
            alt="thumbnail"
            class="rounded-xl shadow-md shadow-gray-900"
          />
          <h3 class="mt-2 text-center text-xs">{{ video.snippet.title }}</h3>
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
