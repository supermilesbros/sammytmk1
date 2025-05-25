<template>
  <div class="relative min-h-screen bg-black text-green-200 font-serif">
    <NavBar />
    <HomeHero />
    <main class="relative z-10 px-4 md:px-12 lg:px-24 py-16">
      <slot />
    </main>
    <footer class="bg-zinc-900 text-center p-6 text-sm text-zinc-400">
      <div>© {{ new Date().getFullYear() }} Sammy Terry. All rights reserved.</div>
    </footer>
  </div>
</template>

<script setup>


</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=IM+Fell+English+SC&display=swap');

body {
  font-family: 'IM Fell English SC', serif;
}
</style>
