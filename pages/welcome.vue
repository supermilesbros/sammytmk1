<script setup lang="ts">
import { UButton } from "#components";

definePageMeta({
  layout: "welcome",
});
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <h1 class="text-3xl text-primary font-bold">
      WELCOME TO THE NIGHTMARE THEATER
    </h1>
    <p class="text-lg mt-4">
      Join us for a night of horror and fun!
    </p>
    <UButton
      class="mt-6"
      color="secondary"
      variant="soft"
      size="xl"
      @click="$router.push('/')"
    >
      Get Started
    </UButton>
  </div>
</template>

<style scoped>

</style>
