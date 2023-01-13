<script lang="ts" setup>
import qs from "qs";

const config = useRuntimeConfig();
const query = qs.stringify(
  {
    fields: ["name"],
    populate: {
      avatar: "*",
      classes: {
        fields: ["name", "short"],
        populate: {
          icon: {
            fields: ["url"],
          },
        },
      },
      platforms: {
        fields: ["name", "short"],
        populate: {
          icon: {
            fields: ["url"],
          },
        },
      },
      position: {
        fields: ["name", "short"],
      },
    },
  },
  {
    encodeValuesOnly: true,
  }
);

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

const { data: members } = await useFetch(
  `${config.cmsBase}/members/member?order=_id&depth=2`,
  {
    headers: {
      Authorization: `${config.token}`,
    },
  }
);
</script>

<template>
  <div
    v-for="member in members?.items"
    :key="member._id"
    class="my-12 grid lg:grid-cols-2 shadow-md rounded-xl overflow-hidden border border-solid"
  >
    <figure class="w-full">
      <NuxtImg
        :src="member.avatar.src"
        provider="imagekit"
        sizes="sm:640px md:760px lg:768px xl:1280"
        fit="pad_extract"
      />
    </figure>
    <div class="px-2 pt-4 pb-8 lg:p-8">
      <!-- メンバー名 -->
      <div class="flex">
        <h1 class="w-max ml-4 text-2xl lg:text-3xl xl:text-4xl font-bold">
          {{ member.name }}
        </h1>
        <div
          class="ml-4 py-1 px-4 text-md lg:text-xl text-white rounded-3xl w-max"
          :class="posClass(member.position.slug)"
        >
          {{ member.position.name }}
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
            v-for="useClass in member.useClass"
            :key="useClass.id"
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
            v-for="usePlatform in member.platform"
            :key="usePlatform.id"
            :src="usePlatform.icon.src"
            provider="imagekit"
            sizes="sm:30px md:40px"
            fit="pad_extract"
            class="mx-2 w-7 h-7 lg:w-10 lg:h-10 inline"
            :alt="usePlatform.name"
          />
        </div>
      </div>
      <div class="card-actions justify-end"></div>
    </div>
  </div>
</template>

<style scoped></style>
