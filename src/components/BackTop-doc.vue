<template>
  <div>
    <h1>back-top文档</h1>
    <Demo :component="BackTop1Demo" />
    <Biu v-model:visible="visible" />
  </div>
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import BackTop1Demo from "./BackTop1.demo.vue";
import { ref } from "vue";
import Biu from "../lib/BackTop.vue";

export default {
  components: { Demo, Biu },
  setup() {
    const visible = ref(false);

    return {
      visible,
      BackTop1Demo,
    };
  },
};
</script>

<style lang="scss" scoped></style>
