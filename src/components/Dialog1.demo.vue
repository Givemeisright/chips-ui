<demo>
常规使用
</demo>
<template>
  <div>
    <Button @click="toggle">打开对话框</Button>
    <Dialog
      v-model:visible="visible"
      :closeOnClickOverlay="false"
      :ok="ok"
      :cancel="cancel"
    >
      <template v-slot:title>
        <strong>hi</strong>
        <div>弹窗</div>
      </template>
      <template v-slot:content>
        <div>
          <h3><strong>描述:</strong></h3>
        </div>
        <div><p>细节描述</p></div>
      </template>
    </Dialog>
  </div>
</template>

<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { ref } from "vue";
export default {
  components: {
    Dialog,
    Button,
  },
  setup() {
    const visible = ref(false);
    const toggle = () => {
      visible.value = !visible.value;
    };
    const ok = () => {
      return false;
    };
    const cancel = () => {};

    return {
      visible,
      toggle,
      ok,
      cancel,
    };
  },
};
</script>
