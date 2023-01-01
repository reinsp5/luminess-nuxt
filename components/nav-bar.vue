<script lang="ts" setup></script>

<template>
  <nav class="navbar">
    <div class="flex-none lg:hidden">
      <button class="btn btn-square btn-ghost">
        <Icon name="ic:baseline-menu" size="30" />
      </button>
    </div>
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-xl">Luminess</a>
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
  </nav>
</template>

<style scoped></style>
