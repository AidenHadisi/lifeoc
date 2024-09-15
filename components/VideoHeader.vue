<template>
  <div class="relative flex items-center justify-center h-screen">
    <video
      ref="videoRef"
      class="absolute w-full h-full object-cover"
      autoplay
      loop
      muted
    >
      <source src="/video.mp4" type="video/mp4" />
    </video>
    <div class="absolute w-full h-full bg-[#283252] opacity-60"></div>
    <div
      class="z-10 text-white flex flex-col items-center justify-center font-display w-full gap-2"
    >
      <img
        src="/logo.png"
        class="md:w-[30%] w-[80%] z-20 opacity-70"
        alt="Life Church of Orange"
      />

      <h2 class="text-white text-3xl md:text-6xl font-bold mb-4">
        Join us Sundays at
      </h2>
      <p class="text-4xl font-extrabold md:text-5xl tracking-widest text-brown">
        10:15 AM
      </p>
      <div class="flex justify-center space-x-4 mt-4 opacity-80">
        <a
          href="https://www.youtube.com/channel/UCoVX240Rcw6ek5Opx2J84QA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/youtube.svg"
            alt="YouTube"
            class="w-16 hover:scale-125 duration-300"
          />
        </a>
        <a
          href="https://www.facebook.com/lifechurchorangeca"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/facebook.svg"
            alt="Facebook"
            class="w-16 hover:scale-125 duration-300"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const videoRef = ref<HTMLVideoElement | null>(null);

  onMounted(() => {
    if (videoRef.value) {
      videoRef.value.playbackRate = 0.6;
    }
  });
</script>
