<template>
<lay-layout>
  <lay-header>
    <lay-logo></lay-logo>
  </lay-header>
  <lay-side>
    <lay-menu>
      <lay-menu-item title="控制台"></lay-menu-item>
      <lay-menu-item title="分析页"></lay-menu-item>
    </lay-menu>
  </lay-side>
  <lay-body>
    <div style="padding:10px">
      <router-view></router-view>
    </div>
  </lay-body>
  <lay-footer></lay-footer>
</lay-layout>
</template>