<script lang="ts" setup>
import { PageLinks } from "@/helpers/pagelink";
</script>

<template>
  <div>
    <NuxtLink
      v-for="link in PageLinks"
      :key="link.path"
      class="tab"
      :to="link.path"
    >
      <component :is="link.icon" class="mx-2 w-8 h-8" />
      {{ link.title }}
    </NuxtLink>
  </div>
</template>

<style scoped>
.tab {
  @apply px-6 flex flex-initial items-center hover:bg-slate-600 active:bg-slate-800 transition-colors;
}
</style>
