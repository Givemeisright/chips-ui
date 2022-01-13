<template>
  <div class="layout">
    <TopNav toggleMenuVisible colorChange class="nav" />
    <div class="content">
      <aside :class="menuVisible ? 'show' : 'hidden'">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>

          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">开始</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/back-top">BackTop 组件</router-link>
          </li>
        </ol>
      </aside>
      <main @click="closePop">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from "../components/Top-nav.vue";
import { inject, Ref } from "vue";

export default {
  components: { TopNav },
  setup() {
    //   inject接收menuVisible的值
    const menuVisible = inject<Ref<boolean>>("menuVisible");

    const closePop = () => {
      const width = document.documentElement.clientWidth;
      if (width <= 500) {
        menuVisible.value = false;
      }
    };
    return { menuVisible, closePop };
  },
};
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 50px;
    padding-left: 150px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    // position: fixed;
    width: 100%;
    height: 100%;
    margin-top: 0px;
    flex-grow: 1;
    padding: 16px;
  }
  > .show {
    transform: translate(0px);
  }
  > .hidden {
    transform: translate(-150px);
  }
}
aside {
  background: rgba(231, 234, 237, 0.95);
  width: 150px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  transition: all 250ms linear;
  box-shadow: 0px 0px 5px 0px rgb(107, 107, 107);
  z-index: 2;

  > h2 {
    margin: 4px 14px;
  }
  > ol {
    > li {
      > a {
        display: block;
        padding: 4px 16px;
        text-decoration: none;
      }
      .router-link-active {
        background: rgba(255, 255, 255, 0.9);
      }
    }
  }
}

main {
  overflow: auto;
}
</style>
