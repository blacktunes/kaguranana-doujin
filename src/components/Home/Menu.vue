<template>
  <div>
    <a-menu v-model="current" mode="horizontal">
      <a-menu-item key="one">
        <a-icon type="home" />Home
      </a-menu-item>
      <!-- <a-menu-item key="two" disabled>
        <a-icon type="appstore" />Two
      </a-menu-item>
      <a-sub-menu>
        <template v-slot:title>
          <a-icon type="setting" />Three - Submenu
        </template>
        <a-menu-item-group title="Item 1">
          <a-menu-item key="setting:1">Option 1</a-menu-item>
          <a-menu-item key="setting:2">Option 2</a-menu-item>
        </a-menu-item-group>
        <a-menu-item-group title="Item 2">
          <a-menu-item key="setting:3">Option 3</a-menu-item>
          <a-menu-item key="setting:4">Option 4</a-menu-item>
        </a-menu-item-group>
      </a-sub-menu>-->
    </a-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: ['one']
    }
  }
}
</script>
