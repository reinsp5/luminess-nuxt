// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@nuxt/image-edge"],
  runtimeConfig: {
    public: {
      cmsBase: process.env.CMS_BASE_URL,
      apiBase: `${process.env.CMS_BASE_URL}/api`
    },
  },
  app: {
    head: {
      title: "Luminessチームサイト",
      meta: [
        { charset: "utf-8" },
        {
          name: "description",
          content:
            "PSO2およびPSO2NGSのShip5で活動中のチーム「Luminess」のWebサイト",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:site",
          content: "@reinsp5",
        },
        {
          name: "twitter:title",
          content: "チームLuminess Webサイト",
        },
        {
          name: "twitter:description",
          content:
            "PSO2およびPSO2NGSのShip5で活動中のチーム「Luminess」のWebサイト",
        },
        {
          name: "twitter:image",
          content:
            "https://cms.luminess.games/uploads/twitter_preview_beff7dcb7f.webp",
        },
      ],
      htmlAttrs: {
        lang: "ja",
        "data-theme": "corporate",
        class: "h-full",
      },
      bodyAttrs: {
        class: "h-full",
      },
    },
  },
});
