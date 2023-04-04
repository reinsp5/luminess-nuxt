<script lang="ts" setup>
import { Member } from "~/types/member";
const props = defineProps<{
  member: Member;
}>();

const posClass = (value: String) => {
  if (!value) return;
  switch (value) {
    case "master":
      return "bg-blue-800";
    case "manager":
      return "bg-teal-800";
    case "common":
      return "bg-rose-800";
    case "visitor":
      return "bg-blue-500";
  }
};
</script>

<template>
  <v-card>
    <v-row>
      <v-col cols="12" md="6">
        <v-img :src="props.member.avatar.src" />
      </v-col>
      <v-col cols="12" md="6">
        <div class="px-2 pt-4 pb-8 lg:p-8">
          <!-- メンバー名 -->
          <div class="flex">
            <h1 class="w-max text-2xl lg:text-3xl xl:text-4xl font-bold">
              {{ props.member.name }}
            </h1>
            <div
              class="ml-4 py-1 px-4 text-md lg:text-xl text-white rounded-3xl w-max"
              :class="posClass(props.member.position.slug)"
            >
              {{ props.member.position.name }}
            </div>
          </div>
        </div>

        <!-- ステータス情報 -->
        <div class="ml-4 mt-8 lg:mt-10">
          <!-- 使用クラス -->
          <div class="mt-4 flex items-center">
            <span class="inline-block w-30 text-md lg:text-lg mr-2"
              >使用クラス</span
            >
            <NuxtImg
              v-for="useClass in props.member.useClass"
              :key="useClass._id"
              :src="useClass.icon.src"
              provider="imagekit"
              sizes="sm:30px md:40px"
              fit="pad_extract"
              class="mx-2 w-7 h-7 lg:w-10 lg:h-10 inline"
              :alt="useClass.name"
            />
          </div>
          <!-- 使用プラットフォーム -->
          <div class="mt-4 flex items-center">
            <span class="inline-block w-30 text-md lg:text-lg mr-2"
              >プレイ環境</span
            >
            <NuxtImg
              v-for="usePlatform in props.member.platform"
              :key="usePlatform._id"
              :src="usePlatform.icon.src"
              provider="imagekit"
              sizes="sm:30px md:40px"
              fit="pad_extract"
              class="mx-2 w-7 h-7 lg:w-10 lg:h-10 inline"
              :alt="usePlatform.name"
            />
          </div>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<style scoped></style>
