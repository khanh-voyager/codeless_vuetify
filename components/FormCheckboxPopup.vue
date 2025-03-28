<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
          Click
        </v-btn>
      </template>

      <v-card>
        <v-card-title>
          <span class="headline">ラベル名: 作業前-1</span>
          <v-spacer></v-spacer>
          <v-btn icon @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text>
          <v-list>
            <template v-for="(item, index) in items">
              <v-list-item class="px-0" :key="index">
                <v-checkbox hide-details class="shrink mt-0" v-model="selected" color="blue darken-1"
                  :value="item.value" :label="item.label"></v-checkbox>
              </v-list-item>
              <v-divider></v-divider>
            </template>
          </v-list>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">完了</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      selected: [],
      items: [
        { label: 'circle', value: 'circle' },
        { label: 'triangle', value: 'triangle' },
        { label: 'cross', value: 'cross' },
        { label: 'slash', value: 'slash' },
      ],
    };
  },
};
</script>

<style scoped>
.headline {
  font-weight: bold;
}
</style>
