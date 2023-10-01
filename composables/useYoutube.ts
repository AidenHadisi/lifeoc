export interface Video {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    description: string;
    publishedAt: string;
    thumbnails: {
      default: {
        url: string;
      };
    };
  };
}

export function useYoutube() {
  const config = useRuntimeConfig();
  const base = 'https://www.googleapis.com/youtube/v3/search';

  const { data, error, pending } = useFetch<Video[]>(base, {
    params: {
      channelId: config.public.youtubeChannelId,
      part: 'snippet',
      order: 'date',
      maxResults: 10,
      key: config.public.youtubeApiKey,
    },
  });

  return {
    videos: data,
    error,
    pending,
  };
}
