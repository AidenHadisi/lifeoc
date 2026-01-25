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
    formError.value =
      'There was an error submitting your request. Please try again.';
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <div class="flex flex-col items-center justify-center h-full w-full">
    <!-- Header -->
    <div class="text-center mb-6">

      <h1 class="text-2xl md:text-3xl font-bold text-slate-800">
        Prayer Request
      </h1>
    </div>

    <!-- Success state -->
    <div v-if="isSent"
      class="text-center w-full max-w-md px-6 py-10 rounded-2xl bg-white shadow-xl shadow-slate-200/50 border border-slate-100">
      <div
        class="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mx-auto mb-6">
        <Icon class="text-4xl text-white" name="heroicons:check" />
      </div>

      <h2 class="text-xl font-bold text-slate-800 mb-2">Thank You!</h2>
      <p class="text-slate-600">Your prayer request has been submitted.</p>
      <p class="text-slate-500 text-sm mt-2">
        We will be praying for you and your family.
      </p>

      <button @click="isSent = false"
        class="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-colors duration-300 text-sm font-medium">
        <Icon name="heroicons:plus" class="w-4 h-4" />
        Submit Another Request
      </button>
    </div>

    <!-- Form -->
    <div v-else class="w-full max-w-md">
      <p class="text-center text-sm text-slate-500 mb-6">
        Share your prayer request with us. We would love to pray for you.
      </p>
      <form
        class="flex flex-col space-y-5 p-6 bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100"
        @submit.prevent="submitPrayerRequest">
        <!-- Error message -->
        <div v-if="formError"
          class="flex items-center gap-3 p-4 bg-red-50 border border-red-100 text-red-700 rounded-xl text-sm">
          <Icon name="heroicons:exclamation-circle" class="w-5 h-5 flex-shrink-0" />
          {{ formError }}
        </div>

        <!-- Name field -->
        <div class="space-y-2">
          <label for="name" class="text-sm font-medium text-slate-700 flex items-center gap-2">
            <Icon name="heroicons:user" class="w-4 h-4 text-slate-400" />
            Name
          </label>
          <input id="name" v-model="formData.name" type="text" required
            class="w-full border border-slate-200 rounded-xl px-4 py-3 bg-slate-50/50 focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500 outline-none transition-all placeholder:text-slate-400"
            placeholder="Your name" />
        </div>

        <!-- Email field -->
        <div class="space-y-2">
          <label for="email" class="text-sm font-medium text-slate-700 flex items-center gap-2">
            <Icon name="heroicons:envelope" class="w-4 h-4 text-slate-400" />
            Email
          </label>
          <input id="email" v-model="formData.email" type="email" required
            class="w-full border border-slate-200 rounded-xl px-4 py-3 bg-slate-50/50 focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500 outline-none transition-all placeholder:text-slate-400"
            placeholder="your@email.com" />
        </div>

        <!-- Prayer request field -->
        <div class="space-y-2">
          <label for="prayerRequest" class="text-sm font-medium text-slate-700 flex items-center gap-2">
            <Icon name="heroicons:chat-bubble-bottom-center-text" class="w-4 h-4 text-slate-400" />
            Prayer Request
          </label>
          <textarea id="prayerRequest" v-model="formData.prayerRequest" required rows="5"
            class="w-full border border-slate-200 rounded-xl px-4 py-3 bg-slate-50/50 focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500 outline-none transition-all resize-none placeholder:text-slate-400"
            placeholder="Please share your prayer request here..."></textarea>
        </div>

        <!-- Submit button -->
        <button type="submit" :disabled="isSubmitting"
          class="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-slate-900 font-semibold rounded-xl py-3.5 px-6 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/30">
          <span v-if="isSubmitting" class="flex items-center gap-2">
            <Icon name="heroicons:arrow-path" class="w-5 h-5 animate-spin" />
            Submitting...
          </span>
          <span v-else class="flex items-center gap-2">
            <Icon name="heroicons:paper-airplane" class="w-5 h-5" />
            Submit Prayer Request
          </span>
        </button>
      </form>
    </div>
  </div>
</template>
