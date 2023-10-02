export interface Video {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
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
  const base = 'https://www.googleapis.com/youtube/v3/search';

  const { data, error, pending } = useLazyFetch<YoutubeResponse>(base, {
    server: false,
    params: {
      channelId: config.public.youtubeChannelId,
      part: 'snippet',
      order: 'date',
      maxResults: 10,
      key: config.public.youtubeApiKey,
    },
  });

  const videos = computed(() => data.value?.items ?? []);

  return {
    videos,
    error,
    pending,
  };
}
