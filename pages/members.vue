<script lang="ts" setup>
import { Member } from "~/types/member";

// metaタグ
useHead({
  meta: [
    {
      name: "description",
      content: "チーム「Luminess」のメンバー一覧です。",
    },
    {
      property: "og:url",
      content: "https://luminess.games/members",
    },
    {
      property: "og:type",
      content: "article",
    },
    {
      property: "og:title",
      content: "Luminessのメンバー一覧",
    },
    {
      property: "og:description",
      content: "チーム「Luminess」のメンバー一覧です。",
    },
    {
      property: "og:site_name",
      content: "Luminessのメンバー一覧",
    },
    {
      name: "twitter:title",
      content: "Luminessのメンバー一覧",
    },
    {
      name: "twitter:description",
      content: "チーム「Luminess」のメンバー一覧です。",
    },
  ],
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
  <v-container>
    <h1 class="my-8 text-4xl font-bold">Team Members</h1>
    <v-row v-for="member in members?.items" :key="member._id">
      <v-col>
        <MemberCard :member="member" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
