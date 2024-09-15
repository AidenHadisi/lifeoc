<template>
  <nav
    class="text-white px-6 py-4 z-50 top-0 w-full border-b border-white border-opacity-20"
    :class="backgroundColor"
  >
    <div class="flex justify-between items-center">
      <div class="text-2xl tracking-wider">Life Church of Orange</div>
      <div class="hidden lg:block">
        <a
          v-for="item in menu"
          :key="item.title"
          :href="item.link"
          :target="item.newTab ? '_blank' : '_self'"
          class="px-4 py-2 hover:text-orange-300"
        >
          {{ item.title }}
        </a>
        <a
          href="https://lifeoc.churchcenter.com/giving"
          target="_blank"
          class="text-black bg-yellow-500 hover:bg-yellow-400 px-4 py-2 rounded-md"
          >Online Giving</a
        >
      </div>
      <div class="lg:hidden" @click="toggleSidebar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </div>
    </div>

    <transition name="sidebar" mode="out-in">
      <aside
        v-if="sidebarOpen"
        class="bg-gray-900 z-50 text-white fixed top-0 right-0 w-64 h-full overflow-auto lg:relative lg:w-auto"
      >
        <div class="p-6">
          <button class="mb-4 lg:hidden" @click="toggleSidebar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <a
            href="https://lifeoc.churchcenter.com/giving"
            target="_blank"
            class="text-black block bg-yellow-500 hover:bg-yellow-400 px-4 py-2 rounded-md"
            >Online Giving</a
          >
          <a
            v-for="item in menu"
            :key="item.title"
            :href="item.link"
            :target="item.newTab ? '_blank' : '_self'"
            class="block px-4 py-2 mb-2 hover:text-orange-300"
          >
            {{ item.title }}
          </a>
        </div>
      </aside>
    </transition>
  </nav>
</template>
<script setup lang="ts">
  const sidebarOpen = ref(false);
  const route = useRoute();
  const menu = [
    {
      title: 'Home',
      link: '/',
    },
    {
      title: 'Contact',
      link: '/contact',
    },
    {
      title: 'Latest Videos',
      link: '#videos',
    },
    {
      title: 'C2C Study Resources',
      link: 'https://c2cfamily.org/#resources',
      newTab: true,
    },
  ];

  const toggleSidebar = () => {
    sidebarOpen.value = !sidebarOpen.value;
  };

  const { y } = useWindowScroll();
  const backgroundColor = computed(() => {
    return y.value < 60 && route.path === '/'
      ? 'bg-transparent fixed'
      : 'bg-gray-900 sticky';
  });
</script>

<style scoped>
  .sidebar-enter-active,
  .sidebar-leave-active {
    transition: all 1s;
  }
  .sidebar-enter-from,
  .sidebar-leave-to {
    transform: translateX(100%);
  }
  .sidebar-enter-to,
  .sidebar-leave-from {
    transform: translateX(0);
  }
</style>
