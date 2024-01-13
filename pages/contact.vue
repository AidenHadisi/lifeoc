<template>
  <div
    class="relative bg-cover bg-center min-h-[650px] flex items-center px-3 py-5"
    style="background-image: url('/exterior.webp')"
  >
    <div class="absolute inset-0 bg-[#283252] opacity-70" />
    <div
      class="relative md:flex items-stretch rounded-xl bg-gray-100 bg-opacity-70"
      data-aos="fade-up"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13263.941103081504!2d-117.8158441!3d33.7868784!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcda16d1cca171%3A0x488f94fc622f304a!2sLife%20Church%20of%20Orange%20CA!5e0!3m2!1sen!2sus!4v1696045226879!5m2!1sen!2sus"
        width="500"
        height="550"
        style="border: 0"
        loading="lazy"
        class="max-w-full opacity-80 rounded-l-xl"
      ></iframe>
      <div class="p-8 text-gray-600">
        <PrayerRequest />
      </div>
    </div>
  </div>
</template>
