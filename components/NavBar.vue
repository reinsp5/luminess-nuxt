<script lang="ts" setup>
const isDrawerOpen = ref(false);
const switchDrawerOpen = () => {
  isDrawerOpen.value = !isDrawerOpen.value;
};

const links = [
  { title: "Home", icon: "mdi:home", to: "/" },
  { title: "About", icon: "mdi:information", to: "/about" },
  { title: "Members", icon: "mdi:account-group", to: "/members" },
];
</script>

<template>
  <v-app-bar color="primary">
    <v-img src="luminess_logo.svg" />
    <v-tabs>
      <v-tab
        v-for="link in links"
        :key="link.title"
        :prepend-icon="link.icon"
        :to="link.to"
        nuxt
        >{{ link.title }}</v-tab
      >
    </v-tabs>
  </v-app-bar>
</template>

<style scoped></style>
