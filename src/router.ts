import {
  createWebHashHistory,
  createRouter,
} from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import IndexDoc from "./components/Index-doc.vue";
import ButtonDoc from "./components/Button-doc.vue";
import DialogDoc from "./components/Dialog-doc.vue";
import TabsDoc from "./components/Tabs-doc.vue";
import SwitchDoc from "./components/Switch-doc.vue";

const history = createWebHashHistory();
export const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: Home },
    {
      path: "/doc",
      component: Doc,
      children: [{ path: "", component: IndexDoc },
      { path: "switch", component: SwitchDoc },
      { path: "button", component: ButtonDoc },
      { path: "dialog", component: DialogDoc },
      { path: "tabs", component: TabsDoc },
    ],
    },
  ],
});

