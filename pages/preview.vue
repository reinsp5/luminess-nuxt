<script lang="ts" setup>
import type { FixedPage } from "@/types/fixedpage";

// ページ内容取得
const config = useRuntimeConfig();
const route = useRoute();
const { slug, secret } = route.query;

// slugの有無を検証する
if (!slug) {
  throw createError({ statusCode: 400, statusMessage: "Invalid slug" });
}

// secretを検証する
if (config.newt && secret !== config.newt.previewSecret) {
  throw createError({ statusCode: 401, statusMessage: "Invalid secret" });
}

const { data } = await useAsyncData(`article-${slug}-preview`, async () => {
  const { $newtClient } = useNuxtApp();
  return await $newtPreviewClient.getFirstContent<FixedPage>({
    appUid: "fixed-page",
    modelUid: "article",
    query: {
      slug,
      select: ["_id", "title", "slug", "body"],
    },
  });
});

const article = data.value;

useHead({
  title: article?.title,
  meta: [
    { name: "description", content: "投稿詳細ページです" },
    { name: "robots", content: "noindex,nofollow" },
  ],
});
</script>

<template>
  <div class="container mx-auto p-4 md:p-8 cms-content">
    <h1 class="text-3xl font-bold">{{ article.title }}</h1>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-html="article?.body" />
  </div>
</template>

<style scoped></style>
