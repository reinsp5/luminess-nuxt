<script lang="ts" setup>
import { PageLinks } from "@/helpers/pagelink";
</script>

<template>
  <div class="px-2 lg:pl-8 lg:pr-0 mx-auto">
    <div class="grid grid-cols-2 h-16 items-center">
      <div>
        <NuxtLink to="/" aria-label="ホームページヘ移動">
          <NuxtImg
            width="200"
            height="40"
            src="/images/luminess_logo_white_without_background.svg"
            alt="Luminess"
          />
        </NuxtLink>
      </div>
      <div class="h-full hidden lg:flex lg:justify-end">
        <NavTab
          v-for="link in PageLinks"
          :key="link.path"
          :title="link.title"
          :href="link.path"
          :icon="link.icon"
        />
      </div>
      <NavDrawer class="z-50 flex justify-end lg:hidden">
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
