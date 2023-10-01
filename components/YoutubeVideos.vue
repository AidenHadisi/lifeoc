<template>
  <section class="p-4">
    <h2 class="text-2xl font-bold mb-4">Recent Videos</h2>
    <div class="grid grid-cols-4 gap-4">
      <div
        v-for="(video, i) in videos"
        :key="i"
        class="cursor-pointer"
        @click="setActiveVideo(video)"
      >
        <img
          :src="video.snippet.thumbnails.default.url"
          alt=""
          class="w-full"
        />
        <h3 class="mt-2 text-sm">{{ video.snippet.title }}</h3>
      </div>
    </div>
    <div v-if="activeVideo" class="mt-8">
      <h2 class="text-xl font-bold mb-4">
        Now Playing: {{ activeVideo.snippet.title }}
      </h2>
      <iframe
        :src="'https://www.youtube.com/embed/' + activeVideo.id.videoId"
        frameborder="0"
        allowfullscreen
        class="w-full h-64"
      ></iframe>
    </div>
  </section>
</template>

<script setup lang="ts">
  const activeVideo = ref<Video | null>(null);
  const { videos } = useYoutube();

  function setActiveVideo(video: Video) {
    activeVideo.value = video;
  }

  watch(videos, () => {
    if (videos.value && videos.value.length > 0) {
      setActiveVideo(videos.value[0]);
    }
  });
</script>
