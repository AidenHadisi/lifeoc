<script setup lang="ts">
  const { sendPrayerRequest } = useSendPrayerRequest();

  const formData = reactive<PrayerRequest>({
    name: '',
    email: '',
    prayerRequest: '',
  });
  const isSent = ref(false);

  const submitPrayerRequest = async () => {
    await sendPrayerRequest(formData);
    formData.name = '';
    formData.email = '';
    formData.prayerRequest = '';
    isSent.value = true;
  };
</script>

<template>
  <div class="flex flex-col space-y-3 items-center justify-center h-full">
    <h1 class="text-3xl font-semibold text-center">Prayer Request</h1>
    <div v-if="isSent" class="text-center mt-5 font-sm">
      <Icon
        class="text-7xl text-green-700 mb-3"
        name="material-symbols:check-circle"
      />

      <p>Thank you for submitting your prayer request!</p>
      <p>We will be praying for you and your family.</p>
    </div>
    <div v-else class="text-center">
      <p class="text-center text-sm text-gray-500 mb-5">
        Please fill out the form below to submit a prayer request.
      </p>
      <form
        class="flex flex-col space-y-3"
        @submit.prevent="submitPrayerRequest"
      >
        <div class="flex flex-col space-y-1">
          <label for="name" class="text-sm">Name</label>
          <input
            id="name"
            v-model="formData.name"
            type="text"
            class="border border-gray-300 rounded-md p-2 bg-gray-100"
          />
        </div>

        <div class="flex flex-col space-y-1">
          <label for="email" class="text-sm">Email</label>
          <input
            id="email"
            v-model="formData.email"
            type="email"
            class="border border-gray-300 rounded-md p-2 bg-gray-100"
          />
        </div>

        <div class="flex flex-col space-y-1">
          <label for="prayerRequest" class="text-sm">Prayer Request</label>
          <textarea
            id="prayerRequest"
            v-model="formData.prayerRequest"
            required
            rows="6"
            class="border border-gray-300 rounded-md p-2 bg-gray-100"
          ></textarea>
        </div>

        <button
          type="submit"
          class="text-black bg-yellow-500 hover:bg-yellow-400 rounded-md p-2"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>
