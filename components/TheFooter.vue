<template>
  <!-- Main footer section -->
  <footer class="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300">
    <!-- Top footer content -->
    <div class="container mx-auto px-6 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        <!-- Logo and about section -->
        <div class="flex flex-col items-center md:items-start space-y-4">
          <img src="/logo.png" alt="Life Church Logo" class="w-40 mb-2" />
          <p class="text-sm text-gray-400 max-w-xs text-center md:text-left">
            Serving the Orange County community with the message of hope and love through Jesus Christ.
          </p>
          <!-- Social media icons -->
          <div class="flex space-x-4 mt-4">
            <a href="https://www.youtube.com/channel/UCoVX240Rcw6ek5Opx2J84QA" target="_blank" rel="noopener noreferrer"
              aria-label="Visit our YouTube Channel"
              class="bg-gray-700 hover:bg-red-600 p-2.5 rounded-full transition-all duration-300 transform hover:scale-110">
              <Icon name="mdi:youtube" class="text-xl" />
            </a>
            <a href="https://www.facebook.com/lifechurchorangeca" target="_blank" rel="noopener noreferrer"
              aria-label="Visit our Facebook Page"
              class="bg-gray-700 hover:bg-blue-600 p-2.5 rounded-full transition-all duration-300 transform hover:scale-110">
              <Icon name="mdi:facebook" class="text-xl" />
            </a>
            <a href="mailto:info@lifeoc.org" aria-label="Send us an email"
              class="bg-gray-700 hover:bg-violet-600 p-2.5 rounded-full transition-all duration-300 transform hover:scale-110">
              <Icon name="mdi:email" class="text-xl" />
            </a>
          </div>
        </div>

        <!-- Contact information -->
        <div class="flex flex-col items-center md:items-start space-y-6">
          <h3 class="text-lg font-semibold text-white border-b-2 border-violet-500 pb-1">Contact Us</h3>
          <div class="flex items-center space-x-3">
            <Icon name="ph:phone-call-duotone" class="text-2xl text-violet-500" />
            <p>(714) 771-2522</p>
          </div>
          <div class="flex items-center space-x-3">
            <Icon name="ph:map-pin-line-duotone" class="text-2xl text-yellow-500" />
            <div>
              <p>3524 E Chapman Ave</p>
              <p>Orange, CA 92869</p>
            </div>
          </div>
          <div class="flex items-center space-x-3">
            <Icon name="ph:envelope-duotone" class="text-2xl text-red-500" />
            <p>info@lifeoc.org</p>
          </div>
        </div>

        <!-- Quick links -->
        <div class="flex flex-col items-center md:items-start space-y-6">
          <h3 class="text-lg font-semibold text-white border-b-2 border-violet-500 pb-1">Quick Links</h3>
          <nav class="flex flex-col space-y-3">
            <NuxtLink to="/" class="hover:text-violet-400 transition-colors duration-200 flex items-center">
              <Icon name="ph:house-duotone" class="mr-2" /> Home
            </NuxtLink>
            <NuxtLink to="/contact" class="hover:text-violet-400 transition-colors duration-200 flex items-center">
              <Icon name="ph:chat-teardrop-dots-duotone" class="mr-2" /> Contact
            </NuxtLink>
            <a href="https://www.youtube.com/channel/UCoVX240Rcw6ek5Opx2J84QA" target="_blank"
              class="hover:text-violet-400 transition-colors duration-200 flex items-center">
              <Icon name="ph:video-camera-duotone" class="mr-2" /> Videos
            </a>
          </nav>
          <div class="mt-4 pt-4 border-t border-gray-700 w-full text-center md:text-left">
            <p class="text-sm text-gray-400">Service Times: Sundays at 10:15 AM</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom copyright bar -->
    <div class="border-t border-gray-700 py-4 bg-gray-900">
      <div class="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <p class="text-gray-400">© {{ new Date().getFullYear() }} Life Church of Orange, California</p>
        <div class="mt-4 md:mt-0 flex items-center space-x-2">
          <a href="https://github.com/AidenHadisi/lifeoc" target="_blank" rel="noopener noreferrer"
            class="text-gray-400 hover:text-white transition-colors duration-200 flex items-center">
            <Icon name="grommet-icons:github" class="text-lg mr-1" /> GitHub
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
