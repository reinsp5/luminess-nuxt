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
  <v-app-bar app color="background" :elevation="0">
    <v-app-bar-nav-icon class="md:hidden" @click="drawer = !drawer" alt="toggle button" />
    <v-app-bar-title>
      <v-img
        max-width="200"
        max-height="60"
        src="/images/luminess_logo.svg"
        contain
      />
    </v-app-bar-title>

    <!-- ナビゲーションタブ (デスクトップ) -->
    <v-tabs class="ml-auto hidden md:block">
      <v-tab v-for="link in links" :key="link.title" :to="link.to" :alt="link.title" nuxt>
        <v-icon :size="25">{{ link.icon }}</v-icon>
        {{ link.title }}
      </v-tab>
    </v-tabs>
  </v-app-bar>

  <!-- ナビゲーションドロワー (スマホ) -->
  <v-navigation-drawer
    app
    temporary
    v-model="drawer"
    :disable-resize-watcher="true"
  >
    <v-list nav>
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
