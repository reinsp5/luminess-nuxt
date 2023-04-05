<script lang="ts" setup>
import { mdiTwitter, mdiGithub } from "@mdi/js";
</script>

<template>
  <v-footer class="px-10 py-8 bg-primary-darken-8 d-flex flex-column">
    <div class="mr-auto">
      <v-img
        src="/images/luminess_logo_white_without_background.svg"
        alt="luminess Logo"
        class="no-padding-image lg:w-96"
        contain
      />
      <p class="mt-4">Copyright&copy; Luminess 2022</p>
    </div>
    <div class="ml-auto">
      <span class="footer-title">Social</span>
      <div class="grid grid-flow-col gap-4">
        <a
          href="https://twitter.com/reinsp5"
          target="_blank"
          aria-label="レインのTwitterアカウント"
        >
          <v-icon size="40">{{ mdiTwitter }}</v-icon>
        </a>
        <a
          href="https://github.com/reinsp5"
          aria-label="レインのGithubプロフィール"
        >
          <v-icon size="40">{{ mdiGithub }}</v-icon>
        </a>
      </div>
    </div>
  </v-footer>
</template>

<style scoped>
.no-padding-image .v-image__image {
  padding: 0 !important;
}
</style>
