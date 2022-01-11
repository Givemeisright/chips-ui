<template>
  <Switch v-model:check="checked" disabled />
</template>

<script lang="ts">
import Switch from "../lib/Switch.vue";
import { ref } from "vue";
export default {
  components: {
    Switch,
  },
  setup() {
    const checked = ref(false);
    const disabled = ref(true);
    return { checked, disabled };
  },
};
</script>
