<template>
  <div class="relative min-h-screen">
    <!-- Background -->
    <div class="absolute inset-0 bg-[url('/exterior.webp')] bg-cover bg-center bg-fixed"></div>
    <div class="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-slate-900/90"></div>

    <!-- Decorative elements -->
    <div class="absolute top-20 left-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-[100px]"></div>
    <div class="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px]"></div>

    <!-- Content -->
    <div class="relative z-10 container mx-auto px-4 py-20 md:py-28">
      <!-- Header -->
      <div class="text-center mb-12" data-aos="fade-down">
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-4">
          Contact
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">Us</span>
        </h1>
        <p class="text-white/60 max-w-xl mx-auto">
          We'd love to hear from you. Visit us or send us a prayer request.
        </p>
      </div>

      <!-- Main content card -->
      <div class="max-w-6xl mx-auto" data-aos="fade-up">
        <div
          class="flex flex-col lg:flex-row rounded-3xl overflow-hidden shadow-2xl shadow-black/30 border border-white/10 backdrop-blur-sm">
          <!-- Map container -->
          <div class="w-full lg:w-1/2 h-72 lg:h-auto lg:min-h-[600px] order-2 lg:order-1 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13263.941103081504!2d-117.8158441!3d33.7868784!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcda16d1cca171%3A0x488f94fc622f304a!2sLife%20Church%20of%20Orange%20CA!5e0!3m2!1sen!2sus!4v1696045226879!5m2!1sen!2sus"
              style="border: 0" loading="lazy" class="w-full h-full absolute inset-0"
              title="Location of Life Church of Orange CA" allowfullscreen
              referrerpolicy="no-referrer-when-downgrade"></iframe>

            <!-- Map overlay with address -->
            <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-900/90 to-transparent">
              <div class="flex items-center gap-3 text-white">
                <div class="p-2 rounded-lg bg-yellow-500/20">
                  <Icon name="heroicons:map-pin" class="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <p class="font-medium">840 N Shattuck Pl</p>
                  <p class="text-sm text-white/70">Orange, CA 92869</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Prayer request form container -->
          <div class="w-full lg:w-1/2 p-8 md:p-10 bg-gradient-to-br from-slate-50 to-white order-1 lg:order-2">
            <PrayerRequest />
          </div>
        </div>
      </div>

      <!-- Contact info cards -->
      <div class="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6" data-aos="fade-up"
        data-aos-delay="200">
        <!-- Service times -->
        <div
          class="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors duration-300">
          <div class="flex items-center gap-4 mb-4">
            <div class="p-3 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500">
              <Icon name="heroicons:clock" class="w-6 h-6 text-slate-900" />
            </div>
            <h3 class="text-lg font-semibold text-white">Service Times</h3>
          </div>
          <p class="text-white/70">Join us every Sunday at</p>
          <p class="text-2xl font-bold text-white mt-1">1:00 PM</p>
        </div>

        <!-- Phone -->
        <div
          class="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors duration-300">
          <div class="flex items-center gap-4 mb-4">
            <div class="p-3 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500">
              <Icon name="heroicons:phone" class="w-6 h-6 text-slate-900" />
            </div>
            <h3 class="text-lg font-semibold text-white">Call Us</h3>
          </div>
          <p class="text-white/70">Have questions? Call us at</p>
          <a href="tel:+17147712522"
            class="text-xl font-bold text-white mt-1 hover:text-yellow-400 transition-colors">(714) 771-2522</a>
        </div>

        <!-- Email -->
        <div
          class="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors duration-300">
          <div class="flex items-center gap-4 mb-4">
            <div class="p-3 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500">
              <Icon name="heroicons:envelope" class="w-6 h-6 text-slate-900" />
            </div>
            <h3 class="text-lg font-semibold text-white">Email Us</h3>
          </div>
          <p class="text-white/70">Send us a message at</p>
          <a href="mailto:info@lifeoc.org"
            class="text-xl font-bold text-white mt-1 hover:text-yellow-400 transition-colors">info@lifeoc.org</a>
        </div>
      </div>
    </div>
  </div>
</template>
