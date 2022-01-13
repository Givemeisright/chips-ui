<template>
  <div class="demo">
    <h2>{{ component.__sourceCodeTitle }}</h2>
    <div class="demo-component">
      <component :is="component" />
    </div>
    <div class="demo-actions">
      <Button @click="codeVisible = !codeVisible">查看代码</Button>
      <Button id="copy" @click="handleCopy(component.__sourceCodeTitle)">复制代码</Button>
    </div>
    <div v-if="codeVisible" class="demo-code" >
      <pre :id="`${component.__sourceCodeTitle}`" class="language-html" v-html="html"></pre>
    </div>
  </div>
</template>

<script lang="ts">
import "prismjs";
import "prismjs/themes/prism.css";
import Button from "../lib/Button.vue";
import { computed, ref } from "vue";
import { copyDomText } from "../lib/copy.js";
const Prism = (window as any).Prism;
export default {
  props: {
    component: Object,
  },
  components: {
    Button,
  },
  setup(props) {
    const codeVisible = ref(false);
    const html = computed(() => {
      return Prism.highlight(
        props.component.__sourceCode,
        Prism.languages.html,
        "html"
      );
    });
    const handleCopy = (codes) => {
      copyDomText(codes);
    };
    return { Prism, html, codeVisible, handleCopy };
  },
};
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    > pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
    }
  }
}
</style>
