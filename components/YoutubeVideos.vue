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
  import axios from 'axios';

  interface Video {
    id: {
      videoId: string;
    };
    snippet: {
      title: string;
      thumbnails: {
        default: {
          url: string;
        };
      };
    };
  }

  const videos = ref<Video[]>([]);
  const activeVideo = ref<Video | null>(null);

  const fetchVideos = async () => {
    const res = await axios.get(
      'https://www.googleapis.com/youtube/v3/search',
      {
        params: {
          channelId: 'UCoVX240Rcw6ek5Opx2J84QA',
          part: 'snippet',
          order: 'date',
          maxResults: 10,
          key: '',
        },
      }
    );
    videos.value = res.data.items;
    activeVideo.value = res.data.items[0];
  };

  onMounted(fetchVideos);

  const setActiveVideo = (video: Video) => {
    activeVideo.value = video;
  };
</script>
