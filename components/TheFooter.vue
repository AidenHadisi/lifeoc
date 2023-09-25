<template>
  <div
    class="w-full px-8 py-4 bg-gray-900 flex flex-col md:flex-row justify-between items-center text-gray-300"
  >
    <img src="/logo.png" alt="logo" class="w-32 mb-8 md:mb-0" />

    <div class="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
      <div class="text-center">
        <Icon
          class="text-3xl mb-2 text-violet-500"
          name="ph:phone-call-duotone"
        />
        <p>(714) 771-2522</p>
      </div>
      <div class="text-center">
        <Icon
          class="text-3xl mb-2 text-yellow-500"
          name="ph:map-pin-line-duotone"
        />
        <p>3524 E Chapman Ave<br />Orange, CA 92869</p>
      </div>

      <div class="text-center">
        <Icon class="text-3xl mb-2 text-red-500" name="ph:envelope-duotone" />
        <p>info@lifeoc.org</p>
      </div>
    </div>

    <div class="flex flex-col justify-center mt-8 md:mt-0">
      <div class="flex justify-center space-x-4 mt-4 opacity-80">
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/youtube.svg"
            alt="YouTube"
            class="w-12 hover:scale-125 duration-300"
          />
        </a>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/facebook.svg"
            alt="Facebook"
            class="w-12 hover:scale-125 duration-300"
          />
        </a>
      </div>
    </div>
  </div>
  <p
    class="text-center text-sm p-3 text-gray-400 bg-gray-900 border-t border-gray-500"
  >
    © {{ new Date().getFullYear() }} Life Church of Orange, California
  </p>
</template>
