<template>
  <div id="MainPage">
    <v-btn color="primary" @click="showPopup = true">Open Popup</v-btn>
    <FormSelectBoxPopup v-if="showPopup" @closePopup="showPopup = false" />
    <FormCheckboxPopup />
  </div>
</template>

<script>
import FormCheckboxPopup from '~/components/FormCheckboxPopup.vue';
import FormSelectBoxPopup from '~/components/FormSelectBoxPopup.vue';

export default {
  components: {
    FormSelectBoxPopup,
    FormCheckboxPopup
  },
  data() {
    return {
      showPopup: false,
      apiResponse: null,
    };
  },
  mounted() {
    // Make API request when the page starts
    this.triggerLambdaFunction();
  },
  methods: {
    triggerLambdaFunction() {
      // Replace with your actual API endpoint
      this.$axios.$post('/staging/filter')
        .then(response => {
          console.log('Triggered Lambda!');
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  }
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
