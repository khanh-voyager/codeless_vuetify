<template>
  <v-dialog v-model="dialog" max-width="400">
    <v-card>
      <v-card-title>
        <span class="headline">ラベル名: 作業前-1</span>
      </v-card-title>

      <v-card-text>
        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-list-item-action>
              <v-radio :value="item.value" v-model="selected" />
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.label }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">完了</v-btn>
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
      items: [
        { label: '○○', value: 'circle' },
        { label: '○△', value: 'triangle' },
        { label: '○×', value: 'cross' },
        { label: '○／', value: 'slash' },
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
