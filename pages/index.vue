<script lang="ts" setup>
import type { SlideshowImage } from "@/types/slideshow";
import { mdiInformation, mdiAccountGroup } from "@mdi/js";

// SEOメタ情報を設定
const pageTitle = "チームLuminess Webサイト";
const pageDescription = "PSO2およびPSO2NGSのShip5で活動中のチーム「Luminess」のWebサイト。";
useSeoMeta({
  description: pageDescription,
  ogType: "website",
  ogUrl: "https://luminess.games/",
  ogTitle: pageTitle,
  ogDescription: pageDescription,
  ogSiteName: pageTitle,
  twitterTitle: pageTitle,
  twitterDescription: pageDescription,
});

// スライドショーの画像情報を取得
// const { data: images } = await useAsyncData("carousel", async () => {
//   const { $newtClient } = useNuxtApp();
//   return await $newtClient.getContents<SlideshowImage>({
//     appUid: "slideshow",
//     modelUid: "photo",
//     query: {
//       order: ["_id"],
//       depth: 2,
//     },
//   });
// });
</script>

<template>
  <div class="container">
    <h1 class="text-2xl">Top</h1>
  </div>
</template>

<style scoped></style>
