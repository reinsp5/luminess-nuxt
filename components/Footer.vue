<script lang="ts" setup></script>

<template>
  <footer
    class="px-6 py-8 grid grid-cols-1 lg:grid-cols-2 h-auto items-center bg-primary-950"
  >
    <div class="flex flex-col justify-end items-end lg:items-start">
      <div class="text-white">Copyright&copy; Luminess 2022</div>
      <div class="my-4">
        <a href="https://github.com/reinsp5" target="_blank" aria-label="レインのGithubプロフィール">
          <Icon class="mx-1" name="uil:github" color="white" size="32" />
        </a>
        <a href="https://twitter.com/reinsp5" target="_blank" aria-label="レインのXプロフィール">
          <Icon class="mx-1" name="akar-icons:x-fill" color="white" size="32" />
        </a>
        <a href="https://misskey.io/@reinsp5" target="_blank" aria-label="レインのMisskey.ioプロフィール">
          <Icon
            class="mx-1"
            name="simple-icons:misskey"
            color="white"
            size="32"
          />
        </a>
      </div>
    </div>
    <div class="my-4 flex justify-end">
      <NuxtLink to="/" aria-label="ホームページへ移動">
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
