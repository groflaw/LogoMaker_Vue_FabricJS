<template>
  <div class="mb-6">
    <v-card elevation="10">
      <div class="flex items-center px-3 py-2 contents-center">
        <div class="flex items-center mr-4">
          <v-select
            :items="fonts"
            label="label"
            class="select"
            outlined
            hide-details
            v-model="font"
            @change="handleTextFontChange(item, font)"
          >
            <template v-slot:item="{ item }">
              <div v-html="item" :style="`font-family: ${item}`"></div>
            </template>
            <template v-slot:selection="{ item }">
              <div v-html="item" :style="`font-family: ${item}`"></div>
            </template>
            <template v-slot:label>
              <span></span>
            </template>
          </v-select>
        </div>

        <v-btn-toggle dense multiple v-model="styles">
          <div class="mx-2">
            <v-btn style="height: 56px" @click="handleWeightChange">
              <v-icon>mdi-format-bold</v-icon>
            </v-btn>
          </div>

          <div class="mx-2">
            <v-btn style="height: 56px" @click="handleStyleChange">
              <v-icon>mdi-format-italic</v-icon>
            </v-btn>
          </div>
        </v-btn-toggle>
      </div>
    </v-card>
  </div>
</template>
<script>
/* import textJson from "../../common/data/fonts.json"; */
export default {
  name: "FontToolbox",
  data: () => ({
    font: "",
    fonts: [
      "Abril Fatface",
      "Audiowide",
      "Average",
      "Calligraffitti",
      "Carrois Gothic",
      "Chewy",
      "Chicle",
      "Concert One",
      "Cookie",
      "Creepster",
      "Darker Grotesque",
      "Flamenco",
      "Handlee",
      "Henny Penny",
      "Lancelot",
      "Macondo",
      "Monoton",
      "Nova Oval",
      "Open Sans",
      "Orbitron",
      "Parisienne",
      "Purple Purse",
      "Red Rose",
      "Revalia",
      "Ribeye",
      "Righteous",
      "Sacramento",
      "Sirin Stencil",
      "Spirax",
      "Wellfleet",
      "Yeseva One",
    ],
    styles: [],
  }),
  props: {
    item: {
      type: String,
    },
    handleTextFontChange: {
      type: Function,
    },
    selectedFont: {
      type: String,
    },
    handleFontWeightChange: {
      type: Function,
    },
    fontWeight: {
      type: String,
    },
    handleFontStyleChange: {
      type: Function,
    },
    fontStyle: {
      type: String,
    },
  },
  components: {},
  methods: {
    handleWeightChange() {
      if (this.styles.includes(0)) {
        this.handleFontWeightChange(this.item, "normal");
      } else {
        this.handleFontWeightChange(this.item, "bold");
      }
    },
    handleStyleChange() {
      if (this.styles.includes(1)) {
        this.handleFontStyleChange(this.item, "normal");
      } else {
        this.handleFontStyleChange(this.item, "italic");
      }
    },
  },
  mounted() {
    this.font = this.selectedFont;
    if (this.fontWeight === "bold") {
      this.styles.push(0);
    }
    if (this.fontStyle === "italic") {
      this.styles.push(1);
    }
  },
  watch: {
    item() {
      if (this.fontWeight === "bold" && !this.styles.includes(0)) {
        this.styles.push(0);
      }
      if (this.fontWeight === "normal" && this.styles.includes(0)) {
        const index = this.styles.indexOf(0);
        this.styles.splice(index, 1);
      }
      if (this.fontStyle === "italic" && !this.styles.includes(1)) {
        this.styles.push(1);
      }
      if (this.fontStyle === "normal" && this.styles.includes(1)) {
        const index = this.styles.indexOf(1);
        this.styles.splice(index, 1);
      }
    },
  },
};
</script>
<style scoped>
.select {
  width: 320px;
}
</style>
