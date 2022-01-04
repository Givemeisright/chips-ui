<template>
  <div>
    <TopNav />
    <div class="banner">
      <h1>薯片UI</h1>
      <h2>简单，易用，高效的UI组件库</h2>
      <p class="actions">
        <router-link to="/doc">起步→</router-link>
        <a href="https://github.com/Givemeisright/chips-ui">Github</a>
      </p>
    </div>
  </div>
</template>

<script lang='ts'>
import TopNav from "../components/Top-nav.vue";
export default {
  components: { TopNav },
  setup(){
    
  }
};
</script>

<style lang="scss" scoped>

.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: lightgreen;
  > .actions{
    padding: 8px 0;
    a {
      margin:0 8px;
      background: #fff;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 8px;
    }
  }
}
</style>
