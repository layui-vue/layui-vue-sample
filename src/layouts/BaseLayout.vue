<template>
  <lay-layout>
    <lay-header>
      <lay-logo class="layui-bg-black">Layui - Sample</lay-logo>
      <lay-menu class="layui-layout-left">
        <lay-menu-item title="导航一" id="0"></lay-menu-item>
        <lay-menu-item title="导航二" id="1"></lay-menu-item>
      </lay-menu>
    </lay-header>
    <lay-side :black="isBlack">
      <lay-menu :selectedKey="selectedKey" :openKeys="openKeys" :tree="isTree">
        <lay-menu-item title="工作空间" id="0">
          <lay-menu-child-item id="1">
            <template v-slot:title>
              <router-link to="/console">控制台</router-link>
            </template>
          </lay-menu-child-item>
          <lay-menu-child-item id="2">
            <template v-slot:title>
              <router-link to="/analysis">分析页</router-link>
            </template>
          </lay-menu-child-item>
        </lay-menu-item>
      </lay-menu>
    </lay-side>
    <lay-body>
      <div style="padding: 10px">
        <router-view></router-view>
      </div>
    </lay-body>
    <lay-footer></lay-footer>
  </lay-layout>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    const isTree = ref(true);
    const isBlack = ref(true);
    const selectedKey = ref("1");
    const openKeys = ref(["0"]);
    return {
      isTree,
      isBlack,
      selectedKey,
      openKeys,
    };
  },
};
</script>