<template>
  <UContainer>
    <div class="hero">
      <h1 class="hero-title">My List</h1>
      <p class="hero-subtitle">Your saved movies and TV shows will appear here.</p>
    </div>

    <div v-if="myList.length === 0" class="empty-list">
      <UIcon name="i-heroicons-bookmark" class="w-16 h-16 text-gray-500 mx-auto mb-4" />
      <p class="text-gray-400 text-center">You haven't added anything to your list yet.</p>
    </div>
    <div v-else class="list-row">
      <UCard v-for="item in myList" :key="item.id" class="list-card">
        <img :src="item.img" :alt="item.title" class="list-img" />
        <div class="list-title">{{ item.title }}</div>
      </UCard>
    </div>
  </UContainer>
</template>

<script setup>
const myList = []
</script>

<style scoped>
.hero {
  background: linear-gradient(120deg, #141414 60%, #e50914 100%);
  color: #fff;
  padding: 60px 20px 40px 20px;
  text-align: center;
  margin-bottom: 2rem;
  border-radius: 1rem;
}
.hero-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
.hero-subtitle {
  font-size: 1.25rem;
  margin-bottom: 2rem;
}
.empty-list {
  margin: 4rem 0;
}
.list-row {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.list-card {
  min-width: 160px;
  background: #222;
  border: none;
  color: #fff;
  padding: 0;
}
.list-img {
  width: 100%;
  border-radius: 0.5rem 0.5rem 0 0;
  display: block;
}
.list-title {
  padding: 0.5rem;
  font-size: 1rem;
  text-align: center;
}
</style>