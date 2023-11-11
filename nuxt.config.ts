export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "nuxt-swiper",
    "nuxt-icon",
  ],
  // Nitroの設定
  nitro: {
    preset: "cloudflare-pages",
    prerender: {
      crawlLinks: true,
    },
  },
  // NuxtImageの設定
  image: {
    imagekit: {
      baseURL: "",
    },
  },
  // GoogleFontsの設定
  googleFonts: {
    display: "swap",
    families: {
      "IBM+Plex+Sans+JP": true,
    },
  },
  // Swiperの設定
  swiper: {
    prefix: "Swiper",
  },
  runtimeConfig: {
    newt: {
      spaceUid: process.env.NUXT_NEWT_SPACE_UID || "",
      apiToken: process.env.NUXT_NEWT_API_TOKEN || "",
      cdnApiToken: process.env.NUXT_NEWT_CDN_API_TOKEN || "",
    },
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "Luminessチームサイト",
      htmlAttrs: {
        lang: "ja",
      },
      meta: [
        { charset: "utf-8" },
        {
          property: "og:image",
          content: "https://luminess.games/site_preview.webp",
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
          name: "twitter:image",
          content: "https://luminess.games/site_preview.webp",
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
    },
  },
});
