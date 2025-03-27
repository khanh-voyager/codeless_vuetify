<template>
  <v-dialog v-model="dialog" max-width="400">
    <v-card>
      <v-card-title>
        <span class="headline">ラベル名: 作業前-1</span>
        <v-spacer></v-spacer>
        <v-btn icon @click="closeDialog">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text>
        <v-text-field
          v-model="search"
          label="Search"
          clearable
          @input="filterItems"
        />
        <v-radio-group v-model="radioGroup">
            <v-radio v-for="(item, index) in filteredItems" :key="index" :label="item.label" :value="item.value"></v-radio>
          </v-radio-group>
        </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="closeDialog">完了</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: true,
      selected: null,
      search: '',
      filteredItems: [
        { label: 'circle', value: 'circle' },
        { label: 'triangle', value: 'triangle' },
        { label: 'cross', value: 'cross' },
        { label: 'slash', value: 'slash' },
      ],
      items: [
        { label: 'circle', value: 'circle' },
        { label: 'triangle', value: 'triangle' },
        { label: 'cross', value: 'cross' },
        { label: 'slash', value: 'slash' },
      ],
    };
  },
  methods: {
    closeDialog() {
      this.dialog = false;
      this.$emit('closePopup');
    },
    filterItems() {
      const searchLower = this.search.toLowerCase();
      this.filteredItems = this.items.filter(item =>
        item.label.toLowerCase().includes(searchLower)
      );
    },
  },
};
</script>

<style scoped>
.headline {
  font-weight: bold;
}
</style>
