import Vue from "vue";
import store from "@/store";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import Profile from "../views/Profile.vue";
import Category from "../views/Category.vue";
import postContent from "../views/PostContent.vue";

Vue.use(VueRouter);

const requireAuth = () => (from, to, next) => {
  if (store.getters.getUser.isAuth) return next();
  return next("/");
};

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
    beforeEnter: requireAuth()
  },
  {
    path: "/posts/:category",
    name: "category",
    component: Category
  },
  {
    path: "/posts/:category/:postID",
    name: "postContent",
    component: postContent
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
