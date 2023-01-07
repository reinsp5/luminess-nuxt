<script lang="ts" setup></script>

<template>
  <div>
    <div class="lg:container mx-auto">
      <nav-bar />
      <div>
        <slot />
      </div>
    </div>
    <footer class="sticky footer p-10 bg-slate-900 text-neutral-content">
      <div>
        <img
          class="w-96 max-w-full h-auto"
          src="@/assets/luminess_logo_white.svg"
          alt="luminess logo"
        />
        <p class="ml-6">Copyright&copy; Luminess 2022</p>
      </div>
      <div>
        <span class="footer-title">Social</span>
        <div class="grid grid-flow-col gap-4">
          <a href="https://twitter.com/reinsp5" target="_blank" aria-label="レインのTwitterアカウント">
            <Icon name="mdi:twitter" size="40" />
          </a>
          <a href="https://github.com/reinsp5" aria-label="レインのGithubプロフィール">
            <Icon name="mdi:github" size="40" />
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.footer {
  top: 100vh;
}
</style>
