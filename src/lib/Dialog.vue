<template>
  <teleport to="body">
    <template v-if="visible">
      <div @click="onCloseOnClickOverlay" class="chips-dialog-overlay"></div>
      <div class="chips-dialog-wrapper">
        <div class="chips-dialog">
          <header>
            <slot name="title" />
            <span @click="close" class="chips-dialog-close"></span>
          </header>
          <main>
            <slot name="content" />
          </main>
          <footer>
            <Button @click="ok" level="main">确定</Button>
            <Button @click="cancel">取消</Button>
          </footer>
        </div>
      </div>
    </template>
  </teleport>
</template>

<script lang="ts">
import Button from "./Button.vue";
import { ref } from "vue";

export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true,
    },
    ok: Function,
    cancel: Function,
  },
  components: {
    Button,
  },
  setup(props, context) {
    const close = () => {
      context.emit("update:visible", false);
    };
    const onCloseOnClickOverlay = () => {
      if (props.closeOnClickOverlay) {
        close();
      }
    };
    const ok = () => {
      // 相当于props.ok?.()!==false
      if (props.ok && props.ok() !== false) {
        close();
      }
    };
    const cancel = () => {
        // 相当于props.cancel?.()
      props.cancel && props.cancel();
      close();
    };
    return { close, onCloseOnClickOverlay, ok, cancel };
  },
};
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;
.chips-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 15em;
  max-width: 90%;
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }
  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }
  > header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }
  > main {
    padding: 12px 16px;
  }
  > footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }
  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    &::before,
    &::after {
      content: "";
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }
    // 两条线旋转45°形成×
    // x轴向左移动50%
    &::before {
      transform: translate(-50%, 0) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, 0) rotate(45deg);
    }
  }
}
</style>
