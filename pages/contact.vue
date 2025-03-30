<template>
  <div class="relative bg-cover bg-center min-h-screen flex items-center justify-center px-4 py-12 md:py-16"
    style="background-image: url('/exterior.webp')">
    <div class="absolute inset-0 bg-[#283252] opacity-70" />
    <div class="relative w-full max-w-6xl mx-auto flex flex-col md:flex-row rounded-xl overflow-hidden shadow-xl"
      data-aos="fade-up">
      <!-- Map container with responsive design -->
      <div class="w-full md:w-1/2 h-72 md:h-auto order-2 md:order-1">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13263.941103081504!2d-117.8158441!3d33.7868784!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcda16d1cca171%3A0x488f94fc622f304a!2sLife%20Church%20of%20Orange%20CA!5e0!3m2!1sen!2sus!4v1696045226879!5m2!1sen!2sus"
          style="border: 0" loading="lazy" class="w-full h-full" title="Location of Life Church of Orange CA"
          allowfullscreen referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <!-- Prayer request form container -->
      <div class="w-full md:w-1/2 p-6 md:p-8 bg-gray-100 bg-opacity-90 order-1 md:order-2">

        <PrayerRequest />
      </div>
    </div>
  </div>
</template>
