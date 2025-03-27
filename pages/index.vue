<template>
    <div id="MainPage">
      <v-btn color="primary" @click="showPopup = true">Open Popup</v-btn>
      <FormPopup v-if="showPopup" @closePopup="showPopup = false" />
    </div>
  </template>

  <script>
  import FormPopup from '~/components/FormPopup.vue';

  export default {
    components: {
      FormPopup,
    },
    data() {
      return {
        showPopup: false,
      };
    },
  };
  </script>

  <style scoped>
    #MainPage {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
  </style>
