<script lang="ts" setup>
import { ref } from "vue";

const events = ref([
  { id: 1, name: "Vue.js Conference", date: "2023-11-01" },
  { id: 2, name: "Nuxt.js Meetup", date: "2023-11-15" },
  { id: 3, name: "JavaScript Workshop", date: "2023-12-05" },
]);
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">
      Events Page
    </h1>
    <p class="mb-4">
      Here are some upcoming events:
    </p>

    <ul class="mb-4">
      <li v-for="event in events" :key="event.id">
        {{ event.name }} - {{ event.date }}
      </li>
    </ul>

    <UButton
      color="primary"
      label="Go to Home"
      @click="$router.push('/')"
    />
  </div>
</template>

<style>

</style>
