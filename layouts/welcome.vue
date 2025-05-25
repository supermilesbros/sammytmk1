<template>
  <div class="min-h-screen bg-black text-green-200 font-serif">
    <!-- Header -->
    <header class="bg-gradient-to-b from-black to-zinc-900 p-4 shadow-lg flex items-center justify-between">
      <NuxtLink to="/" class="flex items-center gap-2 text-2xl font-bold tracking-wider">
        <img src="/public/sammy-terry-raster-logo.png" alt="Sammy Terry Logo" class="h-10 w-auto" />
        <span>Sammy Terry</span>
      </NuxtLink>
      <nav class="hidden md:flex gap-6 text-lg">
        <NuxtLink to="/about" class="hover:text-red-500 transition">About</NuxtLink>
        <NuxtLink to="/appearances" class="hover:text-red-500 transition">Appearances</NuxtLink>
        <NuxtLink to="/videos" class="hover:text-red-500 transition">Videos</NuxtLink>
        <NuxtLink to="/store" class="hover:text-red-500 transition">Store</NuxtLink>
        <NuxtLink to="/contact" class="hover:text-red-500 transition">Contact</NuxtLink>
      </nav>
    </header>

    <!-- Page Content -->
    <main class="pt-8 px-4 md:px-12 lg:px-24">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="mt-16 bg-zinc-900 text-center p-6 text-sm text-zinc-400">
      <div class="mb-2">© {{ new Date().getFullYear() }} Sammy Terry. All rights reserved.</div>
      <div>
        Follow us:
        <a href="https://facebook.com/sammyterry" target="_blank" class="mx-2 hover:text-green-500">Facebook</a> |
        <a href="https://youtube.com/sammyterry" target="_blank" class="mx-2 hover:text-green-500">YouTube</a>
      </div>
    </footer>
  </div>
</template>

<script setup>
// No script logic needed yet
</script>

<style scoped>
/* Add vintage horror-inspired font */
@import url('https://fonts.googleapis.com/css2?family=IM+Fell+English+SC&display=swap');

body {
  font-family: 'IM Fell English SC', serif;
}
</style>