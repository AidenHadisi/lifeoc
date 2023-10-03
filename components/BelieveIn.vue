Diff Copy Insert New
<template>
  <section
    class="md:grid grid-cols-3 text-gray-200 border-t-2 border-y border-gray-500"
    data-aos="fade-up"
  >
    <div
      v-for="believeIn in believeIns"
      :key="believeIn.title"
      :style="{ backgroundImage: `url('${believeIn.image}')` }"
      class="group relative bg-cover bg-center h-80 flex flex-col items-center justify-center text-center p-4"
    >
      <div class="absolute inset-0 bg-[#283252] opacity-60" />

      <h2
        class="relative tracking-wider text-3xl font-display group-hover:hidden"
      >
        {{ believeIn.title }}
      </h2>

      <div class="absolute inset-0 flex items-center justify-center p-4">
        <p
          class="opacity-0 group-hover:opacity-100 text-sm transition-opacity duration-700"
        >
          {{ believeIn.description }}
        </p>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
  interface BelieveIn {
    title: string;
    description: string;
    image: string;
  }

  const believeIns: Array<BelieveIn> = [
    {
      title: 'The Trinity',
      image: '/trinity.webp',
      description:
        'We believe there is one God, eternally existing in three persons: God the Father, God the Son, God the Holy Spirit. (Deuteronomy 6:4; Matthew 29:19; Mark 12:29; John 5:17-30)',
    },
    {
      title: 'Jesus Christ',
      image: '/cross.webp',
      description:
        'We believe in the deity of our Lord Jesus Christ. In His virgin birth, in His sinless life, in His miracles and in His vicarious and atoning death. We believe in His bodily resurrection, in His ascension to the right hand of the Father, and His personal future return to the earth in power and glory to rule over the nations. (Isaiah 7:14; Hebrews 7:26; Acts 2:22; 1 Corinthians 15:3; Acts 1:9-11)',
    },
    {
      title: 'Scripture',
      image: '/bible.webp',
      description:
        'We believe the Bible, in its original text, is the inspired, infallible and authoritative word of God, inspired by God and given by God. The Scriptures are totally sufficient and must not be added to, superseded, or changed by later tradition, extra biblical revelation or worldly wisdom. (2 Timothy 3:15-16)',
    },
    {
      title: 'Salvation',
      image: '/church.webp',
      description:
        "We believe man was created good and upright, but fell from that place of perfection into a condition of spiritual depravity and in the absolute necessity of regeneration by the Holy Spirit for salvation. This is because of the exceeding sinfulness of the human nature, and that all are justified on the single ground of faith in the shed blood of Jesus Christ. It is only by God's grace through faith alone that we are saved and at the time of salvation we are immediately justified and sanctified by faith. (John 3:16-19; John 5:24; Romans 3:23; Romans 5:8-9; Romans 5:12-19; Ephesians 2:8-10; Titus 3:5)",
    },
    {
      title: 'Communion and Water Baptism',
      image: '/water.webp',
      description:
        "We believe the ordinances of the church are the communion of the Lord's Supper and baptism in water by immersion in the name of the Father, the Son and the Holy Spirit. (Matthew 28:19; Romans 6:4; 1 Corinthians 11:26; 2 Peter 1:4)",
    },
    {
      title: 'Eschatology',
      image: '/leaves.webp',
      description:
        'We believe in the second coming of Christ with His saints to rule and reign on the earth and in the resurrection of both the saved and the lost; those who are saved unto the resurrection of life and those who are not unto the resurrection of damnation. (Zechariah 14:5; Matthew 24:27; John 5:28-29; Revelation 19:20, 20:11-15, 21:8)',
    },
  ];
</script>
