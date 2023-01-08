// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@nuxtjs/google-fonts"],
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
      apiBase: `${process.env.CMS_BASE_URL}/api`,
    },
  },
  app: {
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
        // {
        //   rel: "preconnect",
        //   href: "https://fonts.googleapis.com",
        // },
        // {
        //   rel: "preconnect",
        //   href: "https://fonts.gstatic.com",
        //   crossorigin: "anonymous",
        // },
        // {
        //   rel: "stylesheet",
        //   href: "https://fonts.googleapis.com/css2?family=BIZ+UDPGothic&display=swap",
        //   media: "print",
        // },
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
