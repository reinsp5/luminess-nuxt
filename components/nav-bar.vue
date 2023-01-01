<script lang="ts" setup>
const isDrawerOpen = ref(false);
const switchDrawerOpen = () => {
  isDrawerOpen.value = !isDrawerOpen.value;
};
</script>

<template>
  <nav class="navbar bg-base-100">
    <div class="flex-none lg:hidden">
      <button class="btn btn-square btn-ghost" @click="switchDrawerOpen">
        <Icon name="ic:baseline-menu" size="30" />
      </button>
    </div>
    <div class="flex-1">
      <NuxtLink class="ml-2 text-xl font-bold" to="/">Luminess</NuxtLink>
    </div>
    <div class="flex-none hidden lg:block">
      <ul class="menu menu-horizontal px-1">
        <li>
          <NuxtLink to="/">
            <div class="text-center">
              <Icon name="material-symbols:home" size="30" />
              Home
            </div>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">
            <div class="text-center">
              <Icon name="material-symbols:info" size="30" />
              About
            </div>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/members">
            <div class="text-center">
              <Icon name="bi:people-fill" size="30" />
              Members
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <!-- スマホ用 -->

    <div
      class="lg:hidden fixed inset-0 z-50 w-64 h-screen bg-white transition duration-100 ease-out"
      :class="isDrawerOpen ? 'drawer-open shadow-lg' : 'drawer-close'"
    >
      <div class="w-full h-full grid grid-cols-1">
        <ul class="divide-y menu menu-vertical px-1" @click="switchDrawerOpen">
          <li>
            <NuxtLink to="/">
              <div class="flex items-center">
                <Icon class="mr-2" name="material-symbols:home" size="30" />
                Home
              </div>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">
              <div class="flex items-center">
                <Icon class="mr-2" name="material-symbols:info" size="30" />
                About
              </div>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/members">
              <div class="flex items-center">
                <Icon class="mr-2" name="bi:people-fill" size="30" />
                Members
              </div>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="lg:hidden fixed top-0 left-0 w-screen h-screen z-40 duration-100 ease-linear"
      :class="isDrawerOpen ? 'drawer-open bg-gray-900 opacity-75' : 'invisible'"
      @click="switchDrawerOpen"
    />
  </nav>
</template>

<style scoped>
.drawer-open {
  transform: translateX(0%);
}

.drawer-close {
  transform: translateX(-100%);
}
</style>
