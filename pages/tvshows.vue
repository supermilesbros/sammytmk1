<template>
  <UContainer>
    <!-- Navbar -->
    <UHeader>
      <template #logo>
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" style="height:40px;">
      </template>
      <template #actions>
        <UButton color="primary" variant="ghost">Sign In</UButton>
      </template>
    </UHeader>

    <!-- Hero Banner -->
    <div class="hero">
      <h1 class="hero-title">Popular TV Shows</h1>
      <p class="hero-subtitle">Binge the best series, all in one place.</p>
    </div>

    <!-- Rows of TV Shows -->
    <div v-for="(row, idx) in rows" :key="idx" class="tv-row">
      <h2 class="row-title">{{ row.title }}</h2>
      <div class="row-shows">
        <UCard v-for="show in row.shows" :key="show.id" class="show-card">
          <img :src="show.img" :alt="show.title" class="show-img" >
          <div class="show-title">{{ show.title }}</div>
        </UCard>
      </div>
    </div>
  </UContainer>
</template>

<script setup>
const rows = [
  {
    title: 'Trending TV Shows',
    shows: [
      { id: 1, title: 'Show 1', img: 'https://picsum.photos/200/300?random=11' },
      { id: 2, title: 'Show 2', img: 'https://picsum.photos/200/300?random=12' },
      { id: 3, title: 'Show 3', img: 'https://picsum.photos/200/300?random=13' },
      { id: 4, title: 'Show 4', img: 'https://picsum.photos/200/300?random=14' },
      { id: 5, title: 'Show 5', img: 'https://picsum.photos/200/300?random=15' },
    ],
  },
  {
    title: 'Top Rated Series',
    shows: [
      { id: 6, title: 'Show 6', img: 'https://picsum.photos/200/300?random=16' },
      { id: 7, title: 'Show 7', img: 'https://picsum.photos/200/300?random=17' },
      { id: 8, title: 'Show 8', img: 'https://picsum.photos/200/300?random=18' },
      { id: 9, title: 'Show 9', img: 'https://picsum.photos/200/300?random=19' },
      { id: 10, title: 'Show 10', img: 'https://picsum.photos/200/300?random=20' },
    ],
  },
]
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
.tv-row {
  margin-bottom: 2rem;
}
.row-title {
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
.row-shows {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
}
.show-card {
  min-width: 160px;
  background: #222;
  border: none;
  color: #fff;
  padding: 0;
}
.show-img {
  width: 100%;
  border-radius: 0.5rem 0.5rem 0 0;
  display: block;
}
.show-title {
  padding: 0.5rem;
  font-size: 1rem;
  text-align: center;
}
body {
  background: #141414;
}
</style>