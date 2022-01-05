<template>
  <button :class="{checked}">
    <span @click="toggle" :class="{checked}"></span>
  </button>
</template>

<script lang='ts'>
import { ref } from "vue";
export default {
  setup() {
    const checked = ref(false);
    const toggle = () => {
      checked.value = !checked.value;
    };
    return { checked, toggle };
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
  background: grey;
  border-radius: $h/2;
  position: relative;
  transition: background 250ms ease-in-out;
  &.checked{
    background: rgb(18, 199, 33) ;
  }
}

span.checked{
  left: calc(100% - #{$h2} - 2px);
}
span {
  position: absolute;
  top: 2px;
  left: 2px;
  height: $h2;
  width: $h2;
  background: white;
  border-radius: $h2 / 2;
  transition: left 250ms ease-in-out;
  &:hover{
    cursor: pointer;
  }
}
</style>
