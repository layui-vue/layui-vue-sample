<template>
  <div>
     控制台
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
