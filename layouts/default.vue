<script lang="ts" setup></script>

<template>
  <div class="w-full min-h-screen flex flex-col">
    <Header />
    <main class="flex-grow">
      <slot />
    </main>
    <Footer />
  </div>
</template>
