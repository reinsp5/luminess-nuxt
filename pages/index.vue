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
    name: "Push to deploy",
    description:
      "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    icon: "fluent:info-24-filled",
  },
  {
    name: "SSL certificates",
    description:
      "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
    icon: "mingcute:group-fill",
  },
];
</script>

<template>
  <article class="2xl:p-4">
    <section class="container mx-auto">
      <Hero />
    </section>
    <section class="container mx-auto">
      <div class="bg-white py-12">
        <div class="mx-auto max-w-8xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:text-center">
            <h2 class="text-base font-semibold leading-7 text-indigo-600">
              Deploy faster
            </h2>
            <p
              class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Everything you need to deploy your app
            </p>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
              Suspendisse eget egestas a elementum pulvinar et feugiat blandit
              at. In mi viverra elit nunc.
            </p>
          </div>
          <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl
              class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
            >
              <div
                v-for="feature in features"
                :key="feature.name"
                class="relative pl-16"
              >
                <dt class="text-base font-semibold leading-7 text-gray-900">
                  <div
                    class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#0C111B]"
                  >
                    <Icon :name="feature.icon" color="white" size="20" />
                  </div>
                  {{ feature.name }}
                </dt>
                <dd class="mt-2 text-base leading-7 text-gray-600">
                  {{ feature.description }}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<style scoped></style>
