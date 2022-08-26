<template>
  <div class="mb-6">
    <v-card elevation="10">
      <div class="flex px-3 py-2" style="height: 72px">
        <div class="m-2">
          <v-btn
            icon
            class="hover:bg-slate-700 icon"
            dense
            @click="handleIconPositionChange(`textTop`)"
          >
            <v-icon>mdi-arrow-up-drop-circle-outline</v-icon>
          </v-btn>
        </div>
        <div class="m-2">
          <v-btn
            icon
            class="hover:bg-slate-700 icon"
            @click="handleIconPositionChange(`textDown`)"
          >
            <v-icon>mdi-arrow-down-drop-circle-outline</v-icon>
          </v-btn>
        </div>
        <div class="m-2">
          <v-btn
            icon
            class="hover:bg-slate-700 icon"
            @click="handleIconPositionChange(`textLeft`)"
          >
            <v-icon>mdi-arrow-left-drop-circle-outline</v-icon>
          </v-btn>
        </div>
        <div class="m-2">
          <v-btn
            icon
            class="hover:bg-slate-700 icon"
            @click="handleIconPositionChange(`textRight`)"
          >
            <v-icon>mdi-arrow-right-drop-circle-outline</v-icon>
          </v-btn>
        </div>
      </div>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "IconToolbox",
  props: {
    handleIconPositionChange: {
      type: Function,
    },
  },
};
</script>
<style scoped>
.icon:hover {
  color: white;
}
</style>
