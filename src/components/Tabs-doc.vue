<template>
  <div id="topAnchor">
    <h1>Tabs 示例</h1>
    <Demo :component="Tabs1Demo" />
    <Biu v-model:visible="visible" />
  </div>
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import Tabs1Demo from "./Tabs1.demo.vue";
import { ref } from "vue";
import Biu from "./biu.vue";
export default {
  components: {
    Demo,
    Biu,
  },
  setup() {
    const visible = ref(false);
    return { Tabs1Demo, visible };
  },
};
</script>
