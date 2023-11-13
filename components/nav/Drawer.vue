<script lang="ts" setup>
const isDrawerOpen = useState("drawer-control");
</script>

<template>
  <div class="relative">
    <button
      class="p-1 rounded-md hover:bg-slate-500 active:bg-slate-700 transition-colors"
      @click="isDrawerOpen = true"
      aria-label="ドロワーを開く"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        class="w-8 h-8"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </button>
    <!-- Drawer Shadow -->
    <div
      class="fixed top-0 left-0 w-screen h-screen bg-slate-500 transition-all"
      :class="[
        isDrawerOpen ? 'visible' : 'invisible',
        isDrawerOpen ? 'opacity-50' : 'opacity-0',
      ]"
      @click="isDrawerOpen = false"
    />
    <!-- Drawer -->
    <nav
      class="fixed top-0 right-0 bg-[#0C111B] shadow-md h-screen w-96 flex px-4 py-8 duration-300"
      :class="[isDrawerOpen ? 'translate-x-0' : 'translate-x-full']"
    >
      <button
        class="absolute top-4 left-4 p-1 rounded-md hover:bg-slate-500 active:bg-slate-700 transition-colors"
        @click="isDrawerOpen = false"
        aria-label="ドロワーを閉じる"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="w-8 h-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <ul class="w-full mt-12 pb-2 overflow-y-scroll">
        <slot />
      </ul>
    </nav>
  </div>
</template>

<style scoped>
* {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
*::-webkit-scrollbar {
  display: none;
}
</style>
