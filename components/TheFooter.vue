<template>
  <!-- Main footer section -->
  <footer class="relative bg-gradient-to-b from-slate-900 to-slate-950 text-gray-300 overflow-hidden">
    <!-- Decorative elements -->
    <div class="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-[150px]"></div>
    <div class="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-500/5 rounded-full blur-[120px]"></div>

    <!-- Top border gradient -->
    <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent">
    </div>

    <!-- Top footer content -->
    <div class="container mx-auto px-6 py-16 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        <!-- Logo and about section -->
        <div class="flex flex-col items-center md:items-start space-y-6">
          <div class="relative group">
            <div
              class="absolute inset-0 bg-yellow-400/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            </div>
            <img src="/logo.png" alt="Life Church Logo" class="relative w-44 drop-shadow-lg" />
          </div>
          <p class="text-sm text-gray-400 max-w-xs text-center md:text-left leading-relaxed">
            Serving the Orange County community with the message of hope and
            love through Jesus Christ.
          </p>
          <!-- Social media icons -->
          <div class="flex gap-3 mt-2">
            <a href="https://www.youtube.com/channel/UCoVX240Rcw6ek5Opx2J84QA" target="_blank" rel="noopener noreferrer"
              aria-label="Visit our YouTube Channel"
              class="group/social relative p-3 rounded-xl bg-white/5 border border-white/10 hover:border-red-500/50 hover:bg-red-500/10 transition-all duration-300">
              <Icon name="mdi:youtube"
                class="text-xl text-white/70 group-hover/social:text-red-400 transition-colors" />
              <div
                class="absolute inset-0 rounded-xl bg-red-500/20 blur-xl opacity-0 group-hover/social:opacity-100 transition-opacity -z-10">
              </div>
            </a>
            <a href="https://www.facebook.com/lifechurchorangeca" target="_blank" rel="noopener noreferrer"
              aria-label="Visit our Facebook Page"
              class="group/social relative p-3 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300">
              <Icon name="mdi:facebook"
                class="text-xl text-white/70 group-hover/social:text-blue-400 transition-colors" />
              <div
                class="absolute inset-0 rounded-xl bg-blue-500/20 blur-xl opacity-0 group-hover/social:opacity-100 transition-opacity -z-10">
              </div>
            </a>
            <a href="mailto:info@lifeoc.org" aria-label="Send us an email"
              class="group/social relative p-3 rounded-xl bg-white/5 border border-white/10 hover:border-yellow-500/50 hover:bg-yellow-500/10 transition-all duration-300">
              <Icon name="mdi:email"
                class="text-xl text-white/70 group-hover/social:text-yellow-400 transition-colors" />
              <div
                class="absolute inset-0 rounded-xl bg-yellow-500/20 blur-xl opacity-0 group-hover/social:opacity-100 transition-opacity -z-10">
              </div>
            </a>
          </div>
        </div>

        <!-- Contact information -->
        <div class="flex flex-col items-center md:items-start space-y-6">
          <h3 class="text-lg font-bold text-white flex items-center gap-2">
            <div class="w-8 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full"></div>
            Contact Us
          </h3>
          <div class="space-y-4">
            <div class="flex items-center gap-4 group">
              <div
                class="p-2.5 rounded-lg bg-white/5 border border-white/10 group-hover:border-yellow-400/30 transition-colors">
                <Icon name="ph:phone-call-duotone" class="text-xl text-yellow-400" />
              </div>
              <p class="text-gray-300">(714) 771-2522</p>
            </div>
            <div class="flex items-center gap-4 group">
              <div
                class="p-2.5 rounded-lg bg-white/5 border border-white/10 group-hover:border-yellow-400/30 transition-colors">
                <Icon name="ph:map-pin-line-duotone" class="text-xl text-yellow-400" />
              </div>
              <div>
                <p class="text-gray-300">840 N Shattuck Pl</p>
                <p class="text-gray-400 text-sm">Orange, CA 92869</p>
              </div>
            </div>
            <div class="flex items-center gap-4 group">
              <div
                class="p-2.5 rounded-lg bg-white/5 border border-white/10 group-hover:border-yellow-400/30 transition-colors">
                <Icon name="ph:mailbox-duotone" class="text-xl text-yellow-400" />
              </div>
              <div>
                <p class="text-gray-300">PO Box 2523</p>
                <p class="text-gray-400 text-sm">Orange CA 92859</p>
              </div>
            </div>
            <div class="flex items-center gap-4 group">
              <div
                class="p-2.5 rounded-lg bg-white/5 border border-white/10 group-hover:border-yellow-400/30 transition-colors">
                <Icon name="ph:envelope-duotone" class="text-xl text-yellow-400" />
              </div>
              <p class="text-gray-300">info@lifeoc.org</p>
            </div>
          </div>
        </div>

        <!-- Quick links -->
        <div class="flex flex-col items-center md:items-start space-y-6">
          <h3 class="text-lg font-bold text-white flex items-center gap-2">
            <div class="w-8 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full"></div>
            Quick Links
          </h3>
          <nav class="flex flex-col space-y-3">
            <NuxtLink to="/" class="group flex items-center gap-3 hover:text-yellow-400 transition-colors duration-200">
              <Icon name="ph:house-duotone" class="text-white/50 group-hover:text-yellow-400 transition-colors" />
              <span>Home</span>
            </NuxtLink>
            <NuxtLink to="/contact"
              class="group flex items-center gap-3 hover:text-yellow-400 transition-colors duration-200">
              <Icon name="ph:chat-teardrop-dots-duotone"
                class="text-white/50 group-hover:text-yellow-400 transition-colors" />
              <span>Contact</span>
            </NuxtLink>
            <a href="https://www.youtube.com/channel/UCoVX240Rcw6ek5Opx2J84QA" target="_blank"
              class="group flex items-center gap-3 hover:text-yellow-400 transition-colors duration-200">
              <Icon name="ph:video-camera-duotone"
                class="text-white/50 group-hover:text-yellow-400 transition-colors" />
              <span>Videos</span>
            </a>
            <a href="https://lifeoc.churchcenter.com/giving" target="_blank"
              class="group flex items-center gap-3 hover:text-yellow-400 transition-colors duration-200">
              <Icon name="ph:heart-duotone" class="text-white/50 group-hover:text-yellow-400 transition-colors" />
              <span>Give Online</span>
            </a>
          </nav>

          <!-- Service times card -->
          <div class="mt-4 p-4 rounded-xl bg-white/5 border border-white/10 w-full">
            <div class="flex items-center gap-3">
              <div class="p-2 rounded-lg bg-gradient-to-br from-yellow-400 to-amber-500">
                <Icon name="heroicons:clock" class="text-lg text-slate-900" />
              </div>
              <div>
                <p class="text-xs text-gray-400 uppercase tracking-wider">
                  Service Times
                </p>
                <p class="text-white font-semibold">Sundays at 1:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom copyright bar -->
    <div class="border-t border-white/5 py-6 bg-slate-950/50">
      <div class="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <p class="text-gray-500">
          © {{ new Date().getFullYear() }} Life Church of Orange, California
        </p>
        <div class="flex items-center gap-4">
          <a href="https://github.com/AidenHadisi/lifeoc" target="_blank" rel="noopener noreferrer"
            class="text-gray-500 hover:text-white transition-colors duration-200 flex items-center gap-2">
            <Icon name="grommet-icons:github" class="text-lg" />
            <span>Open Source</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
