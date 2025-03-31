<template>
  <div id="MainPage">
    <v-btn color="primary" @click="showSelectBoxPopup = true">Open Selectbox</v-btn>
    <FormSelectBoxPopup v-model="showSelectBoxPopup" @closePopup="showSelectBoxPopup = false" />

    <v-btn color="red lighten-2" class="ml-4" @click="showCheckboxPopup = true">Open Checkbox</v-btn>
    <FormCheckboxPopup v-model="showCheckboxPopup" @closePopup="showCheckboxPopup = false" />
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
      showSelectBoxPopup: false,
      showCheckboxPopup: false,
    };
  },
  mounted() {
    // Make API request when the page starts
    this.triggerLambdaFunction();
  },
  methods: {
    triggerLambdaFunction() {
      // Replace with your actual API endpoint
      this.$axios.$post('/filter')
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
