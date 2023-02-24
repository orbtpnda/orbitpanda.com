// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],

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
