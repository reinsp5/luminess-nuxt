<script lang="ts" setup>
// SEOメタ情報を設定
const pageTitle = "チームLuminess Webサイト";
const pageDescription =
  "PSO2およびPSO2NGSのShip5で活動中のチーム「Luminess」のWebサイト。";
useSeoMeta({
  description: pageDescription,
  ogType: "website",
  ogUrl: "https://luminess.games/",
  ogTitle: pageTitle,
  ogDescription: pageDescription,
  ogSiteName: pageTitle,
  twitterTitle: pageTitle,
  twitterDescription: pageDescription,
});

const features = [
  {
    name: "Luminessについて",
    description:
      "当チームの運営方針や、当サイトの技術スタックなどについて記載しています。",
    icon: "fluent:info-24-filled",
    href: "/about",
  },
  {
    name: "メンバー一覧",
    description: "当チームのメンバーについて記載しています。",
    icon: "mingcute:group-fill",
    href: "/members",
  },
];
</script>

<template>
  <article class="2xl:p-4">
    <section class="container mx-auto">
      <Hero />
    </section>
    <section class="container mx-auto">
      <div class="py-12">
        <div class="mx-auto max-w-8xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:max-w-4xl">
            <dl
              class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
            >
              <div
                v-for="feature in features"
                :key="feature.name"
                class="relative pl-16 hover:bg-slate-200 rounded-xl transition-colors"
              >
                <NuxtLink :to="feature.href" :aria-label="feature.name + 'ページへ移動'">
                  <dt class="text-base font-semibold leading-7 text-gray-900">
                    <div
                      class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#0C111B]"
                    >
                      <Icon :name="feature.icon" color="white" size="20" />
                    </div>
                    <span class="text-xl font-bold">{{ feature.name }}</span>
                  </dt>
                  <dd class="mt-2 text-base leading-7 text-gray-600">
                    {{ feature.description }}
                  </dd>
                </NuxtLink>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<style scoped></style>
