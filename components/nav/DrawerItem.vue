<script lang="ts" setup>
const props = defineProps<{
  title: string;
  href: string;
  icon: any;
}>();

const isActive = ref(false);

const route = useRoute();

onMounted(() => {
  // 現在のルートとhrefが一致しているかどうかをisActiveに反映する
  isActive.value = route.path === props.href;
});
</script>

<template>
  <li>
    <a
      class="flex items-center py-4 px-4 rounded-md transition-colors text-xl"
      :class="
        isActive
          ? ['bg-slate-800']
          : ['hover:bg-slate-600 ', 'active:bg-slate-800']
      "
      :href="href"
    >
      <component :is="icon" class="mx-2 w-8 h-8" />
      {{ title }}
    </a>
  </li>
</template>

<style scoped></style>