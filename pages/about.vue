<script lang="ts" setup>
import type {} from "@/types/fixedpage"
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

// ページ内容取得
const route = useRoute()
const { slug } = route.params

const { data } = await useAsyncData(`article-${slug}`, async () => {
  const { $newtClient } = useNuxtApp()
  return await $newtClient.getFirstContent<FixedPage>({
    appUid: 'fixed-page',
    modelUid: 'article',
    query: {
      slug,
      select: ['_id', 'title', 'slug', 'body']
    }
  })
})
const article = data.value
</script>

<template>
  <div class="container mx-auto p-4 md:p-8 cms-content">
    <h1 class="text-3xl font-bold">{{ article.title }}</h1>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-html="article?.body" />
  </div>
</template>

<style scoped></style>
