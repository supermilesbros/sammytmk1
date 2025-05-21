<template>
  <div class="login-container">
    <h1 class="login-title">Login to Your Account</h1>
    <form @submit.prevent="handleLogin" class="login-form">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" v-model="email" id="email" required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" v-model="password" id="password" required />
      </div>
      <button type="submit" class="login-button">Login</button>
    </form>
    <p class="signup-prompt">
      Don't have an account? <nuxt-link to="/signup">Sign up</nuxt-link>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    handleLogin() {
      // Logic for handling login will go here
      console.log('Logging in with', this.email, this.password);
    }
  }
};
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.login-title {
  font-size: 2rem;
  margin-bottom: 20px;
}

.login-form {
  display: flex;
  flex-direction: column;
  width: 300px;
}

.form-group {
  margin-bottom: 15px;
}

.login-button {
  background-color: #e50914;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.signup-prompt {
  margin-top: 20px;
}
</style>