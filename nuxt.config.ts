// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@nuxtjs/google-fonts",
    "@nuxt/image-edge",
  ],
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
  routeRules: {
    "/_nuxt/**": {
      headers: {
        "Cache-Control": "maxage=31536000",
      },
    },
  },
  runtimeConfig: {
    public: {
      cmsBase: process.env.CMS_BASE_URL,
      token: process.env.TOKEN,
    },
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "Luminessチームサイト",
      meta: [
        { charset: "utf-8" },

        {
          property: "og:image",
          content: "/site_preview.webp",
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
          content: "/site_preview.webp",
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
