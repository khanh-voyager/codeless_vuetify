// nuxt.config.js
export default {
  buildModules: ["@nuxtjs/vuetify"],
  modules: ["@nuxtjs/vuetify"],
  vue: {
    config: {
      devtools: true,
      productionTip: false,
    },
  },
  vuetify: {
    /* Vuetify options */
    theme: {
      default: "light",
      themes: {
        light: {
          primary: "#3f51b5",
          secondary: "#b0bec5",
          accent: "#8c9eff",
          error: "#b71c1c",
        },
      },
    },
  },
};
