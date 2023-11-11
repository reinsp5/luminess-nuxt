<script lang="ts" setup>
import type { SlideshowImage } from "@/types/slideshow";
// スライドショーの画像情報を取得
const { data: images } = await useAsyncData("carousel", async () => {
  const { $newtClient } = useNuxtApp();
  return await $newtClient.getContents<SlideshowImage>({
    appUid: "slideshow",
    modelUid: "photo",
    query: {
      order: ["_id"],
      depth: 2,
    },
  });
});
</script>

<template>
  <Swiper
    class="swiper"
    :height="500"
    :modules="[SwiperAutoplay, SwiperEffectCreative]"
    :slides-per-view="1"
    :loop="true"
    :effect="'creative'"
    :autoplay="{
      delay: 8000,
      disableOnInteraction: true,
    }"
    :creative-effect="{
      prev: {
        shadow: false,
        translate: ['-20%', 0, -1],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }"
  >
    <SwiperSlide
      class="swiper-slide"
      v-for="image in images?.items"
      :key="image._id"
    >
      <NuxtImg
        provider="imagekit"
        :src="image.photo.src"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1920px"
        width="3840"
        height="2160"
        format="avif"
        quality="80"
        :alt="image.photo.fileName"
      />
    </SwiperSlide>
  </Swiper>
</template>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
