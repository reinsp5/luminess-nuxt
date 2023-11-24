<script lang="ts" setup>
import type { Member } from "@/types/member";

// SEOメタ情報を設定
const pageTitle = "Luminessのメンバー一覧";
const pageDescription = "チーム「Luminess」のメンバー一覧です。";
useSeoMeta({
  description: pageDescription,
  ogType: "article",
  ogUrl: "https://luminess.games/members",
  ogTitle: pageTitle,
  ogDescription: pageDescription,
  ogSiteName: pageTitle,
  twitterTitle: pageTitle,
  twitterDescription: pageDescription,
});

// メンバー情報を取得
const { data: members } = await useAsyncData("members", async () => {
  const { $newtClient } = useNuxtApp();
  return await $newtClient.getContents<Member>({
    appUid: "members",
    modelUid: "member",
    query: {
      order: ["_id"],
      depth: 2,
    },
  });
});

</script>

<template>
  <div class="container mx-auto p-4 cms-member">
    <h1 class="text-3xl font-bold">メンバー一覧</h1>
    <MemberCard v-for="member in members?.items" :key="member._id" :member="member" />
  </div>
</template>

<style scoped></style>
