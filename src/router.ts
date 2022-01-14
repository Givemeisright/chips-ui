import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import ButtonDoc from "./components/Button-doc.vue";
import DialogDoc from "./components/Dialog-doc.vue";
import TabsDoc from "./components/Tabs-doc.vue";
import SwitchDoc from "./components/Switch-doc.vue";
import BackTopDoc from "./components/BackTop-doc.vue";
import intro from "./markdown/intro.md";
import getStarted from "./markdown/get-started.md";
import install from "./markdown/install.md";
// 通过h函数渲染路径
import { h } from "vue";
import Markdown from "./components/markdown.vue";

const history = createWebHashHistory();
// 通过跳转路径时渲染,优化代码
const markdownH = (string) => h(Markdown, { content: string, key: string });
export const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: Home },
    {
      path: "/doc",
      component: Doc,
      children: [
        { path: "", redirect: "/doc/intro" },
        { path: "intro", component: markdownH(intro) },
        { path: "get-started", component: markdownH(getStarted) },
        { path: "install", component: markdownH(install) },
        { path: "switch", component: SwitchDoc },
        { path: "button", component: ButtonDoc },
        { path: "dialog", component: DialogDoc },
        { path: "tabs", component: TabsDoc },
        { path: "back-top", component: BackTopDoc },
      ],
    },
  ],
});
