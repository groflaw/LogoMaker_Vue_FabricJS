<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
<style>
@import "styles/index.css";
@font-face {
  font-family: "Open Sans";
  src: url("./assets/fonts/opensans.woff");
}
@font-face {
  font-family: "Calligraffitti";
  src: url("./assets/fonts/Calligraffitti-Regular.ttf");
}
</style>
