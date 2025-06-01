<script lang="ts" setup>
import { ref } from "vue";

const username = ref("");
const password = ref("");

function handleLogin() {
  // Handle login logic here
}
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">
      Login Page
    </h1>
    <p class="mb-4">
      Please enter your credentials to log in.
    </p>

    <UInput
      v-model="username"
      label="Username"
      placeholder="Enter your username"
    />
    <UInput
      v-model="password"
      type="password"
      label="Password"
      placeholder="Enter your password"
    />

    <UButton
      color="primary"
      label="Login"
      @click="handleLogin"
    />
    <UButton
      color="secondary"
      label="Register"
      @click="$router.push('/account/register')"
    />
  </div>
</template>

<style>

</style>
