// src/composables/useYouTube.ts
import { ref } from 'vue'

export interface YouTubeVideo {
  id: string
  title: string
  description: string
  publishedAt: string
  thumbnail: string
}

export function useYouTube() {
  const videos = ref<YouTubeVideo[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const apiKey = import.meta.env.PUBLIC_GOOGLE_API_KEY
  const channelId = import.meta.env.PUBLIC_YOUTUBE_CHANNEL_ID

  async function fetchVideos(maxResults = 12) {
    loading.value = true
    error.value = null

    try {
      const url = new URL('https://www.googleapis.com/youtube/v3/search')
      url.searchParams.set('key', apiKey)
      url.searchParams.set('channelId', channelId)
      url.searchParams.set('part', 'snippet')
      url.searchParams.set('order', 'date')
      url.searchParams.set('type', 'video')
      url.searchParams.set('maxResults', String(maxResults))

      const res = await fetch(url.toString())
      if (!res.ok) throw new Error(`YouTube API error: ${res.status}`)

      const data = await res.json()
      videos.value = data.items.map((item: any): YouTubeVideo => ({
        id: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        publishedAt: item.snippet.publishedAt,
        thumbnail: item.snippet.thumbnails.medium?.url ?? item.snippet.thumbnails.default.url,
      }))
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Failed to load videos'
    } finally {
      loading.value = false
    }
  }

  return { videos, loading, error, fetchVideos }
}
