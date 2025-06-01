<script setup>
const items = [
  { id: 1, title: "Movie A", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" },
  { id: 2, title: "Movie B", img: "https://images.unsplash.com/photo-1505685296765-3a2736de412f?auto=format&fit=crop&w=400&q=80" },
  { id: 3, title: "Movie C", img: "https://images.unsplash.com/photo-1509228468518-c5eeecbff44a?auto=format&fit=crop&w=400&q=80" },
  { id: 4, title: "Movie D", img: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=400&q=80" },
  { id: 5, title: "Movie E", img: "https://images.unsplash.com/photo-1507914372368-bd133d6e1c76?auto=format&fit=crop&w=400&q=80" },
  { id: 6, title: "Movie F", img: "https://images.unsplash.com/photo-1472224371017-08207f84aaae?auto=format&fit=crop&w=400&q=80" },
  { id: 7, title: "Movie G", img: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=400&q=80" },
  { id: 8, title: "Movie H", img: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=400&q=80" },
  { id: 9, title: "Movie I", img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=400&q=80" },
  { id: 10, title: "Movie J", img: "https://images.unsplash.com/photo-1503938700724-2c6e4c311d88?auto=format&fit=crop&w=400&q=80" },
];
</script>

<template>
  <UContainer class=" bg-stone-950">
    <!-- Hero Banner -->
    <div class="flex items-end py-5 h-120" style="background-image: url('/browse.png'); background-size: cover; background-position: top;">
      <h1 class="mx-5 mb-2 text-5xl text-primary font-creepster">
        Welcome to the Nightmare Theater
      </h1>
    </div>

    <!-- Full Width Carousel -->
    <div>
      <p>Featured Shows</p>
      <UCarousel
        v-slot="{ item }"
        :key="items.id"
        :items="items"
        :ui="{ item: 'basis-1/4' }"
        class="py-10"
      >
        <UCarouselItem class="h-full">
          <div class="flex items-center justify-center h-full text-primary text-lg font-semibold">
            <UCard :style="{ backgroundImage: `url(${item.img})` }" class="w-full h-40 bg-cover bg-center ">
              <div class="text-lg font-semibold">
                {{ item.title }}
              </div>
              <div class="text-sm">
                Movie Description
              </div>
            </UCard>
          </div>
        </UCarouselItem>
      </UCarousel>
    </div>
    <div>
      <p>Popular Shows</p>
      <UCarousel
        v-slot="{ item }"
        :key="items.id"
        :items="items"
        :ui="{ item: 'basis-1/4' }"
        class="py-10"
      >
        <UCarouselItem class="h-full">
          <div class="flex items-center justify-center h-full text-primary text-lg font-semibold">
            <UCard :style="{ backgroundImage: `url(${item.img})` }" class="w-full h-40 bg-cover bg-center ">
              <div class="text-lg font-semibold">
                {{ item.title }}
              </div>
              <div class="text-sm">
                Movie Description
              </div>
            </UCard>
          </div>
        </UCarouselItem>
      </UCarousel>
    </div>

    <div>
      <p>My Favorites</p>
      <UCarousel
        v-slot="{ item }"
        :key="items.id"
        :items="items"
        :ui="{ item: 'basis-1/4' }"
        class="py-10"
      >
        <UCarouselItem class="h-full">
          <div class="flex items-center justify-center h-full text-white text-lg font-semibold">
            <UCard :style="{ backgroundImage: `url(${item.img})` }" class="w-full h-40 bg-cover bg-center ">
              <div class="text-lg font-semibold">
                {{ item.title }}
              </div>
              <div class="text-sm">
                Movie Description
              </div>
            </UCard>
          </div>
        </UCarouselItem>
      </UCarousel>
    </div>
  </UContainer>
</template>

<style scoped>

</style>
