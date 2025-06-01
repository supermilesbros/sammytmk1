<script setup lang="ts">

</script>

<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">
      Store Page
    </h1>
    <p class="mb-4">
      Store page.
    </p>

    <UButton
      color="primary"
      label="Edit Profile"
      @click="$router.push('/account/edit')"
    />
    <UButton
      color="secondary"
      label="Change Password"
      @click="$router.push('/account/change-password')"
    />
    <UButton
      color="primary"
      label="Delete Account"
      @click="$router.push('/account/delete')"
    />
  </div>
</template>

<style scoped>

</style>
