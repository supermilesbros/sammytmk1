<template>
  <div class="banner" :style="{ backgroundImage: `url(${backgroundImage})` }">
    <div class="banner-content">
      <h1 class="banner-title">{{ title }}</h1>
      <p class="banner-description">{{ description }}</p>
      <button class="banner-button" @click="handleClick">{{ buttonText }}</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    backgroundImage: {
      type: String,
      required: true
    },
    buttonText: {
      type: String,
      default: 'Watch Now'
    }
  },
  methods: {
    handleClick() {
      // Logic for handling button click, e.g., redirecting to movie details
    }
  }
}
</script>

<style scoped>
.banner {
  height: 400px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
}

.banner-content {
  text-align: center;
}

.banner-title {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.banner-description {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.banner-button {
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #e50914;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.banner-button:hover {
  background-color: #f40612;
}
</style>