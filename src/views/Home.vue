<template>
  <div class="home">
    <div style="margin: 0 15px">
      <HomeBanner />
      <HomeMenu />
      <a-row
        :gutter="[8,8]"
        type="flex"
        justify="space-around"
        align="middle"
        style="margin-top: 10px"
      >
        <a-col :sm="8" :xs="0">
          <HomeCalendar />
        </a-col>
        <a-col :sm="16" :xs="24">
          <a-card>
            <div class="test">
              <div style="width: 100%;height: 100%">
                <div style="padding:0 15px;width: 100%;height: 100%">
                  <a-skeleton />
                </div>
              </div>
              <div style="width: 100%;height: 100%">
                <div style="padding:0 15px;width: 100%;height: 100%">
                  <a-skeleton />
                </div>
              </div>
              <div style="width: 100%;height: 100%">
                <div style="padding:0 15px;width: 100%;height: 100%">
                  <a-skeleton />
                </div>
              </div>
              <div style="width: 100%;height: 100%">
                <div style="padding:0 15px;width: 100%;height: 100%">
                  <a-skeleton />
                </div>
              </div>
            </div>
          </a-card>
        </a-col>
      </a-row>
      <a-row :gutter="[8,8]">
        <a-col />
        <a-col :xs="24" :sm="0">
          <a-card>
            <HomeTimeline />
          </a-card>
        </a-col>
      </a-row>
      <a-row :gutter="[8,8]">
        <a-col :xs="24" :sm="14">
          <a-card>
            <HomeNote />
          </a-card>
        </a-col>
        <a-col :xs="0" :sm="10">
          <a-card>
            <HomeTimeline />
          </a-card>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import HomeBanner from '@/components/Home/Banner'
import HomeMenu from '@/components/Home/Menu'
import HomeCalendar from '@/components/Home/Calendar'
import HomeNote from '@/components/Home/Note'
import HomeTimeline from '@/components/Home/Timeline'

export default {
  components: {
    HomeBanner,
    HomeMenu,
    HomeCalendar,
    HomeNote,
    HomeTimeline
  },
  methods: {
    onPanelChange(e) {
      console.log(e)
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  max-width: 1200px;
  width: 100%;
  margin: auto;
  .test {
    height: 350px - 48px;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 50% 50%;
  }
}
</style>
