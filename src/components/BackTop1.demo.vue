<demo>
常规使用
</demo>
<template>
  <span>
    <BackTop class="BackTop" v-model:visible="v" />
  </span>
</template>

<script lang="ts">
import { ref } from "@vue/reactivity";
import {BackTop} from "../lib/index";
export default {
  components: {
    BackTop,
  },
  setup() {
    const v = ref(true);

    return { v };
  },
};
</script>
<style lang="scss" scoped>
// 使用时删除
.BackTop{
  position: relative;
  left:0px;
  top: 0px;
}
</style>