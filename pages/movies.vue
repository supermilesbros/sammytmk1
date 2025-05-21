<template>
  <UContainer>
    <!-- Hero Banner -->
    <div class="hero">
      <h1 class="hero-title">Popular Movies</h1>
      <p class="hero-subtitle">Blockbusters, classics, and more.</p>
    </div>

    <!-- Rows of Movies -->
    <div v-for="(row, idx) in rows" :key="idx" class="movie-row">
      <h2 class="row-title">{{ row.title }}</h2>
      <div class="row-movies">
        <UCard v-for="movie in row.movies" :key="movie.id" class="movie-card">
          <img :src="movie.img" :alt="movie.title" class="movie-img" />
          <div class="movie-title">{{ movie.title }}</div>
        </UCard>
      </div>
    </div>
  </UContainer>
</template>

<script setup>
const rows = [
  {
    title: 'Now Playing',
    movies: [
      { id: 1, title: 'Movie A', img: 'https://picsum.photos/200/300?random=21' },
      { id: 2, title: 'Movie B', img: 'https://picsum.photos/200/300?random=22' },
      { id: 3, title: 'Movie C', img: 'https://picsum.photos/200/300?random=23' },
      { id: 4, title: 'Movie D', img: 'https://picsum.photos/200/300?random=24' },
      { id: 5, title: 'Movie E', img: 'https://picsum.photos/200/300?random=25' },
    ],
  },
  {
    title: 'Top Rated',
    movies: [
      { id: 6, title: 'Movie F', img: 'https://picsum.photos/200/300?random=26' },
      { id: 7, title: 'Movie G', img: 'https://picsum.photos/200/300?random=27' },
      { id: 8, title: 'Movie H', img: 'https://picsum.photos/200/300?random=28' },
      { id: 9, title: 'Movie I', img: 'https://picsum.photos/200/300?random=29' },
      { id: 10, title: 'Movie J', img: 'https://picsum.photos/200/300?random=30' },
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
.movie-row {
  margin-bottom: 2rem;
}
.row-title {
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
.row-movies {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
}
.movie-card {
  min-width: 160px;
  background: #222;
  border: none;
  color: #fff;
  padding: 0;
}
.movie-img {
  width: 100%;
  border-radius: 0.5rem 0.5rem 0 0;
  display: block;
}
.movie-title {
  padding: 0.5rem;
  font-size: 1rem;
  text-align: center;
}
</style>