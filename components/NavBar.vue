<template>
  <nav class="text-white px-6 py-3 z-50 top-0 w-full transition-all duration-500 ease-out" :class="navClasses">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo section -->
      <NuxtLink to="/" class="flex items-center group">
        <div class="relative">
          <div
            class="absolute inset-0 bg-yellow-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          </div>
          <img src="/logo.png" alt="Life Church Logo" class="relative h-11 mr-3 drop-shadow-lg" />
        </div>
        <div class="text-xl font-bold tracking-wide">
          <span class="hidden sm:inline">Life Church of Orange</span>
          <span class="sm:hidden">Life Church</span>
        </div>
      </NuxtLink>

      <!-- Desktop navigation -->
      <div class="hidden lg:flex items-center gap-1">
        <a v-for="item in menu" :key="item.title" :href="item.link" :target="item.newTab ? '_blank' : '_self'"
          class="relative px-4 py-2.5 rounded-xl transition-all duration-300 hover:bg-white/10 group">
          <span class="flex items-center gap-2 text-sm font-medium">
            <Icon v-if="item.icon" :name="item.icon"
              class="h-4 w-4 text-white/70 group-hover:text-yellow-400 transition-colors" />
            <span class="group-hover:text-yellow-300 transition-colors">{{
              item.title
              }}</span>
          </span>
          <span
            class="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-yellow-400 rounded-full group-hover:w-8 transition-all duration-300"></span>
        </a>
        <a href="https://lifeoc.churchcenter.com/giving" target="_blank"
          class="ml-3 group relative overflow-hidden text-slate-900 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/30">
          <Icon name="heroicons:heart" class="h-4 w-4" />
          <span>Online Giving</span>
          <div
            class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700">
          </div>
        </a>
      </div>

      <!-- Mobile menu button -->
      <button class="lg:hidden p-2 rounded-xl hover:bg-white/10 transition-colors focus:outline-none"
        @click="toggleSidebar" aria-label="Toggle menu">
        <div class="w-6 flex flex-col gap-1.5">
          <span class="w-full h-0.5 bg-white rounded-full transition-all duration-300 origin-center"
            :class="{ 'rotate-45 translate-y-2': sidebarOpen }"></span>
          <span class="w-full h-0.5 bg-white rounded-full transition-all duration-300"
            :class="{ 'opacity-0 scale-0': sidebarOpen }"></span>
          <span class="w-full h-0.5 bg-white rounded-full transition-all duration-300 origin-center"
            :class="{ '-rotate-45 -translate-y-2': sidebarOpen }"></span>
        </div>
      </button>
    </div>

    <!-- Mobile backdrop -->
    <Transition name="fade">
      <div v-if="sidebarOpen" class="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden" @click="toggleSidebar">
      </div>
    </Transition>

    <!-- Mobile sidebar -->
    <Transition name="slide">
      <div v-if="sidebarOpen"
        class="fixed top-0 right-0 w-80 h-full z-50 lg:hidden bg-gradient-to-b from-slate-900 to-slate-950 shadow-2xl">
        <div class="p-6 flex flex-col h-full">
          <!-- Sidebar header -->
          <div class="flex justify-between items-center mb-8 pb-6 border-b border-white/10">
            <div class="flex items-center gap-3">
              <img src="/logo.png" alt="Logo" class="h-10" />
              <span class="text-lg font-bold">Menu</span>
            </div>
            <button @click="toggleSidebar"
              class="p-2 rounded-xl hover:bg-white/10 transition-colors focus:outline-none">
              <Icon name="heroicons:x-mark" class="h-6 w-6" />
            </button>
          </div>

          <!-- Navigation links -->
          <nav class="flex flex-col gap-2">
            <a v-for="item in menu" :key="item.title" :href="item.link" :target="item.newTab ? '_blank' : '_self'"
              class="flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 hover:bg-white/5 hover:pl-6 group"
              @click="sidebarOpen = false">
              <div class="p-2 rounded-lg bg-white/5 group-hover:bg-yellow-500/10 transition-colors">
                <Icon v-if="item.icon" :name="item.icon"
                  class="h-5 w-5 text-white/70 group-hover:text-yellow-400 transition-colors" />
              </div>
              <span class="font-medium group-hover:text-yellow-300 transition-colors">{{ item.title }}</span>
            </a>
          </nav>

          <!-- Give button -->
          <div class="mt-auto pt-6 border-t border-white/10">
            <a href="https://lifeoc.churchcenter.com/giving" target="_blank"
              class="w-full text-center text-slate-900 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 px-4 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-yellow-500/20">
              <Icon name="heroicons:heart" class="h-5 w-5" />
              Online Giving
            </a>
          </div>
        </div>
      </div>
    </Transition>
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
    title: 'Videos',
    link: '#videos',
    icon: 'heroicons:play-circle',
  },
  {
    title: 'Resources',
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
const isScrolled = computed(() => y.value > 60);
const isHomePage = computed(() => route.path === '/');

const navClasses = computed(() => {
  if (!isScrolled.value && isHomePage.value) {
    return 'bg-transparent fixed';
  }
  return 'bg-gradient-to-r from-slate-900/95 to-slate-800/95 backdrop-blur-md shadow-lg shadow-black/10 sticky border-b border-white/5';
});

// Clean up on component unmount
onUnmounted(() => {
  document.body.style.overflow = '';
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
