<template>
  <div>dialog文档</div>
  <h1>示例1</h1>
  <Button @click="toggle">显示1</Button>
  <Dialog
    v-model:visible="visible"
    :closeOnClickOverlay="false"
    :ok="ok"
    :cancel="cancel"
  >
    <template v-slot:title>
      <div>弹窗</div>
    </template>
    <template v-slot:content>
      <div>
        <h3><strong>描述:</strong></h3>
      </div>
      <div><p>细节描述</p></div>
    </template>
  </Dialog>
  <h1>示例2</h1>
  <Button @click="showDialog">显示2</Button>
</template>

<script lang="ts">
import { openDialog } from "../lib/openDialog";
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
    // 传入对应参数
    const showDialog = () => {
      openDialog({
        title: "标题",
        content: "窗口内容",
        closeOnClickOverlay: false,
        visible: true,
        // 点击确定是否直接关闭
        ok: () => {
          return false;
        },
        cancel: () => {},
      });
    };
    return { visible, toggle, ok, cancel, showDialog };
  },
};
</script>

<style lang="scss" scoped></style>
