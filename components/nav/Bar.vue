<script lang="ts" setup>
import { HomeIcon, InformationCircleIcon, UserGroupIcon } from "@heroicons/vue/24/solid"
</script>

<template>
  <div class="px-2 md:px-8 mx-auto">
    <div class="grid grid-cols-2 h-20 items-center">
      <div>
        <NuxtLink to="/">
          <NuxtImg
            width="200"
            height="60"
            src="/images/luminess_logo.svg"
            alt="Luminess"
          />
        </NuxtLink>
      </div>
      <div class="h-full md:flex justify-end hidden">
        <NuxtLink class="tab" to="/"><HomeIcon class="mx-2 w-8 h-8" />HOME</NuxtLink>
        <NuxtLink class="tab" to="/about"><InformationCircleIcon class="mx-2 w-8 h-8" />ABOUT</NuxtLink>
        <NuxtLink class="tab" to="/members"><UserGroupIcon class="mx-2 w-8 h-8" />MEMBERS</NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tab {
  @apply px-6 flex flex-initial items-center hover:bg-slate-400 active:bg-slate-600 transition-colors;
}
</style>
