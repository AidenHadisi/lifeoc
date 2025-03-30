<script setup lang="ts">
const { sendPrayerRequest } = useSendPrayerRequest();

const formData = reactive<PrayerRequest>({
  name: '',
  email: '',
  prayerRequest: '',
});
const isSent = ref(false);
const isSubmitting = ref(false);
const formError = ref('');

const submitPrayerRequest = async () => {
  try {
    formError.value = '';
    isSubmitting.value = true;
    await sendPrayerRequest(formData);
    formData.name = '';
    formData.email = '';
    formData.prayerRequest = '';
    isSent.value = true;
  } catch (error) {
    formError.value = 'There was an error submitting your request. Please try again.';
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <div class="flex flex-col items-center justify-center h-full w-full">
    <h1 class="text-2xl md:text-3xl font-bold text-center mb-2 text-gray-700">Prayer Request</h1>
    <div v-if="isSent" class="text-center w-full max-w-md px-4 py-8 rounded-lg bg-white bg-opacity-60 shadow-md">
      <Icon class="text-7xl text-green-600 mb-4" name="material-symbols:check-circle" />

      <p class="text-lg font-medium text-gray-800">Thank you for submitting your prayer request!</p>
      <p class="text-gray-600 mt-2">We will be praying for you and your family.</p>

      <!-- Button to submit another request -->
      <button @click="isSent = false"
        class="mt-6 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm font-medium">
        Submit Another Request
      </button>
    </div>
    <div v-else class="w-full max-w-md">
      <p class="text-center text-sm text-gray-600 mb-4">
        Please fill out the form below to submit a prayer request.
      </p>
      <form class="flex flex-col space-y-4 p-6 bg-white bg-opacity-60 rounded-lg shadow-md"
        @submit.prevent="submitPrayerRequest">
        <div v-if="formError" class="bg-red-100 text-red-700 p-3 rounded-md text-sm mb-2">
          {{ formError }}
        </div>

        <div class="flex flex-col space-y-1">
          <label for="name" class="text-sm font-medium text-gray-700">Name</label>
          <input id="name" v-model="formData.name" type="text" required
            class="border border-gray-300 rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            placeholder="Your name" />
        </div>

        <div class="flex flex-col space-y-1">
          <label for="email" class="text-sm font-medium text-gray-700">Email</label>
          <input id="email" v-model="formData.email" type="email" required
            class="border border-gray-300 rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            placeholder="your@email.com" />
        </div>

        <div class="flex flex-col space-y-1">
          <label for="prayerRequest" class="text-sm font-medium text-gray-700">Prayer Request</label>
          <textarea id="prayerRequest" v-model="formData.prayerRequest" required rows="5"
            class="border border-gray-300 rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
            placeholder="Please share your prayer request here..."></textarea>
        </div>

        <button type="submit" :disabled="isSubmitting"
          class="mt-2 flex items-center justify-center bg-yellow-500 rounded-lg py-3 px-6 font-medium transition-colors duration-300">
          <span v-if="isSubmitting">Submitting...</span>
          <span v-else>Submit Prayer Request</span>
        </button>
      </form>
    </div>
  </div>
</template>
