<template>
  <div>
    <h1>dialog文档</h1>
    <Demo :component="Dialog1Demo" />
    <Demo :component="Dialog2Demo" />
    <Biu v-model:visible="visible" />
  </div>
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import Dialog1Demo from "./Dialog1.demo.vue";
import Dialog2Demo from "./Dialog2.demo.vue";
import { ref } from "vue";
import Biu from "../lib/BackTop.vue";

export default {
  components: { Demo, Biu },
  setup() {
    const visible = ref(false);

    return {
      Dialog1Demo,
      Dialog2Demo,
      visible,
    };
  },
};
</script>

<style lang="scss" scoped></style>
