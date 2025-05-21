<template>
  <div>
    <Banner />
    <div class="movie-list">
      <h2 class="text-2xl font-bold mb-4">Trending Now</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue'
import MovieCard from '@/components/MovieCard.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Banner,
    MovieCard,
    Footer
  },
  data() {
    return {
      movies: []
    }
  },
  async mounted() {
    const response = await fetch('https://api.example.com/movies') // Replace with your movie API
    this.movies = await response.json()
  }
}
</script>

<style scoped>
.movie-list {
  padding: 20px;
}
</style>