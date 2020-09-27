<template>
  <div @click="() => showSkeleton = !showSkeleton">
    <a-timeline>
      <a-timeline-item v-for="(item, index) in list" :key="index">
        <a-skeleton v-if="showSkeleton" />
        <div v-else>
          <div>{{item.time}}</div>
          <a @click.stop v-html="format(item.text)" :href="item.url || null" target="_blank"></a>
        </div>
      </a-timeline-item>
    </a-timeline>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      list: [{}]
    }
  },
  computed: {
    ...mapState([
      'showSkeleton'
    ])
  },
  methods: {
    format(str) {
      if (str) {
        return str.replace(/\n/gm, '<br/>')
      }
    }
  },
  mounted() {
    this.list = [
      {
        time: '2020-9-27 12:21',
        text: '同人图推荐',
        url: 'https://t.bilibili.com/439537620111169322?tab=2'
      },
      {
        time: '2020-9-27 11:21',
        text: '#神楽七奈推特搬运##神楽七奈#\n短剧之王\n互动',
        url: 'https://t.bilibili.com/439499008354028554?tab=2'
      },
      {
        time: '2020-9-26 10:47',
        text: '#神楽七奈推特转载##神楽七奈#',
        url: 'https://www.bilibili.com/video/BV1Pi4y1E7CS'
      },
      {
        time: '2020-9-26 09:04',
        text: '#神楽七奈艺人推特搬运##神楽七奈推特搬运##神楽七奈#\nniconico冠名节目直播前\n重大发表（与大桥彩香一同出演节目）\n直播相关\n互动',
        url: 'https://t.bilibili.com/439134120821218046?tab=2'
      }
    ]
  }
}
</script>

<style lang="less" scoped>
</style>
