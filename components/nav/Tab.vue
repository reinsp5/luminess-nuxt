<script lang="ts" setup>
const props = defineProps<{
  title: string;
  href: string;
  icon: any;
}>();
const route = useRoute();

const isActive = computed(() => route.path === props.href);

</script>

<template>
  <NuxtLink
    class="px-6 flex flex-initial items-center transition-colors"
    :class="
      isActive
        ? ['bg-slate-800']
        : ['hover:bg-slate-600 ', 'active:bg-slate-800']
    "
    :to="props.href"
    :aria-label="props.title + 'ページへ移動'"
  >
    <Icon class="mx-2" :name="props.icon" size="35" color="white" />
    {{ props.title }}
  </NuxtLink>
</template>

<style scoped></style>
