<template>
  <div class="m-5">
    <v-container fluid>
      <v-row>
        <v-col sm="3">
          <label for="cpyName" class="mb-5"> Company Name </label>
          <v-text-field
            solo
            id="cpyName"
            label="Company Name"
            class="mt-4 mb-4"
            :value="company"
            v-model="company"
            v-on:keyup="
              handleTextChange('company', company), handleItemChange('company')
            "
          ></v-text-field>
          <label for="Tagline" class="mb-5"> Tagline </label>
          <v-text-field
            solo
            id="Tagline"
            label="Tagline"
            class="mt-4 mb-4"
            :value="tagline"
            v-model="tagline"
            v-on:keyup="
              handleTextChange('tagline', tagline), handleItemChange('tagline')
            "
          ></v-text-field>
          <label for="IconSearch" class="mb-5"> Icon Search </label>
          <v-text-field
            solo
            id="IconSearch"
            label="IconSearch"
            :value="searchIcon"
            v-model="searchIcon"
            class="mt-4 mb-4"
          ></v-text-field>
          <v-card class="w-full p-0" style="height: 260px; overflow-y: auto">
            <div class="flex flex-wrap justify-center">
              <div
                v-for="(item, i) in searchedIcons"
                :key="i"
                class="float-left"
              >
                <v-btn
                  @click="changeIcon(item.icon_url), handleItemChange('icon')"
                  depressed
                  style="height: 64px; width: 64px"
                >
                  <img :src="item.icon_url" class="w-6 h-6" alt="" />
                </v-btn>
              </div>
            </div>
          </v-card>
          <v-btn color="primary" class="w-full mt-4" @click="downloadPng"
            >Download</v-btn
          >
          <a ref="download"></a>
        </v-col>
        <v-col sm="9">
          <v-row>
            <div class="flex justify-center">
              <icon-toolbox
                :handleIconPositionChange="handleIconPositionChange"
                v-if="selectedItem === 'icon'"
              ></icon-toolbox>

              <font-toolbox
                :handleTextFontChange="handleTextFontChange"
                :selectedFont="
                  selectedItem === 'company'
                    ? companyFontFamily
                    : taglineFontFamily
                "
                :handleFontWeightChange="handleFontWeightChange"
                :fontWeight="
                  selectedItem === 'company'
                    ? companyFontWeight
                    : taglineFontWeight
                "
                :handleFontStyleChange="handleFontStyleChange"
                :fontStyle="
                  selectedItem === 'company'
                    ? companyFontStyle
                    : taglineFontStyle
                "
                :item="selectedItem"
                v-else-if="
                  selectedItem === 'company' || selectedItem === 'tagline'
                "
              ></font-toolbox>
              <div v-else class="mb-6 emptyToolbox"></div>
            </div>
          </v-row>

          <!-- <v-col sm="12">{{ companyName }}</v-col> -->
          <v-col
            md="12"
            ref="canvas"
            class="pa-0 logo-customise__canvas"
            style="position: relative"
          >
            <canvas id="c" :width="canvasWidth"></canvas>

            <v-color-picker
              :style="{
                position: 'absolute',
                'z-index': 9,
                top: parseInt(colorIconTop - 100) + 'px',
                left: parseInt(colorIconLeft + 30) + 'px',
              }"
              v-if="showCompanyTextColorPalet"
              :mode.sync="mode"
              show-swatches
              elevation="10"
              hide-inputs
              v-model="companyTextColor"
              swatches-max-height="150px"
            ></v-color-picker>

            <v-color-picker
              :style="{
                position: 'absolute',
                'z-index': 9,
                top: parseInt(colorIconTop - 100) + 'px',
                left: parseInt(colorIconLeft + 30) + 'px',
              }"
              v-if="showTaglineTextColorPalet"
              :mode.sync="mode"
              show-swatches
              elevation="10"
              hide-inputs
              v-model="taglineTextColor"
              swatches-max-height="150px"
            >
            </v-color-picker>
            <v-color-picker
              :style="{
                position: 'absolute',
                'z-index': 9,
                top: parseInt(colorIconTop - 100) + 'px',
                left: parseInt(colorIconLeft + 30) + 'px',
              }"
              v-if="showIconColorPalet"
              :mode.sync="mode"
              show-swatches
              elevation="10"
              hide-inputs
              v-model="iconColor"
              swatches-max-height="150px"
            >
            </v-color-picker>
            <div
              v-if="showCompanyTextColorPalet"
              style="
                position: fixed;
                z-index: 8;
                top: 0;
                left: 0;
                width: 100%;
                height: 100vh;
              "
              @click="showCompanyTextColorPalet = false"
            ></div>
            <div
              v-if="showTaglineTextColorPalet"
              style="
                position: fixed;
                z-index: 8;
                top: 0;
                left: 0;
                width: 100%;
                height: 100vh;
              "
              @click="showTaglineTextColorPalet = false"
            ></div>
            <div
              v-if="showIconColorPalet"
              style="
                position: fixed;
                z-index: 8;
                top: 0;
                left: 0;
                width: 100%;
                height: 100vh;
              "
              @click="showIconColorPalet = false"
            ></div>
          </v-col>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import iconJson from "../common/data/icons.js";
import IconToolbox from "@/components/Toolboxs/IconToolbox";
import FontToolbox from "@/components/Toolboxs/FontToolbox";
import { fabric } from "fabric";
import OAuth from "oauth";

let __svg = null;
let __canvas = null;
let __companyText = null;
let __taglineText = null;
let __bg = null;
let __colorBtn = null;

// key and secret for none-project
const KEY = "823ece0a0e4e4782bac71fa2bd6e25fe";
const SECRET = "829d0fa1ddf345a78e7739deac93b66c";

const oauth = new OAuth.OAuth(
  "http://api.thenounproject.com",
  "http://api.thenounproject.com",
  KEY,
  SECRET,
  "1.0A",
  null,
  "HMAC-SHA1",
  undefined,
  { Accept: "application/json" }
);

fabric.Object.prototype.cornerColor = "rgb(56, 189, 248)";
fabric.Object.prototype.cornerStyle = "circle";
fabric.Object.prototype.hasBorders = false;
fabric.Object.prototype.padding = 8;
fabric.Object.prototype.cornerSize = 10;
fabric.Object.prototype.transparentCorners = false;
fabric.Object.prototype.setControlVisible("mtr", false);
fabric.Object.prototype.setControlVisible("ml", false);
fabric.Object.prototype.setControlVisible("mb", false);
fabric.Object.prototype.setControlVisible("mt", false);
fabric.Object.prototype.setControlVisible("mr", false);

export default {
  name: "LogoMaker",
  data: () => ({
    company: "",
    tagline: "",
    icon: "/img/random.703c58e3.svg",
    companyFontWeight: "normal",
    companyFontSize: 60,
    companyFontFamily: "Open Sans",
    companyTextColor: "#000000",
    companyFontStyle: "normal",
    taglineFontWeight: "bold",
    taglineFontSize: 40,
    taglineFontFamily: "Chewy",
    taglineTextColor: "#000000",
    taglineFontStyle: "italic",
    searchedIcons: iconJson,
    searchIcon: "",
    canvasWidth: Number,
    mode: "hexa",
    showCompanyTextColorPalet: false,
    showTaglineTextColorPalet: false,
    showIconColorPalet: false,
    iconColor: "#436423",
    bgColor: "rgb(153 246 228)" /* "rgb(153 246 228)" */,
    iconX: Number,
    iconY: "",
    svgURL: "",
    companyTextTop: Number,
    companyTextLeft: Number,
    taglineTextTop: Number,
    taglineTextLeft: Number,
    iconLeft: Number,
    iconTop: Number,
    textScaleX: Number,
    textScaleY: Number,
    iconScale: Number,
    iconScaleX: 0.5,
    iconScaleY: 0.5,
    selectedItem: "icon", //'icon', 'company', 'tagline'
    colorIconLeft: Number,
    colorIconTop: Number,
    colorIconColor: "",
  }),
  components: {
    IconToolbox,
    FontToolbox,
  },
  methods: {
    changeIcon(icon) {
      //user change icon by select
      const _this = this;
      __canvas.remove(__svg);
      const { iconScaleX, iconScaleY, iconColor, iconLeft, iconTop } = this;
      fabric.loadSVGFromURL(icon, function (objects, options) {
        __svg = fabric.util.groupSVGElements(objects, options);
        __svg.set({
          name: "icon",
          scaleX: iconScaleX,
          scaleY: iconScaleY,
          originX: "center",
          originY: "center",
          fill: iconColor,
          left: iconLeft,
          top: iconTop,
          hoverCursor: "pointer",
        });
        if (Object.prototype.hasOwnProperty.call(__svg, "_objects")) {
          __svg._objects.forEach((_) => _.set({ fill: iconColor }));
        } else {
          __svg.set({ fill: iconColor });
        }
        __canvas.add(__svg);

        _this.showColorPickerBtn("icon");
        __canvas.setActiveObject(__svg);
      });
    },

    handleTextChange(type, value) {
      //company and tagline change
      if (type === "company") {
        __companyText.set({ text: value });
        __canvas.setActiveObject(__companyText);
        this.showColorPickerBtn("company");
      } else if (type === "tagline") {
        __taglineText.set({ text: value });
        __canvas.setActiveObject(__taglineText);
        this.showColorPickerBtn("tagline");
      }

      __canvas.renderAll();
    },

    handleItemChange(item) {
      //user select item(company, tagline, icon, none)
      this.selectedItem = item;
    },

    showColorPickerBtn(item) {
      const cBtns = __canvas._objects.filter(
        (obj) =>
          obj.name === "company_cBtn" ||
          obj.name === "tagline_cBtn" ||
          obj.name === "icon_cBtn"
      );

      __canvas.remove(...cBtns);

      const { iconScaleX, iconScaleY } = this;
      if (item === "company") {
        this.colorIconLeft =
          this.companyTextLeft + 20 + __companyText.width / 2;
        this.colorIconTop = this.companyTextTop;
        this.colorIconColor = this.companyTextColor;
      } else if (item === "tagline") {
        this.colorIconLeft =
          this.taglineTextLeft + 20 + __taglineText.width / 2;
        this.colorIconTop = this.taglineTextTop;
        this.colorIconColor = this.taglineTextColor;
      } else {
        this.colorIconLeft = this.iconLeft + 20 + __svg.width / 4;
        this.colorIconTop = this.iconTop;
        this.colorIconColor = this.iconColor;
      }

      const _this = this;
      fabric.loadSVGFromURL("/img/chain.2ed7bd72.svg", (objects, options) => {
        __colorBtn = fabric.util.groupSVGElements(objects, options);

        __colorBtn.set({
          name: `${item}_cBtn`,
          scaleX: iconScaleX / 8,
          scaleY: iconScaleY / 8,
          originX: "center",
          originY: "center",
          fill: this.colorIconColor,
          left: this.colorIconLeft,
          top: this.colorIconTop,
          hasControls: false,
          selectable: false,
          hoverCursor: "pointer",
        });
        if (Object.prototype.hasOwnProperty.call(__colorBtn, "_objects"))
          __colorBtn._objects.forEach((_) =>
            _.set({ fill: this.colorIconColor })
          );
        __colorBtn.on("mousedown", function (e) {
          if (e.target.name === "company_cBtn") {
            _this.showCompanyTextColorPalet = true;
          } else if (e.target.name === "tagline_cBtn") {
            _this.showTaglineTextColorPalet = true;
          } else if (e.target.name === "icon_cBtn") {
            _this.showIconColorPalet = true;
          }
        });
        __canvas.add(__colorBtn);
      });
    },

    hideColorPickerBtn() {
      __canvas.remove(__colorBtn);
    },

    handleIconPositionChange(position) {
      switch (position) {
        case "textTop":
          this.companyTextLeft = this.canvasWidth / 2;
          this.companyTextTop = (Number(this.canvasWidth) * 57) / 160 + 40;
          this.taglineTextLeft = this.canvasWidth / 2 + 30;
          this.taglineTextTop = (Number(this.canvasWidth) * 57) / 160 + 100;
          this.iconLeft = Number(this.canvasWidth) / 2;
          this.iconTop =
            (Number(this.canvasWidth) * 57) / 160 - (322 / 2) * this.iconScaleX;
          break;
        case "textDown":
          this.companyTextLeft = this.canvasWidth / 2;
          this.companyTextTop = (Number(this.canvasWidth) * 57) / 160 - 60;
          this.taglineTextLeft = this.canvasWidth / 2 + 30;
          this.taglineTextTop = (Number(this.canvasWidth) * 57) / 160;
          this.iconLeft = Number(this.canvasWidth) / 2;
          this.iconTop =
            (Number(this.canvasWidth) * 57) / 160 +
            40 +
            (322 / 2) * this.iconScaleX;
          break;
        case "textLeft":
          this.companyTextLeft = this.canvasWidth / 2 + 80;
          this.companyTextTop = (Number(this.canvasWidth) * 57) / 160 - 20;
          this.taglineTextLeft = this.canvasWidth / 2 + 50;
          this.taglineTextTop = (Number(this.canvasWidth) * 57) / 160 + 40;
          this.iconLeft =
            Number(this.canvasWidth) / 2 - 60 - (322 / 2) * this.iconScaleY;
          this.iconTop = (Number(this.canvasWidth) * 57) / 160;
          break;
        case "textRight":
          this.companyTextLeft = this.canvasWidth / 2 - 80;
          this.companyTextTop = (Number(this.canvasWidth) * 57) / 160 - 20;
          this.taglineTextLeft = this.canvasWidth / 2 - 50;
          this.taglineTextTop = (Number(this.canvasWidth) * 57) / 160 + 40;
          this.iconLeft =
            Number(this.canvasWidth) / 2 + 70 + (322 / 2) * this.iconScaleY;
          this.iconTop = (Number(this.canvasWidth) * 57) / 160;
          break;
      }
      __svg.set({
        originX: "center",
        originY: "center",
        top: this.iconTop,
        left: this.iconLeft,
      });
      __companyText.set({
        originX: "center",
        originY: "center",
        top: this.companyTextTop,
        left: this.companyTextLeft,
      });
      __taglineText.set({
        originX: "center",
        originY: "center",
        top: this.taglineTextTop,
        left: this.taglineTextLeft,
      });
      __svg.setCoords();
      __companyText.setCoords();
      __taglineText.setCoords();
      this.showColorPickerBtn("icon");
      __canvas.renderAll();
    },

    handleTextFontChange(item, font) {
      if (item === "company") {
        this.companyFontFamily = font;
        __companyText.set({
          fontFamily: font,
        });
      } else if (item === "tagline") {
        this.taglineFontFamily = font;
        __taglineText.set({
          fontFamily: font,
        });
      }
      __canvas.renderAll();
    },

    handleFontWeightChange(item, weight) {
      //weight : "normal", "bold"
      if (item === "company") {
        this.companyFontWeight = weight;
        __companyText.set({
          fontWeight: weight,
        });
      } else if (item === "tagline") {
        this.taglineFontWeight = weight;
        __taglineText.set({
          fontWeight: weight,
        });
      }
      __canvas.renderAll();
    },

    handleFontStyleChange(item, style) {
      //weight : "normal", "italic"
      if (item === "company") {
        this.companyFontStyle = style;
        __companyText.set({
          fontStyle: style,
        });
      } else if (item === "tagline") {
        this.taglineFontStyle = style;
        __taglineText.set({
          fontStyle: style,
        });
      }
      __canvas.renderAll();
    },

    downloadPng() {
      const aTag = this.$refs.download;
      aTag.download = `logo.png`;
      aTag.href = __canvas.toDataURL("image/png");
      aTag.click();
    },
  },
  mounted() {
    this.canvasWidth = this.$refs.canvas.clientWidth;

    //initial config
    this.companyTextLeft = this.canvasWidth / 2;
    this.companyTextTop = (Number(this.canvasWidth) * 57) / 160 + 40;
    this.taglineTextLeft = this.canvasWidth / 2 + 30;
    this.taglineTextTop = (Number(this.canvasWidth) * 57) / 160 + 100;
    this.iconLeft = Number(this.canvasWidth) / 2;
    this.iconTop =
      (Number(this.canvasWidth) * 57) / 160 - (322 / 2) * this.iconScaleX;

    __canvas = new fabric.Canvas("c");
    __bg = __canvas.setDimensions({
      width: this.canvasWidth,
      height: (this.canvasWidth * 3) / 4,
    });
    __bg.set({
      backgroundColor: this.bgColor,
    });

    const { iconScaleX, iconScaleY, iconColor, iconLeft, iconTop } = this;
    fabric.loadSVGFromURL(this.icon, function (objects, options) {
      __svg = fabric.util.groupSVGElements(objects, options);

      __svg.set({
        name: "icon",
        scaleX: iconScaleX,
        scaleY: iconScaleY,
        originX: "center",
        originY: "center",
        fill: iconColor,
        left: iconLeft,
        top: iconTop,
        hoverCursor: "pointer",
      });
      if (Object.prototype.hasOwnProperty.call(__svg, "_objects")) {
        __svg._objects.forEach((_) => _.set({ fill: iconColor }));
      } else {
        __svg.set({ fill: iconColor });
      }
      __canvas.add(__svg);
    });

    __companyText = new fabric.Text(this.company, {
      name: "company",
      textAlign: "center",
      fontSize: this.companyFontSize,
      fontFamily: this.companyFontFamily,
      fill: this.companyTextColor,
      fontWeight: this.companyFontWeight,
      fontStyle: this.companyFontStyle,
    });

    __taglineText = new fabric.Text(this.tagline, {
      name: "tagline",
      textAlign: "center",
      fontSize: this.taglineFontSize,
      fontFamily: this.taglineFontFamily,
      fill: this.taglineTextColor,
      fontWeight: this.taglineFontWeight,
      fontStyle: this.taglineFontStyle,
    });

    __companyText.set({
      originX: "center",
      originY: "center",
      left: this.companyTextLeft,
      top: this.companyTextTop,
      hoverCursor: "pointer",
    });

    __taglineText.set({
      originX: "center",
      originY: "center",
      left: this.taglineTextLeft,
      top: this.taglineTextTop,
      hoverCursor: "pointer",
    });

    __canvas.add(__companyText);
    __canvas.add(__taglineText);

    __companyText.setCoords();
    __taglineText.setCoords();
    __canvas.renderAll();

    const _this = this;

    __canvas.on("object:modified", function (e) {
      if (
        Object.prototype.hasOwnProperty.call(e, "target") &&
        e.target &&
        e.target.get("type") === "text" &&
        e.target.name === "company"
      ) {
        _this.companyTextLeft = e.target.left;
        _this.companyTextTop = e.target.top;
        _this.textScaleX = e.target.scaleX;
        _this.textScaleY = e.target.scaleY;
      }
      if (
        Object.prototype.hasOwnProperty.call(e, "target") &&
        e.target &&
        e.target.get("type") === "text" &&
        e.target.name === "tagline"
      ) {
        _this.taglineTextLeft = e.target.left;
        _this.taglineTextTop = e.target.top;
        _this.textScaleX = e.target.scaleX;
        _this.textScaleY = e.target.scaleY;
      }
      if (
        (Object.prototype.hasOwnProperty.call(e, "target") &&
          e.target &&
          e.target.get("type") === "path") ||
        e.target.get("type") === "group"
      ) {
        _this.iconLeft = e.target.left;
        _this.iconTop = e.target.top;
        _this.iconScaleX = e.target.scaleX;
        _this.iconScaleY = e.target.scaleY;
      }
      __canvas.renderAll();
    });

    __canvas.on("mouse:up", function (e) {
      if (!e.target) {
        _this.hideColorPickerBtn();
        _this.handleItemChange("none");
      } else if (
        Object.prototype.hasOwnProperty.call(e, "target") &&
        e.target &&
        e.target.get("type") === "text" &&
        e.target.name === "company"
      ) {
        _this.showColorPickerBtn("company");
        _this.handleItemChange("company");
      } else if (
        Object.prototype.hasOwnProperty.call(e, "target") &&
        e.target &&
        e.target.get("type") === "text" &&
        e.target.name === "tagline"
      ) {
        _this.showColorPickerBtn("tagline");
        _this.handleItemChange("tagline");
      } else if (
        (Object.prototype.hasOwnProperty.call(e, "target") &&
          e.target &&
          e.target.get("type") === "path") ||
        (e.target.get("type") === "group" && e.target.get("name") === "icon")
      ) {
        _this.showColorPickerBtn("icon");
        _this.handleItemChange("icon");
      }
    });
  },

  watch: {
    searchIcon() {
      if (this.searchIcon === "") {
        this.searchedIcons = iconJson;
      } else {
        const _this = this;
        oauth.get(
          `http://api.thenounproject.com/icons/${this.searchIcon}?limit_to_public_domain=1&limit=30`,
          KEY,
          SECRET,
          function (e, res) {
            if (e) console.error(e);
            else {
              _this.searchedIcons = res.icons.map((icon) => ({
                icon_url: icon.icon_url,
                term: icon.term,
              }));
            }
          }
        );
      }
    },
    companyTextColor() {
      // this.companyTextColor = ;
      __companyText.set({ fill: this.companyTextColor });
      if (Object.prototype.hasOwnProperty.call(__colorBtn, "_objects"))
        __colorBtn._objects.forEach((_) =>
          _.set({ fill: this.companyTextColor })
        );
      __canvas.renderAll();
    },
    iconColor() {
      if (Object.prototype.hasOwnProperty.call(__svg, "_objects")) {
        __svg._objects.forEach((_) => _.set({ fill: this.iconColor }));
      } else {
        __svg.set({ fill: this.iconColor });
      }
      if (Object.prototype.hasOwnProperty.call(__colorBtn, "_objects"))
        __colorBtn._objects.forEach((_) => _.set({ fill: this.iconColor }));
      __canvas.renderAll();
    },
    taglineTextColor() {
      __taglineText.set({ fill: this.taglineTextColor });
      if (Object.prototype.hasOwnProperty.call(__colorBtn, "_objects"))
        __colorBtn._objects.forEach((_) =>
          _.set({ fill: this.taglineTextColor })
        );
      __canvas.renderAll();
    },
  },
};
</script>
<style scoped>
.emptyToolbox {
  height: 74.5px;
}
.colorPicker {
  top: v-bind("colorIconTop") px;
}
</style>
