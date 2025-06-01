<script setup>
definePageMeta({
  layout: "welcome",
});
</script>

<template>
  <div>
    <div class="relative z-10">
      <HomeHero class="hero-full" />
    </div>
    <!-- Full Width Hero Banner with Image Background -->
  </div>
</template>

<style scoped>
.hero-full {
  position: relative;
  width: 100vw;
  margin-left: 50%;
  transform: translateX(-50%);
  min-height: 420px;
  background: url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80")
    center center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
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
