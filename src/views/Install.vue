<template>
  <article class="markdown-body" v-html="install"></article>
</template>

<script>
import install from "../markdown/install.md";
export default {
  data() {
    return {
      install,
    };
  },
};
</script>

<style lang="scss" scoped></style>
