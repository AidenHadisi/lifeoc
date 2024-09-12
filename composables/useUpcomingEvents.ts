export interface Event {
  id: string;
  status: string;
  date: string;
  date_utc: string;
  title: string;
  description: string;
  slug: string;
  image: string;
  all_day: boolean;
  start_date: string;
  end_date: string;
  featured: boolean;
}

interface EventsResponse {
  events: Event[];
}

export function useUpcomingEvents() {
  const config = useRuntimeConfig();
  const url = `${config.public.cmsUrl}/wp-json/tribe/events/v1/events`;
  const { data, error, pending } = useLazyFetch<EventsResponse>(url, {
    server: false,
    params: {
      per_page: 4,
      startAfter: 'now',
    },
  });

  const events = computed(() => data.value?.events ?? []);

  return {
    events,
    error,
    pending,
  };
}
