<script setup lang="ts"></script>

<template>
  <v-app>
    <NavBar />
    <v-main>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </v-main>
    <Footer />
  </v-app>
</template>

<style>
html,
body,
#__nuxt,
#__nuxt > div {
  height: 100%;
}
body {
  font-family: "BIZ UDPGothic", sans-serif;
}

.page-enter-active,
.page-leave-active {
  transition: all 150ms;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
