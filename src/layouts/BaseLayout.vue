<template>
  <lay-layout>
    <lay-header>
      <lay-logo></lay-logo>
    </lay-header>
    <lay-side black>
      <lay-menu selectedKey="5" tree>
        <lay-menu-item title="首页" id="1"></lay-menu-item>
        <lay-menu-item title="用户" id="2"></lay-menu-item>
        <lay-menu-item title="角色" id="3"></lay-menu-item>
        <lay-menu-item title="目录">
          <lay-menu-child-item title="菜单一" id="4"></lay-menu-child-item>
          <lay-menu-child-item title="菜单二" id="5"></lay-menu-child-item>
          <lay-menu-child-item title="菜单三" id="6"></lay-menu-child-item>
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