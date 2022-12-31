<script setup lang="ts">
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

const slides = [
  "1.webp",
  "2.webp",
  "3.webp",
  "4.webp",
];

const getImageUrl = computed(() => (name: String) => {
  const url = new URL(`../assets/slideshows/${name}`, import.meta.url).href
  return url
})
</script>

<template>
  <vueper-slides class="no-shadow aspect-video" fade autoplay>
    <vueper-slide v-for="slide in slides" :key="slide" :image="getImageUrl(slide)" />
  </vueper-slides>
</template>

<style scoped>
.vueperslides__inner {
  height: 100%;
}
.vueperslides__parallax-wrapper {
  height: 100%;
}
</style>
