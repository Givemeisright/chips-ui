import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import {
  createWebHashHistory,
  createRouter,
  createWebHistory,
} from "vue-router";
import Layout from "./components/Layout.vue";
import Layout2 from "./components/Layout2.vue";

const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [
      { path: "/", component: Layout },
      { path: "/a", component: Layout2 }
    ],
});

const app = createApp(App);
app.use(router);
app.mount("#app");
