<template>
  <div>
    <lay-button-container>
      <lay-button>默认按钮</lay-button>
      <lay-button>重要按钮</lay-button>
    </lay-button-container>
    <lay-form>
      <lay-radio label="1" v-model="selected">写作</lay-radio>
      <lay-radio label="2" v-model="selected">画画</lay-radio>
      <lay-radio label="3" v-model="selected">运动</lay-radio>
    </lay-form>
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
