<script lang="ts" setup>
const props = defineProps<{
  title: string;
  href: string;
  icon: any;
}>();

const isDrawerOpen = useState("drawer-control");

const isActive = computed(() => route.path === props.href);

const route = useRoute();

</script>

<template>
  <li>
    <NuxtLink
      class="flex items-center py-4 px-4 rounded-md transition-colors text-xl"
      :class="
        isActive
          ? ['bg-slate-700']
          : ['hover:bg-slate-500 ', 'active:bg-slate-700']
      "
      :href="href"
      @click="isDrawerOpen = false"
      :aria-label="title + 'ページへ移動'"
    >
      <Icon class="mx-2" :name="icon" size="35" color="white" />
      {{ title }}
    </NuxtLink>
  </li>
</template>

<style scoped></style>
