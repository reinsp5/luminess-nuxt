<script lang="ts" setup>
import { SlideshowImage } from "~/types/slideshow";
import { mdiInformation, mdiAccountGroup } from "@mdi/js";

// metaタグ
useHead({
  meta: [
    {
      name: "description",
      content:
        "PSO2およびPSO2NGSのShip5で活動中のチーム「Luminess」のWebサイト",
    },
    {
      property: "og:url",
      content: "https://luminess.games/",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:title",
      content: "チームLuminess Webサイト",
    },
    {
      property: "og:description",
      content:
        "PSO2およびPSO2NGSのShip5で活動中のチーム「Luminess」のWebサイト",
    },
    {
      property: "og:site_name",
      content: "チームLuminess Webサイト",
    },
    {
      name: "twitter:title",
      content: "チームLuminess Webサイト",
    },
    {
      name: "twitter:description",
      content:
        "PSO2およびPSO2NGSのShip5で活動中のチーム「Luminess」のWebサイト",
    },
  ],
});

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
  <v-container>
    <v-row>
      <v-col>
        <v-responsive :aspect-ratio="16 / 9">
          <v-carousel
            height="100%"
            :hide-delimiters="true"
            :show-arrows="false"
            :interval="10000"
            :touch="true"
          >
            <v-carousel-item
              v-for="image in images?.items"
              :key="image._id"
              cover
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
            </v-carousel-item>
          </v-carousel>
        </v-responsive>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <NuxtLink to="/about">
          <v-hover v-slot:default="{ isHovering, props }">
            <v-card
              v-bind="props"
              :elevation="0"
              :class="{ 'bg-primary-darken-8': isHovering }"
              variant="outlined"
            >
              <v-card-title class="text-center">
                <v-icon :size="50">{{ mdiInformation }}</v-icon>
                <h2 class="text-h5">Luminessについて</h2>
              </v-card-title>
              <v-card-text> チームLuminessについての詳細はこちら </v-card-text>
            </v-card>
          </v-hover>
        </NuxtLink>
      </v-col>
      <v-col cols="12" md="6">
        <NuxtLink to="/members">
          <v-hover v-slot:default="{ isHovering, props }">
            <v-card
              v-bind="props"
              :elevation="0"
              :class="{ 'bg-primary-darken-8': isHovering }"
              variant="outlined"
            >
              <v-card-title class="text-center">
                <v-icon :size="50">{{ mdiAccountGroup }}</v-icon>
                <h2 class="text-h5">メンバー一覧</h2>
              </v-card-title>
              <v-card-text> Luminessの所属メンバーはこちら </v-card-text>
            </v-card>
          </v-hover>
        </NuxtLink>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
