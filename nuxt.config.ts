// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon"],
  app: {
    head: {
      title: "Luminessチームサイト",
      meta: [{ charset: "utf-8" }],
      htmlAttrs: {
        lang: "ja",
        "data-theme": "corporate",
      },
    },
  },
});