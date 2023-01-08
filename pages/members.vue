<script setup lang="ts">
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
</script>

<template>
  <div class="container mx-auto my-10 px-4">
    <h1 class="text-4xl font-bold">Team Members</h1>
    <member-list />
  </div>
</template>

<style scoped></style>
