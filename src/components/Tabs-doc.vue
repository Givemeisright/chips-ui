<template>
  <div id="topAnchor" >
    <div>Tabs 示例</div>
    <h1>示例1</h1>
    <Tabs v-model:selected="link">
      <Tab title="导航1">内容1</Tab>
      <Tab title="导航2">内容2</Tab>
      <Tab title="导航3">内容3</Tab>
      <Tab title="导航4">内容4</Tab>
      <Tab title="导航5">内容5</Tab>
    </Tabs>
    <h1>示例2</h1>
    <Tabs2 v-model:selected="link2">
      <Tab title="页面1"
        ><div style="width: 50%; height: 8000px; background: red">sss</div></Tab
      >
      <Tab title="页面2">内容2</Tab>
      <Tab title="页面3">内容3</Tab>
      <Tab title="页面4">内容4</Tab>
      <Tab title="页面5">内容5</Tab>
    </Tabs2>
    <Biu  v-model:visible="visible" />
  </div>
</template>

<script lang="ts">
import Tabs from "../lib/Tabs.vue";
import Tabs2 from "../lib/Tabs2.vue";
import Tab from "../lib/Tab.vue";
import { onMounted, ref } from "vue";
import Biu from "./biu.vue";
export default {
  components: {
    Tabs,
    Tabs2,
    Tab,
    Biu,
  },
  setup() {
    const visible = ref(false);
    const link = ref("导航1");
    const link2 = ref("页面1");
    return { link, link2,  visible };
  },
};
</script>
<style lang="scss" scoped>
button {
  position: fixed;
  right: 20px;
  bottom: 20px;
}
</style>
