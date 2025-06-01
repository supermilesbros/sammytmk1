<script setup lang="ts">

</script>

<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">
      Profile Page
    </h1>
    <p class="mb-4">
      This is the account page where users can manage their account settings.
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
      color="secondary"
      label="Delete Account"
      @click="$router.push('/account/delete')"
    />
  </div>
</template>

<style scoped>

</style>
