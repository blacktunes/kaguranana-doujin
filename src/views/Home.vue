<template>
  <a-layout id="components-layout-demo-top-side">
    <HomeBanner />
    <a-layout-header class="header">
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="horizontal"
        :default-selected-keys="['2']"
        :style="{ lineHeight: '64px', overflow: 'hidden' }"
      >
        <a-menu-item key="1">nav 1</a-menu-item>
        <a-menu-item key="2">nav 2</a-menu-item>
        <a-menu-item key="3">nav 3</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 10px 15px">
      <a-layout style="padding: 24px 0; background: #fff">
        <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
          <div style="padding: 0 15px">
            <div class="test">
              <div style="width: 100%;height: 100%">
                <div style="border: 1px solid #000;width: 100%;height: 100%"></div>
              </div>
              <div style="width: 100%;height: 100%">
                <div style="border: 1px solid #000;width: 100%;height: 100%"></div>
              </div>
              <div style="width: 100%;height: 100%">
                <div style="border: 1px solid #000;width: 100%;height: 100%"></div>
              </div>
              <div style="width: 100%;height: 100%">
                <div style="border: 1px solid #000;width: 100%;height: 100%"></div>
              </div>
            </div>
            <HomeNote />
            <!-- <a-card hoverable style="width: 300px">
              <template v-slot:cover>
                <img
                  src="https://i0.hdslb.com/bfs/article/a264ae7e7b91f7da243bcb3c02ce69219a936bad.jpg@860w_482h.webp"
                />
              </template>
              <template v-slot:actions class="ant-card-actions">
                <a-icon type="heart" />
                <a-icon type="message" />
                <a-icon type="clock-circle" />
              </template>
              <a-card-meta
                title="狗妈月刊"
                description="二月月报录入时间区间1月27日~3月6日辣辣七奈军本次推出了【狗妈月刊】第一期 来总结关于狗妈的相关情报，这期的内容有【直播看点】【七奈歌唱】【推特看点】【二创视频推荐】【同人图推荐】。日新月异、物转星移，转眼间在2020年3月6日狗妈来到B站出道已经一周年了，在这一年內狗妈经历了许多大大小小的事情。在此同时狗妈依靠自身魅力和个人能力，吸引来了大量粉丝。为了兼顾到狗妈粉丝因学业、事业等不可抗因素而错过的精彩环节，辣辣七奈军今后将开设【狗妈月刊】来记录一个月內关于狗妈的精彩时刻。疫情开始的202"
              ></a-card-meta>
            </a-card> -->
          </div>
        </a-layout-content>
        <a-layout-sider
          width="300"
          style="background: #fff"
          breakpoint="lg"
          collapsed-width="0"
          :reverseArrow="true"
        >
          <a-space direction="vertical" size="middle">
            <HomeCalendar />
            <a-card>
              <HomeTimeline />
            </a-card>
          </a-space>
        </a-layout-sider>
      </a-layout>
    </a-layout-content>
    <a-layout-footer style="text-align: center">Ant Design ©2018 Created by Ant UED</a-layout-footer>
  </a-layout>
</template>

<script>
import HomeCalendar from '@/components/Home/Calendar'
import HomeBanner from '@/components/Home/Banner'
import HomeTimeline from '@/components/Home/Timeline'
import HomeNote from '@/components/Home/Note'

export default {
  components: {
    HomeCalendar,
    HomeBanner,
    HomeTimeline,
    HomeNote
  },
  methods: {
    onPanelChange(e) {
      console.log(e)
    }
  }
}
</script>

<style lang="less" scoped>
#components-layout-demo-top-side {
  max-width: 1200px;
  width: 100%;
  margin: auto;
  .logo {
    width: 120px;
    height: 31px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px 28px 16px 0;
    float: left;
  }
}
.test {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 120px 120px;
}
</style>
