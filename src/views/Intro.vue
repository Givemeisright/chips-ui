<template>
  <article class="markdown-body" v-html="intro"></article>
</template>

<script>
import intro from "../markdown/intro.md";
export default {
  data() {
    return {
      intro,
    };
  },
};
</script>

<style lang="scss" scoped></style>
