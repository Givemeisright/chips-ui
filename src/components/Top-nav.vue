<template>
  <div onselectstart="false" class="topNav" :class="{ topNavColorChange: colorChange }">
    <span v-if="toggleMenuVisible" class="toggleAside" @click="toggleMenu" 
      ><svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-menu"></use>
      </svg>
    </span>
    <div class="logo">
      <router-link to="/">
        <svg class="icon">
          <use xlink:href="#icon-gear"></use>
        </svg>
      </router-link>
    </div>
    <ul class="menu">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
export default {
  props: {
    toggleMenuVisible: {
      type: Boolean,
      default: false,
    },
    colorChange: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    // inject接收menuVisible的值
    const menuVisible = inject<Ref<boolean>>("menuVisible");
    // 同步修改inject接收menuVisible的值，侧边栏通过该值，决定是否显示
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    return { toggleMenu };
  },
};
</script>

<style lang="scss" scoped>
.topNav {
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 3;
  justify-content: center;
  align-items: center;
  &.topNavColorChange {
    background: rgb(171, 173, 183);
    background: linear-gradient(
      145deg,
      rgba(171, 173, 183, 1) 0%,
      rgba(91, 97, 116, 1) 100%
    );
  }
  > .logo {
    max-width: 6em;
    margin-right: auto;
    .icon {
      animation: loading 15s linear infinite;
      @keyframes loading {
        /*以百分比来规定改变发生的时间 也可以通过"from"和"to",等价于0% 和 100%*/
        0% {
          /*rotate(2D旋转) scale(放大或者缩小) translate(移动) skew(翻转)*/
          transform: rotate(0deg);
        }

        100% {
          transform: rotate(360deg);
        }
      }
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    border: 1px solid white;
    border-radius: 10px;

    > li {
      color: #fafafa;
      margin: 3px 0.7em;
    }
  }
  > .toggleAside {
    display: none;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    > svg {
      width: 24px;
      height: 24px;
    }
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>
