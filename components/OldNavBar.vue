<script lang="ts" setup>
import { mdiHome, mdiInformation, mdiAccountGroup } from "@mdi/js";

const drawer = ref(false);

const links = [
  { title: "Home", icon: mdiHome, to: "/" },
  { title: "About", icon: mdiInformation, to: "/about" },
  { title: "Members", icon: mdiAccountGroup, to: "/members" },
];
</script>

<template>
  <div color="background" :elevation="0" app>
    <div class="md:hidden" @click="drawer = !drawer" alt="toggle button" />
    <div>
      <NuxtImg
        max-width="200"
        max-height="60"
        src="/images/luminess_logo.svg"
        contain
      />
    </div>

    <!-- ナビゲーションタブ (デスクトップ) -->
    <div class="ml-auto hidden md:block">
      <div v-for="link in links" :key="link.title" :to="link.to" :alt="link.title" nuxt>
        <NuxtIcon :size="25">{{ link.icon }}</NuxtIcon>
        {{ link.title }}
      </div>
    </div>
  </div>

  <!-- ナビゲーションドロワー (スマホ) -->
  <v-navigation-drawer
    app
    temporary
    v-model="drawer"
    :disable-resize-watcher="true"
  >
    <div nav>
      <v-list-item
        v-for="link in links"
        :key="link.title"
        :prepend-icon="link.icon"
        :to="link.to"
        :alt="link.title"
        nuxt
      >
        <v-list-item-title>
          {{ link.title }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped></style>
