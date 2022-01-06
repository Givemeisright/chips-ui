<template>
  <button :class="{ checked: check }">
    <span @click="toggle" :class="{ checked: check }"></span>
  </button>
</template>

<script lang="ts">
export default {
  props: {
    check: Boolean,
  },
  setup(props, context) {
    const toggle = () => {
      // vue3新方法，类似this.$emit()
      // 第一个参数接收事件，第二个参数提供事件改变的值
      // 注意props接收的是只读的属性
      context.emit("update:check", !props.check);
    };
    return { toggle };
  },
};
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button {
  height: $h;
  width: $h * 2;
  border: none;
  background: #bfbfbf;
  border-radius: $h/2;
  position: relative;
  transition: background 250ms ease-in-out;
  &.checked {
    background: rgb(18, 199, 33);
  }
}

span {
  position: absolute;
  top: 2px;
  left: 2px;
  height: $h2;
  width: $h2;
  background: white;
  border-radius: $h2 / 2;
  transition: all 250ms ease-in-out;
  &.checked {
    left: calc(100% - #{$h2} - 2px);
  }
  &:hover {
    cursor: pointer;
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
