<script setup lang="ts"></script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
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
