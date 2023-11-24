<script lang="ts" setup>
// Drawer開閉フラグ
const isDrawerOpen = useState("drawer-control", () => false);

useHead({
  bodyAttrs: {
    class: computed(() => {
      return isDrawerOpen.value ? "fixed" : "";
    }),
  },
});
</script>

<template>
  <header class="bg-primary-950 text-white">
    <NavBar />
  </header>
</template>

<style scoped></style>
