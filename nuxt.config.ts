import vuetify from "vite-plugin-vuetify";

export default defineNuxtConfig({
  ssr: true,
  experimental: {
    inlineSSRStyles: false,
  },
  css: ["vuetify/styles"],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    ssr: {
      noExternal: ["vuetify"],
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@nuxtjs/google-fonts",
    "@nuxt/image-edge",
    "@nuxtjs/device",
    async (_, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config: any) =>
        config.plugins.push(vuetify({}))
      );
    },
  ],
  device: {
    refreshOnResize: true,
  },
  image: {
    imagekit: {
      baseURL: "",
    },
  },
  googleFonts: {
    display: "swap",
    families: {
      "BIZ+UDPGothic": true,
      Lato: [400],
      Raleway: {
        wght: [400],
        ital: [400],
      },
    },
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
