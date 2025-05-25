<template>
  <header class="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-sm px-6 py-4 flex justify-between items-center">
    <NuxtLink to="/" class="flex items-center gap-2 text-2xl font-bold text-green-200">
      <img src="/public/sammy-terry-raster-logo.png" alt="Sammy Terry Logo" class="h-10" />
      <span>Sammy Terry</span>
    </NuxtLink>
    <nav class="hidden md:flex gap-6 text-lg text-green-200">
      <NuxtLink to="/" class="hover:text-red-500">About</NuxtLink>
      <NuxtLink to="/" class="hover:text-red-500">Appearances</NuxtLink>
      <NuxtLink to="/" class="hover:text-red-500">Videos</NuxtLink>
      <NuxtLink to="/" class="hover:text-red-500">Store</NuxtLink>
      <NuxtLink to="/" class="hover:text-red-500">Contact</NuxtLink>
    </nav>
  </header>
</template>

<script setup>
// No script logic needed for now
</script>

<style scoped>
/* Additional styles if needed */
</style>
