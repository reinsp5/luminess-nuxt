<script lang="ts" setup>
// SEOメタ情報を設定
const pageTitle = "Luminessおよび当サイトについて";
const pageDescription = "チーム「Luminess」および当Webサイトに関する情報です。";
useSeoMeta({
  description: pageDescription,
  ogType: "article",
  ogUrl: "https://luminess.games/about",
  ogTitle: pageTitle,
  ogDescription: pageDescription,
  ogSiteName: pageTitle,
  twitterTitle: pageTitle,
  twitterDescription: pageDescription,
});
</script>

<template>
  <div class="container">
    <h1 class="text-2xl">About</h1>
  </div>
</template>

<style scoped></style>
