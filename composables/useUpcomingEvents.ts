export interface Event {
  id: string;
  status: string;
  summary: string;
  description?: string;
  location?: string;
  start: {
    dateTime?: string;
    date?: string;
    timeZone?: string;
  };
  end: {
    dateTime?: string;
    date?: string;
    timeZone?: string;
  };
  htmlLink?: string;
}

interface GoogleCalendarResponse {
  items: Event[];
}

export function useUpcomingEvents() {
  const config = useRuntimeConfig();
  const baseUrl = 'https://www.googleapis.com/calendar/v3/calendars';
  const calendarId = encodeURIComponent(
    config.public.googleCalendarId as string
  );
  const url = `${baseUrl}/${calendarId}/events`;

  // Get current time in ISO format for timeMin
  const now = new Date().toISOString();
  const sevenDaysFromNow = new Date(
    Date.now() + 7 * 24 * 60 * 60 * 1000
  ).toISOString();

  const { data, error, pending } = useLazyFetch<GoogleCalendarResponse>(url, {
    server: false,
    params: {
      key: config.public.googleApiKey,
      timeMin: now,
      timeMax: sevenDaysFromNow,
      maxResults: 3,
      orderBy: 'startTime',
      singleEvents: true, // Expand recurring events
    },
  });

  const events = computed(() => {
    const now = new Date();
    return (
      data.value?.items.filter((event) => {
        const startDate = new Date(
          event.start.dateTime || event.start.date || ''
        );
        return startDate > now;
      }) ?? []
    );
  });

  return {
    events,
    error,
    pending,
  };
}
