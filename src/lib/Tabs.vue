
<template>
  <div>
    <div class="chips-tabs-nav">
      <div
        class="chips-tabs-nav-item"
        v-for="(title, index) in titles"
        :key="index"
        @click="select(title)"
        :class="{ selected: title == selected }"
      >
        {{ title }}
      </div>
    </div>
    <div class="chips-tabs-content">
      <component class="chips-tabs-content-item" :is="current" :key="selected" />
    </div>
  </div>
</template>

<script lang="ts">
import Tab from "./Tab.vue";
import { computed } from 'vue';
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
        return tag.props.title === props.selected
      })[0]
    })
    const titles = defaults.map((tags) => {
      return tags.props.title;
    });
    const select = (title: string) => {
      context.emit("update:selected", title);
    };
    return { defaults, titles, select, current };
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
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>
