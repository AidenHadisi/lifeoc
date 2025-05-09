export interface Video {
  contentDetails: {
    upload: {
      videoId: string;
    };
  };
  snippet: {
    title: string;
    type: string;
    description: string;
    publishedAt: string;
    thumbnails: {
      high: {
        url: string;
      };
    };
  };
}

interface YoutubeResponse {
  items: Video[];
}

export function useYoutube() {
  const config = useRuntimeConfig();
  const base = 'https://www.googleapis.com/youtube/v3/activities';

  const { data, error, pending } = useLazyFetch<YoutubeResponse>(base, {
    server: false,
    params: {
      channelId: config.public.youtubeChannelId,
      part: 'snippet,contentDetails',
      maxResults: 20,
      key: config.public.youtubeApiKey,
    },
  });

  const videos = computed(
    () =>
      data.value?.items.filter((item) => item.snippet.type === 'upload') ?? []
  );

  // return at most 6 videos
  const limitedVideos = computed(() => {
    const maxVideos = 6;
    return videos.value.slice(0, maxVideos);
  });

  return {
    videos: limitedVideos,
    error,
    pending,
  };
}
