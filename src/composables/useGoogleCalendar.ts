// src/composables/useGoogleCalendar.ts
import { ref } from 'vue'
import { format, parseISO } from 'date-fns'

export interface CalendarEvent {
  id: string
  title: string
  description: string
  location: string
  start: string
  end: string
  formattedDate: string
  formattedTime: string
}

export function useGoogleCalendar() {
  const events = ref<CalendarEvent[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const apiKey = import.meta.env.PUBLIC_GOOGLE_API_KEY
  const calendarId = import.meta.env.PUBLIC_GOOGLE_CALENDAR_ID

  async function fetchEvents(maxResults = 6) {
    loading.value = true
    error.value = null

    try {
      const now = new Date().toISOString()
      const url = new URL(
        `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events`
      )
      url.searchParams.set('key', apiKey)
      url.searchParams.set('timeMin', now)
      url.searchParams.set('maxResults', String(maxResults))
      url.searchParams.set('singleEvents', 'true')
      url.searchParams.set('orderBy', 'startTime')

      const res = await fetch(url.toString())
      if (!res.ok) throw new Error(`Calendar API error: ${res.status}`)

      const data = await res.json()
      events.value = (data.items ?? []).map((item: any): CalendarEvent => {
        const startRaw = item.start.dateTime ?? item.start.date
        const endRaw = item.end?.dateTime ?? item.end?.date ?? startRaw
        const startDate = parseISO(startRaw)

        return {
          id: item.id,
          title: item.summary ?? 'Untitled Event',
          description: item.description ?? '',
          location: item.location ?? '',
          start: startRaw,
          end: endRaw,
          formattedDate: format(startDate, 'MMMM d, yyyy'),
          formattedTime: item.start.dateTime ? format(startDate, 'h:mm a') : 'All day',
        }
      })
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Failed to load events'
    } finally {
      loading.value = false
    }
  }

  return { events, loading, error, fetchEvents }
}
