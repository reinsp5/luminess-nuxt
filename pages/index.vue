<script lang="ts" setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import qs from "qs";

const config = useRuntimeConfig();
const query = qs.stringify(
  {
    populate: "image",
  },
  {
    encodeValuesOnly: true,
  }
);
const { data: images } = await useFetch(
  `https://cms.luminess.games/api/slideshows?${query}&sort[0]=id`
);
</script>

<template>
  <main class="container mx-auto mb-10 px-4">
    <Carousel
      :autoplay="5000"
      :wrap-around="true"
      :transition="500"
      :pause-autoplay-on-hover="true"
    >
      <Slide v-for="image in images.data" :key="image.id">
        <img class="w-full h-auto aspect-video" :src="config.cmsBase + image.image.url" :alt="image.image.name" />
      </Slide>
    </Carousel>
    <div class="my-5 flex flex-col w-full lg:flex-row">
      <NuxtLink to="/about" class="lg:card-side bg-base-100 shadow-xl lg:w-1/2">
        <div class="card-body">
          <h2 class="card-title">Luminessについて</h2>
          <p>チームLuminessについての詳細はこちら</p>
        </div>
      </NuxtLink>
      <div class="divider lg:divider-horizontal"></div>
      <NuxtLink
        to="/members"
        class="lg:card-side bg-base-100 shadow-xl lg:w-1/2"
      >
        <div class="card-body">
          <h2 class="card-title">メンバー一覧</h2>
          <p>Luminessの所属メンバーはこちら</p>
        </div>
      </NuxtLink>
    </div>
  </main>
</template>

<style scoped></style>
