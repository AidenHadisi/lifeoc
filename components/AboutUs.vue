<template>
  <section class="py-16 bg-gradient-to-br from-gray-50 to-gray-200">
    <div class="container mx-auto px-5 md:flex-row flex-col items-center">
      <div class="flex flex-col lg:flex-row gap-12 items-center">
        <div class="lg:w-2/5 w-full" data-aos="fade-right" data-aos-duration="800">
          <div class="relative">
            <img class="object-cover object-center rounded-xl shadow-2xl w-full" alt="Life Church of Orange"
              src="/img1.jpg" />
            <div
              class="absolute -bottom-6 -right-6 bg-black w-24 h-24 rounded-xl shadow-lg flex items-center justify-center transform rotate-3">
              <img src="/logo.png" alt="Logo" class="h-16" />
            </div>
          </div>
        </div>

        <div class="lg:w-3/5 w-full flex flex-col md:items-start md:text-left items-center text-center mt-8 lg:mt-0"
          data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
          <h2 class="font-display text-4xl lg:text-5xl mb-6 font-bold text-gray-800 flex items-center">
            <span class="text-yellow-500 mr-3">|</span>
            About Us
          </h2>

          <p class="text-lg text-gray-600 leading-relaxed mb-8">
            We are a Spirit-filled, multicultural church in the City of Orange,
            CA. Disciples of Jesus Christ, in following Him we make disciples, as
            His people, God's family, we live this life together on His mission to
            bring Him glory.
          </p>

          <p class="text-lg text-gray-600 leading-relaxed mb-6">
            Life Church of Orange CA is proud to be part of the C2C family of churches.
          </p>

          <div class="flex flex-wrap gap-4 mt-2">
            <a href="/contact"
              class="px-8 py-3 rounded-lg bg-gradient-to-r from-gray-800 to-gray-700 text-white font-medium transition-all hover:shadow-lg transform hover:-translate-y-1 flex items-center">
              <Icon name="heroicons:map-pin" class="mr-2" /> Visit Us
            </a>
            <a href="#videos"
              class="px-8 py-3 rounded-lg bg-white border-2 border-gray-300 text-gray-800 font-medium transition-all hover:shadow-lg hover:border-yellow-500 transform hover:-translate-y-1 flex items-center">
              <Icon name="heroicons:video-camera" class="mr-2" /> Watch Video
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
