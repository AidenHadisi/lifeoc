export type PrayerRequest = {
  email: string;
  name: string;
  prayerRequest: string;
};

export function useSendPrayerRequest() {
  const config = useRuntimeConfig();
  const url = config.public.formUrl;

  const sendPrayerRequest = async (prayerRequest: PrayerRequest) => {
    await $fetch(url, {
      method: 'POST',
      body: prayerRequest,
    });
  };

  return {
    sendPrayerRequest,
  };
}
