<template>
    <div id="MainPage">
      <v-btn color="primary" @click="showPopup = true">Open Popup</v-btn>
      <FormPopup v-if="showPopup" @closePopup="showPopup = false" />
      <FormCheckboxPopup />
    </div>
  </template>

  <script>
  import FormPopup from '~/components/FormPopup.vue';
  import FormCheckboxPopup from '~/components/FormCheckboxPopup.vue';

  export default {
    components: {
      FormPopup,
      FormCheckboxPopup
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
