<template>
  <button
    class="chips-switch-button"
    :class="{ 'chips-button-checked': check }"
    :disabled="disabled"
  >
    <span
      class="chips-switch-span"
      @click="toggle"
      :class="{ 'chips-span-checked': check }"
      :disabled="disabled"
    ></span>
  </button>
</template>

<script lang="ts">
export default {
  props: {
    check: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const toggle = () => {
      // vue3新方法，类似this.$emit()
      // 第一个参数接收事件，第二个参数提供事件改变的值
      // 注意props接收的是只读的属性
      if (!props.disabled) {
        context.emit("update:check", !props.check);
      }
    };
    return { toggle };
  },
};
</script>

<style lang="scss">
$h: 22px;
$h2: 18px;
$h3: 9px;
.chips-switch-button {
  height: $h;
  width: $h * 2;
  border: none;
  background: #bfbfbf;
  border-radius: $h2;
  position: relative;
  transition: all 250ms ease-in-out;
  &.chips-button-checked {
    background: rgb(18, 199, 33);
  }
  &[disabled] {
    cursor: not-allowed;
  }
}

.chips-switch-span {
  position: absolute;
  top: 2px;
  left: 2px;
  height: $h2;
  width: $h2;
  background: white;
  border-radius: $h3;
  transition: all 250ms ease-in-out;

  &.chips-span-checked {
    left: calc(100% - #{$h2} - 2px);
  }
  &:hover {
    cursor: pointer;
    &[disabled="true"] {
      cursor: not-allowed;
    }
  }
  &:active {
    width: $h2 + 4px;
  }
  &.checked:active {
    width: $h2 + 4px;
    margin-left: -4px;
  }
}
</style>
