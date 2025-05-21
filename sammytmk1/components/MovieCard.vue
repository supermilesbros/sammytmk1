<template>
  <div class="movie-card">
    <img :src="movie.image" alt="Movie Poster" class="movie-card__image" />
    <h3 class="movie-card__title">{{ movie.title }}</h3>
    <p class="movie-card__description">{{ movie.description }}</p>
    <button class="movie-card__button">Watch Now</button>
  </div>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.movie-card {
  background-color: #1c1c1c;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.2s;
}

.movie-card:hover {
  transform: scale(1.05);
}

.movie-card__image {
  width: 100%;
  height: auto;
}

.movie-card__title {
  color: #ffffff;
  font-size: 1.5rem;
  margin: 0.5rem 0;
}

.movie-card__description {
  color: #b3b3b3;
  font-size: 1rem;
  margin: 0.5rem 0;
}

.movie-card__button {
  background-color: #e50914;
  color: #ffffff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
}

.movie-card__button:hover {
  background-color: #f40612;
}
</style>