<template>
  <div>
    <div class="chips-tabs-nav" ref="container">
      <div
        class="chips-tabs-nav-item"
        v-for="(title, index) in titles"
        :ref="
          (el) => {
            if (el) navItems[index] = el;
          }
        "
        :key="index"
        @click="select(title)"
        :class="{ selected: title == selected }"
      >
        {{ title }}
      </div>
      <div class="chips-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="chips-tabs-content">
      <component
        class="chips-tabs-content-items"
        v-for="(component, index) in defaults"
        :class="{ selected: component.props.title === selected }"
        :is="component"
        :key="index"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Tab from "./Tab.vue";
import { computed, onMounted, onUpdated, ref } from "vue";
export default {
  props: {
    selected: String,
    link: String,
  },
  setup(props, context) {
    const defaults = context.slots.default();
    defaults.forEach((tags) => {
      if (tags.type !== Tab) {
        throw new Error("Tabs组件内只能使用Tab标签");
      }
    });
    const current = computed(() => {
      return defaults.filter((tag) => {
        return tag.props.title === props.selected;
      })[0];
    });
    const titles = defaults.map((tags) => {
      return tags.props.title;
    });
    const select = (title: string) => {
      context.emit("update:selected", title);
    };
    // 创建ref用于保存div数组
    const navItems = ref<HTMLDivElement[]>([]);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
    const randers = () => {
      const divs = navItems.value;
      //   筛选出被含有selected的类，即被选中的div
      const result = divs.filter((div) =>
        div.classList.contains("selected")
      )[0];
      //   获得被选中标题的宽度
      const width = result.getBoundingClientRect().width;
      //   把宽度设置传给对应div
      indicator.value.style.width = width + "px";
      //   获取包裹导航栏的div左边的距离
      const leftOld = container.value.getBoundingClientRect().left;
      //   获取当前选中导航栏的div左边的距离
      const leftNew = result.getBoundingClientRect().left;
      //   相减得到显示在页面中的位置
      const left = leftNew - leftOld;
      //   设置到样式中
      indicator.value.style.left = left + "px";
    };
    // 在挂载的时候执行
    onMounted(randers);
    // 数据更新时执行
    onUpdated(randers);
    return {
      defaults,
      titles,
      select,
      current,
      navItems,
      indicator,
      container,
    };
  },
};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.chips-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
      &-indicator {
        position: absolute;
        height: 3px;
        background: $blue;
        left: 0;
        bottom: -1px;
        width: 50px;
        transition: all 250ms linear;
      }
    }
  }
  &-content {
    padding: 8px 0;
    &-items {
      display: none;
      &.selected {
        display: block;
      }
    }
  }
}
</style>
