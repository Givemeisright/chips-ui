<demo>
一键打开 Dialog
</demo>
<template>
  <div>
    <Button @click="showDialog">打开对话框</Button>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
import { ref, h } from "vue";
import { openDialog } from "../lib/openDialog";
export default {
  components: {
    Button,
  },
  setup() {
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
    return { showDialog };
  },
};
</script>
