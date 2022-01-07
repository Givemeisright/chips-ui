<template>
  <div>dialog文档</div>
  <h1>实例1</h1>
  <Button @click="toggle">显示</Button>
  <Dialog
    v-model:visible="visible"
    :closeOnClickOverlay="false"
    :ok="ok"
    :cancel="cancel"
  >
  <template v-slot:title>
      <div>
          弹窗
      </div>
  </template>
  <template v-slot:content>
     <div><h3><strong>描述:</strong></h3></div>
    <div><p>细节描述</p></div>
  </template>
    
  </Dialog>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
import Dialog from "../lib/Dialog.vue";
import { ref } from "vue";

export default {
  components: { Dialog, Button },
  setup() {
    const visible = ref(false);
    const toggle = () => {
      visible.value = !visible.value;
    };
    const ok = () => {
      return false;
    };
    const cancel = () => {};
    return { visible, toggle, ok, cancel };
  },
};
</script>

<style lang="scss" scoped></style>
