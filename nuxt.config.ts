// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "@nuxtjs/robots"],

  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      titleTemplate: "%s - OrbitPanda",
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          charset: "utf-8",
        },
      ],
    },
  },

  tailwindcss: {
    cssPath: "~/assets/scss/tailwind.scss",
    exposeConfig: false,
    injectPosition: 0,
  },

  googleFonts: {
    families: {
      Inter: {
        wght: [300, 400, 500, 600, 700],
      },
    },
    display: "swap",
  },
});
