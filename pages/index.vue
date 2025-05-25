<template>
  <div>
    <div class="relative z-10 px-4 md:px-12 lg:px-24">
      <HomeHero class="hero-full" />
    </div>
        <!-- Full Width Hero Banner with Image Background -->

        <UContainer>
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
    </div>
</template>

<script setup>
const rows = [
    {
        title: 'Trending Now',
        movies: [
            { id: 1, title: 'Movie 1', img: 'https://picsum.photos/200/300?random=1' },
            { id: 5, title: 'Movie 5', img: 'https://picsum.photos/200/300?random=5' },
        ],
    }
]
</script>

<style scoped>

.hero-full {
  position: relative;
  width: 100vw;
  margin-left: 50%;
  transform: translateX(-50%);
  min-height: 420px;
  background: url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80') center center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  border-radius: 0;
  overflow: hidden;
}
.hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(20, 20, 20, 0.7);
  z-index: 1;
}
.hero-content {
  position: relative;
  z-index: 2;
  width: 100%;
  text-align: center;
  color: #fff;
  padding: 80px 20px 60px 20px;
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