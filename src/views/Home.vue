<template>
  <div>
    <div class="topNavBanner">
      <TopNav />
      <div class="banner">
        <h1>齿轮UI</h1>
        <h2>简单，易用，高效的UI组件库</h2>
        <p class="actions">
          <router-link to="/doc">起步→</router-link>
          <a class="gitHub" href="https://github.com/Givemeisright/chips-ui"
            >Github</a
          >
        </p>
      </div>
    </div>
    <div class="features">
      <ul>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-vue"></use>
          </svg>
          <h3>基于 Vue 3</h3>
          <p>骄傲地使用了 Vue 3 Composition API</p>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-typescript"></use>
          </svg>
          <h3>基于 TypeScript</h3>
          <p>源代码采用 TypeScript 书写（非严格检查）</p>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-gears"></use>
          </svg>
          <h3>代码易读</h3>
          <p>每个组件的源代码都极其简洁</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from "../components/Top-nav.vue";
export default {
  components: { TopNav },
  setup() {},
};
</script>

<style lang="scss" scoped>
$buttonColor: #1c243e;
$border-radius: 20px;
$color: #fafafa;
.features {
  margin: 64px auto;
  width: 400px;
  color: $buttonColor;
  @media (min-width: 800px) {
    width: 800px;
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }
  > ul {
    display: flex;
    flex-wrap: wrap;
    > li {
      width: 400px;
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      > h3 {
        grid-area: title;
        font-size: 28px;
      }
      > p {
        grid-area: text;
      }
    }
  }
}
.banner {
  padding: 120px 0;
  color: $color;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 1.4em;
  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: $buttonColor;
      display: inline-block;
      padding: 10px 24px;
      border-radius: $border-radius;
      color: #ffffff;
      transform: rotateY(-20deg) rotateX(30deg);
      &:hover {
        text-decoration: none;
        transform: rotateY(20deg) rotateX(30deg);
        box-shadow: -5px 5px 10px 1px rgba(28, 36, 62, 0.5);
        transition: all 250ms;
      }
    }
    .gitHub {
      color: $buttonColor;
      background: #ffffff;
    }
  }
}
.topNavBanner {
  background: rgb(171, 173, 183);
  background: linear-gradient(
    145deg,
    rgba(171, 173, 183, 1) 0%,
    rgba(91, 97, 116, 1) 100%
  );

  -webkit-clip-path: polygon(
    0 0,
    100% 0,
    100% 95%,
    97.5% 95%,
    97.5% 100%,
    92.5% 100%,
    92.5% 95%,
    87.5% 95%,
    87.5% 100%,
    82.5% 100%,
    82.5% 95%,
    77.5% 95%,
    77.5% 100%,
    72.5% 100%,
    72.5% 95%,
    67.5% 95%,
    67.5% 100%,
    62.5% 100%,
    62.5% 95%,
    57.5% 95%,
    57.5% 100%,
    52.5% 100%,
    52.5% 95%,
    47.5% 95%,
    47.5% 100%,
    42.5% 100%,
    42.5% 95%,
    37.5% 95%,
    37.5% 100%,
    32.5% 100%,
    32.5% 95%,
    27.5% 95%,
    27.5% 100%,
    22.5% 100%,
    22.5% 95%,
    17.5% 95%,
    17.5% 100%,
    12.5% 100%,
    12.5% 95%,
    7.5% 95%,
    7.5% 100%,
    2.5% 100%,
    2.5% 95%,
    0 95%
  );
  clip-path: polygon(
    0 0,
    100% 0,
    100% 95%,
    97.5% 95%,
    97.5% 100%,
    92.5% 100%,
    92.5% 95%,
    87.5% 95%,
    87.5% 100%,
    82.5% 100%,
    82.5% 95%,
    77.5% 95%,
    77.5% 100%,
    72.5% 100%,
    72.5% 95%,
    67.5% 95%,
    67.5% 100%,
    62.5% 100%,
    62.5% 95%,
    57.5% 95%,
    57.5% 100%,
    52.5% 100%,
    52.5% 95%,
    47.5% 95%,
    47.5% 100%,
    42.5% 100%,
    42.5% 95%,
    37.5% 95%,
    37.5% 100%,
    32.5% 100%,
    32.5% 95%,
    27.5% 95%,
    27.5% 100%,
    22.5% 100%,
    22.5% 95%,
    17.5% 95%,
    17.5% 100%,
    12.5% 100%,
    12.5% 95%,
    7.5% 95%,
    7.5% 100%,
    2.5% 100%,
    2.5% 95%,
    0 95%
  );
}
</style>
