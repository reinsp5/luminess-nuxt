<script lang="ts" setup>
import { PageLinks } from "@/helpers/pagelink";
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
      <NavTab class="h-full hidden md:flex md:justify-end" />
      <NavDrawer class="z-50 flex justify-end md:hidden">
        <NavDrawerItem
          v-for="link in PageLinks"
          :key="link.path"
          :title="link.title"
          :href="link.path"
          :icon="link.icon"
        />
      </NavDrawer>
    </div>
  </div>
</template>

<style scoped></style>
