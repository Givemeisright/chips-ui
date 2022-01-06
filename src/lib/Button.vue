<template>
  <button class="chips-button" :class="`theme-${theme}`">
    <slot />
  </button>
</template>

<script lang="ts">
export default {
  props: {
    theme: { type: String, default: "button" },
  },
  setup(props, context) {},
};
</script>

<style lang="scss" scoped></style>
