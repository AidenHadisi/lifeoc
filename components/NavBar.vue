<template>
  <nav class="text-white px-6 py-4 z-50 top-0 w-full transition-all duration-300 ease-in-out" :class="backgroundColor">
    <div class="container mx-auto flex justify-between items-center">
      <div class="flex items-center">
        <img src="/logo.png" alt="Life Church Logo" class="h-10 mr-3" />
        <div class="text-2xl font-bold tracking-wider">
          Life Church of Orange
        </div>
      </div>

      <div class="hidden lg:flex items-center space-x-2">
        <a v-for="item in menu" :key="item.title" :href="item.link" :target="item.newTab ? '_blank' : '_self'"
          class="px-4 py-2 rounded-md transition-all duration-200 hover:bg-white hover:bg-opacity-10 hover:text-yellow-300">
          <span class="flex items-center">
            <Icon v-if="item.icon" :name="item.icon" class="mr-1 h-4 w-4" />
            {{ item.title }}
          </span>
        </a>
        <a href="https://lifeoc.churchcenter.com/giving" target="_blank"
          class="ml-2 text-black bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 px-5 py-2 rounded-md font-medium transition-all duration-200 flex items-center">
          <Icon name="heroicons:gift" class="mr-1" /> Online Giving
        </a>
      </div>

      <button class="lg:hidden focus:outline-none" @click="toggleSidebar">
        <div class="w-6 flex flex-col space-y-1.5">
          <div class="w-full h-0.5 bg-white rounded-full" :class="{ 'transform rotate-45 translate-y-2': sidebarOpen }">
          </div>
          <div class="w-full h-0.5 bg-white rounded-full" :class="{ 'opacity-0': sidebarOpen }"></div>
          <div class="w-full h-0.5 bg-white rounded-full"
            :class="{ 'transform -rotate-45 -translate-y-2': sidebarOpen }"></div>
        </div>
      </button>
    </div>

    <div class="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300"
      :class="sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'" @click="toggleSidebar"></div>

    <div
      class="fixed top-0 right-0 w-72 h-full bg-gray-900 shadow-2xl z-50 lg:hidden transform transition-transform duration-300 ease-in-out"
      :class="sidebarOpen ? 'translate-x-0' : 'translate-x-full'">
      <div class="p-6 flex flex-col h-full">
        <div class="flex justify-between items-center mb-8">
          <div class="text-xl font-bold">Menu</div>
          <button @click="toggleSidebar" class="focus:outline-none text-white">
            <Icon name="heroicons:x-mark" class="h-6 w-6" />
          </button>
        </div>

        <div class="flex flex-col space-y-4">
          <a v-for="item in menu" :key="item.title" :href="item.link" :target="item.newTab ? '_blank' : '_self'"
            class="px-4 py-3 rounded-md transition-all duration-200 hover:bg-white hover:bg-opacity-10 hover:text-yellow-300"
            @click="sidebarOpen = false">
            <span class="flex items-center">
              <Icon v-if="item.icon" :name="item.icon" class="mr-2 h-5 w-5" />
              {{ item.title }}
            </span>
          </a>
        </div>

        <div class="mt-auto pt-6 border-t border-gray-700">
          <a href="https://lifeoc.churchcenter.com/giving" target="_blank"
            class="w-full text-center text-black bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 px-4 py-3 rounded-md font-medium transition-all duration-200 flex items-center justify-center">
            <Icon name="heroicons:gift" class="mr-2" /> Online Giving
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const sidebarOpen = ref(false);
const route = useRoute();
const menu = [
  {
    title: 'Home',
    link: '/',
    icon: 'heroicons:home',
  },
  {
    title: 'Contact',
    link: '/contact',
    icon: 'heroicons:envelope',
  },
  {
    title: 'Latest Videos',
    link: '#videos',
    icon: 'heroicons:video-camera',
  },
  {
    title: 'C2C Study Resources',
    link: 'https://c2cfamily.org/#resources',
    newTab: true,
    icon: 'heroicons:book-open',
  },
];

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value;

  // Prevent scrolling when sidebar is open
  if (sidebarOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};

// Close sidebar when route changes
watch(
  () => route.path,
  () => {
    sidebarOpen.value = false;
    document.body.style.overflow = '';
  }
);

const { y } = useWindowScroll();
const backgroundColor = computed(() => {
  if (y.value < 60 && route.path === '/') {
    return 'bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-sm fixed';
  } else {
    return 'bg-gradient-to-r from-gray-900 to-gray-800 shadow-md sticky';
  }
});

// Clean up on component unmount
onUnmounted(() => {
  document.body.style.overflow = '';
});
</script>

<style scoped>
/* No need for the old sidebar transitions */
</style>
