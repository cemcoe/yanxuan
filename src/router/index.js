import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import IndexWrap from "@/components/IndexWrap";
import SearchPage from "@/components/SearchPage";
import CartList from "@/components/CartList";
import Detail from "@/components/Detail";
import Login from "@/components/Login";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "IndexWrap",
    component: IndexWrap,
  },
  {
    path: "/searchpage",
    name: "SearchPage",
    component: SearchPage,
  },
  {
    path: "/cartlist",
    name: "CartList",
    component: CartList,
  },
  {
    path: "/detail",
    name: "Detail",
    component: Detail,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
