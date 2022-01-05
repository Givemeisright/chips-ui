<template>
  <router-view />
</template>

<script>
import { ref, provide } from "vue";
import { router } from "./router";
export default {
  name: "App",
  setup() {
    const width = document.documentElement.clientWidth;
    const menuVisible = ref(width >= 500 ? true : false);
    // 定义全局的值，传给所有组件，通过inject接收
    provide("menuVisible", menuVisible);

    // 当路由切换之后触发
    router.afterEach(() => {
      if (width <= 500) {
        menuVisible.value = false;
      }
    });
  },
};
</script>
