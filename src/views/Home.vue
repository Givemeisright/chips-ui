<template>
  <div>
    <div class="topnav">
      <div class="logo">logo</div>
      <ul class="menu">
        <li>菜单1</li>
        <li>菜单2</li>
      </ul>
    </div>
    <div class="banner">
      <h1>薯片UI</h1>
      <h2>简单，易用，高效的UI组件库</h2>
      <p class="actions">
        <a>起步→</a>
        <a>Github</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.topnav {
  background: pink;
  display: flex;
  padding: 16px;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
}
</style>
