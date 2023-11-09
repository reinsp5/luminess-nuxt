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
        :src="image.photo.src"
        provider="imagekit"
        sizes="sm:640px md:760px lg:768px xl:1550px"
        fit="pad_extract"
        :alt="image.photo.fileName"
        width="100%"
        height="100%"
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
