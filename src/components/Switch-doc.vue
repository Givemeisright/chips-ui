<template>
  <div>
    <br />
    <h1>Switch 示例</h1>
    <Demo :component="Switch1Demo" />
    <Demo :component="Switch2Demo" />
    <Biu v-model:visible="visible" />
  </div>
</template>

<script lang="ts">
import Switch1Demo from "./Switch1.demo.vue";
import Switch2Demo from "./Switch2.demo.vue";
import Biu from "../lib/BackTop.vue";
import Demo from "./Demo.vue";
import { ref } from "vue";

export default {
  components: { Demo, Biu },
  setup() {
    const visible = ref(false);

    return {
      Switch1Demo,
      Switch2Demo,
      visible,
    };
  },
};
</script>

<style lang="scss" scoped></style>
