<script lang="ts" setup>
import { PageLinks } from "@/helpers/pagelink";
</script>

<template>
  <div class="px-2 md:pl-8 md:pr-0 mx-auto">
    <div class="grid grid-cols-2 h-16 items-center">
      <div>
        <NuxtLink to="/">
          <NuxtImg
            width="200"
            height="40"
            src="/images/luminess_logo_white_without_background.svg"
            alt="Luminess"
          />
        </NuxtLink>
      </div>
      <div class="h-full hidden md:flex md:justify-end">
        <NavTab
          v-for="link in PageLinks"
          :key="link.path"
          :title="link.title"
          :href="link.path"
          :icon="link.icon"
        />
      </div>
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
