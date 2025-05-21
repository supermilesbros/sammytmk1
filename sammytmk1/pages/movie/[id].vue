<template>
  <div>
    <h1>{{ movie.title }}</h1>
    <img :src="movie.image" alt="Movie Poster" />
    <p>{{ movie.description }}</p>
    <button @click="addToFavorites">Add to Favorites</button>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $axios }) {
    const movieId = params.id;
    const movie = await $axios.$get(`https://api.example.com/movies/${movieId}`);
    return { movie };
  },
  methods: {
    addToFavorites() {
      // Logic to add the movie to the user's favorites
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}
img {
  width: 100%;
  height: auto;
}
p {
  margin: 1rem 0;
}
button {
  background-color: #e50914;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #f40612;
}
</style>