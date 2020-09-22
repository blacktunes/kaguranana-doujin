<template>
  <a-layout id="components-layout-demo-top-side">
    <a-layout-header class="header">
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="horizontal"
        :default-selected-keys="['2']"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">nav 1</a-menu-item>
        <a-menu-item key="2">nav 2</a-menu-item>
        <a-menu-item key="3">nav 3</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 10px 15px">
      <a-layout style="padding: 24px 0; background: #fff">
        <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">Content</a-layout-content>
        <a-layout-sider
          width="300"
          style="background: #fff"
          breakpoint="lg"
          collapsed-width="0"
          :reverseArrow="true"
        >
          <HomeCalendar />
        </a-layout-sider>
      </a-layout>
    </a-layout-content>
    <a-layout-footer style="text-align: center">Ant Design ©2018 Created by Ant UED</a-layout-footer>
  </a-layout>
</template>

<script>
import HomeCalendar from '@/components/Home/Calendar'

export default {
  components: {
    HomeCalendar
  },
  methods: {
    onPanelChange (e) {
      console.log(e)
    }
  }
}
</script>

<style lang="less" scoped>
#components-layout-demo-top-side .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 28px 16px 0;
  float: left;
}
</style>
