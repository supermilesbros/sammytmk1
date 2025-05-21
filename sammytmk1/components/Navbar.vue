<template>
  <nav class="bg-gray-900 p-4">
    <div class="container mx-auto flex justify-between items-center">
      <div class="text-white text-lg font-bold">Netflix Clone</div>
      <ul class="flex space-x-4">
        <li>
          <NuxtLink to="/" class="text-white hover:text-red-500">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/movie" class="text-white hover:text-red-500">Movies</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/login" class="text-white hover:text-red-500">Login</NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
/* Add any specific styles for the Navbar here */
</style>