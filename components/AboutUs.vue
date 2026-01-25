<template>
  <section class="relative py-24 bg-gradient-to-b from-slate-50 via-white to-slate-100 overflow-hidden">
    <!-- Decorative background elements -->
    <div
      class="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-400/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2">
    </div>
    <div
      class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2">
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="flex flex-col lg:flex-row gap-16 items-center">
        <!-- Image section with modern design -->
        <div class="lg:w-2/5 w-full" data-aos="fade-right" data-aos-duration="800">
          <div class="relative group">
            <!-- Main image container -->
            <div class="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                class="object-cover object-center w-full h-[400px] lg:h-[500px] group-hover:scale-105 transition-transform duration-700"
                alt="Life Church of Orange" src="/img1.jpg" />
              <!-- Gradient overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>

            <!-- Floating badge -->
            <div class="absolute -bottom-6 -right-6 lg:-right-8">
              <div class="relative">
                <div class="absolute inset-0 bg-yellow-400 rounded-2xl blur-lg opacity-50"></div>
                <div
                  class="relative bg-gradient-to-br from-slate-900 to-slate-800 w-28 h-28 rounded-2xl shadow-xl flex items-center justify-center transform rotate-6 group-hover:rotate-0 transition-transform duration-500">
                  <img src="/logo.png" alt="Logo" class="h-16 drop-shadow-lg" />
                </div>
              </div>
            </div>

            <!-- Decorative frame -->
            <div class="absolute -top-4 -left-4 w-24 h-24 border-l-4 border-t-4 border-yellow-400 rounded-tl-2xl"></div>
            <div class="absolute -bottom-4 -right-4 w-24 h-24 border-r-4 border-b-4 border-slate-300 rounded-br-2xl">
            </div>
          </div>
        </div>

        <!-- Content section -->
        <div class="lg:w-3/5 w-full flex flex-col md:items-start md:text-left items-center text-center"
          data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
          <h2 class="font-display text-4xl lg:text-6xl mb-8 font-bold text-slate-800">
            About
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-600">Us</span>
          </h2>

          <p class="text-lg text-slate-600 leading-relaxed mb-6">
            We are a Spirit-filled, multicultural church in the City of Orange,
            CA. Disciples of Jesus Christ, in following Him we make disciples,
            as His people, God's family, we live this life together on His
            mission to bring Him glory.
          </p>

          <p class="text-slate-600 mb-8">
            Life Church of Orange CA is proud to be part of the
            <span class="font-semibold text-slate-700">C2C family of churches</span>.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-wrap gap-4">
            <a href="/contact"
              class="group px-8 py-4 rounded-xl bg-gradient-to-r from-slate-800 to-slate-900 text-white font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/20 transform hover:-translate-y-1 flex items-center gap-2">
              <Icon name="heroicons:map-pin" class="w-5 h-5" />
              Visit Us
              <Icon name="heroicons:arrow-right" class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#videos"
              class="group px-8 py-4 rounded-xl bg-white border-2 border-slate-200 text-slate-800 font-semibold transition-all duration-300 hover:shadow-lg hover:border-yellow-400 transform hover:-translate-y-1 flex items-center gap-2">
              <Icon name="heroicons:play-circle" class="w-5 h-5 text-yellow-500" />
              Watch Videos
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
