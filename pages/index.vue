<script lang="ts" setup>

const config = useRuntimeConfig();
// const query = qs.stringify(
//   {
//     populate: "image",
//   },
//   {
//     encodeValuesOnly: true,
//   }
// );
const { data: images } = await useFetch(
  `${config.cmsBase}/slideshow/photo?order=_id&depth=2`,
  {
    headers: {
      Authorization: `${config.token}`,
    },
  }
);

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
</script>

<template>
  <main class="container mx-auto mb-10 px-4">
    <!-- <Carousel
      :autoplay="5000"
      :wrap-around="true"
      :transition="500"
      :pause-autoplay-on-hover="true"
    >
      <Slide v-for="image in images?.items" :key="image.name">
        <NuxtImg
          :src="image.photo.src"
          provider="imagekit"
          sizes="sm:640px md:760px lg:768px xl:1550"
          fit="pad_extract"
          :alt="image.photo.fileName"
        />
      </Slide>
    </Carousel> -->
    <v-card class="bg-white" variant="outlined">
      <v-card-title>
        <h2 class="card-title">Luminessについて</h2>
      </v-card-title>
    </v-card>
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
