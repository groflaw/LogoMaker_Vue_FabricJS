import Vue from "vue";
import VueRouter from "vue-router";
import LogoMaker from "@/components/LogoMaker";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "logo",
    component: LogoMaker,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
