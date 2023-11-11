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
  <header class="bg-slate-100">
    <NavBar />
  </header>
</template>

<style scoped></style>
