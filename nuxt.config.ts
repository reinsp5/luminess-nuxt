// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@nuxt/image-edge"],
  runtimeConfig: {
    public: {
      cmsBase: process.env.CMS_BASE_URL,
      apiBase: `${process.env.CMS_BASE_URL}/api`,
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
            "/twitter_preview.webp",
        },
      ],
      link: [
        {
          rel: "apple-touch-icon",
          type: "image/webp",
          sizes: "180x180",
          href: "/favicons/apple-touch-icon.webp",
        },
        {
          rel: "icon",
          type: "image/webp",
          sizes: "32x32",
          href: "/favicons/favicon-32x32.webp",
        },
        {
          rel: "icon",
          type: "image/webp",
          sizes: "16x16",
          href: "/favicons/favicon-16x16.webp",
        },
        {
          rel: "icon",
          type: "image/vnd.microsoft.icon",
          href: "/favicons/favicon.ico",
        },
        {
          rel: "manifest",
          href: "/favicons/site.webmanifest",
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
