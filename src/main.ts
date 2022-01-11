import "./index.scss";
import "./lib/chips.scss";
import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import "github-markdown-css";
import Markdown from "./components/markdown.vue";

const app = createApp(App);
app.use(router);
app.mount("#app");
// 注册全局组件
app.component("Markdown", Markdown);
