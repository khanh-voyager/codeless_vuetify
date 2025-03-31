<template>
  <v-dialog v-model="dialog" width="500">
    <v-card>
      <v-card-title>
        <span class="headline">ラベル名: 作業前-1</span>
        <v-spacer></v-spacer>
        <v-btn icon @click="closeDialog">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text>
        <v-text-field v-model="search" label="Search" clearable filled rounded solo dense flat hide-details="auto"
          background-color="blue lighten-5" color="grey darken-1" @input="filterItems">
          <template v-slot:prepend-inner>
            <v-icon color="blue darken-1">mdi-magnify</v-icon>
          </template>
        </v-text-field>
        <v-list>
          <template v-for="(item, index) in filteredItems">
            <v-list-item class="px-0" :key="`${item.value}-${index}`">
              <v-checkbox hide-details class="shrink mt-0" v-model="selected" color="blue" :value="item.value"
                :label="item.label"></v-checkbox>
            </v-list-item>
            <v-divider></v-divider>
          </template>
        </v-list>
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
  props: {
    value: Boolean
  },
  computed: {
    dialog: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      }
    }
  },
  data() {
    return {
      selected: [],
      items: [],
      search: '',
      filteredItems: []
    };
  },

  mounted() {
    this.getCheckboxItems();
  },
  methods: {
    closeDialog() {
      this.dialog = false;
      this.$emit('closePopup');
    },
    async getCheckboxItems() {
      const bodyRequest = {
        "file_path": "nested-folder/sample_data.csv",
        "filters": {
          "defect_code__lte": "9010",
          "display_text_ja__not": "味の違和感(8000_Taste)"
        },
        "order_by": "component_defect_assignment_id,-defect_code",
        "selected_column": { "name": "defect_name", "option": "distinct" }
      };
      try {
        const response = await this.$axios.$post('/filter', bodyRequest);

        // Map the response data to the expected format
        if (response.data && Array.isArray(response.data)) {
          this.items = response.data.map(item => ({
            label: item.defect_name,
            value: item.defect_name
          }));
          // Initialize filteredItems with all items
          this.filteredItems = [...this.items];
        } else {
          console.error('Unexpected response format:', response);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    filterItems() {
      const searchLower = (this.search || '').toLowerCase();
      this.filteredItems = this.items.filter(item =>
        item.label.toLowerCase().includes(searchLower)
      );
    }
  }
};
</script>

<style scoped>
.headline {
  font-weight: bold;
}
</style>
