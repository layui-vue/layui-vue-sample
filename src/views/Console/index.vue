<template>
  <div>
    <lay-button-container>
      <lay-button>默认按钮</lay-button>
      <lay-button>重要按钮</lay-button>
    </lay-button-container>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {

    const selected = ref("1");

    return {
      selected,
    };
  },
});
</script>
