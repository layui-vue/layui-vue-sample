<template>
  <lay-layout>
    <lay-header>
      <lay-logo>Layui - Admin</lay-logo>
    </lay-header>
    <lay-side black>
      <lay-menu selectedKey="1" tree>
        <lay-menu-item title="控制台" id="1"></lay-menu-item>
        <lay-menu-item title="分析页" id="2"></lay-menu-item>
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