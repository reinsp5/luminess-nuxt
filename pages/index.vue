<script lang="ts" setup></script>

<template>
  <main class="container mx-auto my-10 px-4">
    <div class="my-5 flex flex-col w-full lg:flex-row">
      <NuxtLink
        to="/about"
        class="card lg:card-side bg-base-100 shadow-xl lg:w-1/2"
      >
        <div class="card-body">
          <h2 class="card-title">Luminessについて</h2>
          <p>チームLuminessについての詳細はこちら</p>
        </div>
      </NuxtLink>
      <div class="divider lg:divider-horizontal"></div>
      <NuxtLink
        to="/members"
        class="card lg:card-side bg-base-100 shadow-xl lg:w-1/2"
      >
        <div class="card-body">
          <h2 class="card-title">メンバー一覧</h2>
          <p>Luminessの所属メンバーはこちら</p>
        </div>
      </NuxtLink>
    </div>
  </main>
</template>

<style scoped></style>
