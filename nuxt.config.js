// nuxt.config.js
export default {
  buildModules: ["@nuxtjs/vuetify"],
  modules: ["@nuxtjs/vuetify", "@nuxtjs/axios"],
  vue: {
    config: {
      devtools: true,
      productionTip: false,
    },
  },
  publicRuntimeConfig: {
    baseUrl: process.env.API_BASE_URL,
    apiKey: process.env.X_API_KEY,
  },
  axios: {
    proxy: false,
    baseURL: process.env.API_BASE_URL,
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
