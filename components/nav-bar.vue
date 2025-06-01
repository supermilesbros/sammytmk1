<script setup>
// No script logic needed for now
</script>

<template>
  <header class="fixed top-0 left-0 w-full z-50  px-6 py-4 flex justify-between items-center">
    <NuxtLink to="/" class="flex items-center gap-2 text-2xl font-bold text-green-200">
      <img
        src="/public/sammy-terry-raster-logo.png"
        alt="Sammy Terry Logo"
        class="h-20"
      >
    </NuxtLink>
    <nav class="hidden md:flex gap-6 text-xl text-yellow-300">
      <NuxtLink to="/browse" class="hover:text-red-500">
        Nightmare Theater
      </NuxtLink>
      <NuxtLink to="/events" class="hover:text-red-500">
        Events
      </NuxtLink>
      <NuxtLink to="/vintage" class="hover:text-red-500">
        Vintage
      </NuxtLink>
      <NuxtLink to="/about" class="hover:text-red-500">
        About
      </NuxtLink>
      <NuxtLink to="/store" class="hover:text-red-500">
        Store
      </NuxtLink>
    </nav>
    <div>
      <UButton color="secondary" variant="soft">
        Login
      </UButton>
    </div>
  </header>
</template>

<style scoped>
/* Additional styles if needed */
</style>
