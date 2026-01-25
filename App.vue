<template>
  <NuxtRouteAnnouncer />
  <NavBar />
  <NuxtPage />
  <TheFooter />
</template>

<style>
/* Smooth scrolling for the entire page */
html {
  scroll-behavior: smooth;
}

/* Global selection color */
::selection {
  background-color: rgba(234, 179, 8, 0.3);
  color: inherit;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #1f2937;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #f59e0b, #d97706);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, #fbbf24, #f59e0b);
}
</style>
