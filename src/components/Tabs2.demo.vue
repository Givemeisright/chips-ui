<demo>
常规使用
</demo>
<template>
  <Tabs2 v-model:selected="link2">
    <Tab title="页面1">内容1</Tab>
    <Tab title="页面2">内容2</Tab>
    <Tab title="页面3">内容3</Tab>
    <Tab title="页面4">内容4</Tab>
    <Tab title="页面5">内容5</Tab>
  </Tabs2>
</template>

<script lang="ts">
import Tabs2 from "../lib/Tabs2.vue";
import Tab from "../lib/Tab.vue";
import { ref } from "vue";
export default {
  components: {
    Tabs2,
    Tab,
  },
  setup() {
    const link2 = ref("页面1");
    return {
      link2,
    };
  },
};
</script>
