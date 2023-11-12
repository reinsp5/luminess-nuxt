<script lang="ts" setup></script>

<template>
  <footer
    class="px-6 py-8 grid grid-cols-1 md:grid-cols-2 h-auto items-center bg-[#0C111B]"
  >
    <div class="flex flex-col justify-end items-end md:items-start">
      <div class="text-white">Copyright&copy; Luminess 2022</div>
      <div>
        <a href="https://github.com/reinsp5" target="_blank">
          <Icon class="mx-1" name="uil:github" color="white" size="32" />
        </a>
        <a href="https://twitter.com/reinsp5" target="_blank">
          <Icon class="mx-1" name="akar-icons:x-fill" color="white" size="32" />
        </a>
        <a href="https://misskey.io/@reinsp5" target="_blank">
          <Icon
            class="mx-1"
            name="simple-icons:misskey"
            color="white"
            size="32"
          />
        </a>
      </div>
    </div>
    <div class="flex justify-end">
      <NuxtLink>
        <NuxtImg
          width="300"
          height="60"
          src="/images/luminess_logo_white_without_background.svg"
          alt="Luminess"
        />
      </NuxtLink>
    </div>
  </footer>
</template>

<style scoped></style>
