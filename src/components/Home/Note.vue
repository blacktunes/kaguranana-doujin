<template>
  <div>
    <a-list item-layout="vertical" size="large" :data-source="list">
      <template v-slot:renderItem="item">
        <a-list-item :key="item.title">
          <a-skeleton :loading="showSkeleton" avatar>
            <a-list-item-meta>
              <template v-slot:title>
                <a @click.stop :href="item.url" target="_blank">{{ item.title }}</a>
              </template>
              <template v-slot:avatar>
                <a-avatar :src="item.avatar" />
              </template>
            </a-list-item-meta>
            {{ item.text }}
          </a-skeleton>
          <!-- 图片 -->
          <!-- <template v-slot:extra>
            <div style="display: flex;justify-content: center;height: 100%">
              <img style="margin: auto" width="150" alt="logo" :src="item.img" />
            </div>
          </template>-->
          <!-- 底部选项 -->
          <template v-if="!showSkeleton" v-slot:actions>
            <div class="actions">
              <span>
                <a-icon type="eye" class="icon" />
                {{ item.action.view }}
              </span>
              <span>
                <a-icon type="like" class="icon" />
                {{ item.action.like }}
              </span>
              <span>
                <a-icon type="message" class="icon" />
                {{ item.action.comment }}
              </span>
              <span>
                <a-icon type="clock-circle" class="icon" />
                {{ item.action.date }}
              </span>
            </div>
          </template>
        </a-list-item>
      </template>
    </a-list>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      list: []
    }
  },
  computed: {
    ...mapState([
      'showSkeleton'
    ])
  },
  mounted() {
    console.log(this.$store)
    this.list = [
      {
        title: '想更深入的了解神楽七奈吗【问答&科普】',
        avatar: 'https://i2.hdslb.com/bfs/face/0757e9098c3a4154c2a924103ad71f5eb5d8297b.jpg_64x64.jpg',
        text: '目前辣辣军已经扩大到了150w+了。辣辣军的数量高速增长当然是一件让人很开心的事情，但是同时也有很多好奇的提问或者是因为还不熟悉神楽七奈或者vtuber的粉...',
        url: 'https://www.bilibili.com/read/cv7255499',
        img: 'http://i0.hdslb.com/bfs/article/72b76a43c6a55b8cd707c110d4e48ecfd20eddcb.png@117w_88h_75Q_1c.webp',
        action: {
          view: 5731,
          like: 591,
          comment: 40,
          date: '8-21'
        }
      },
      {
        title: '神楽七奈原创曲《陽炎》中文翻译参考',
        avatar: 'https://i2.hdslb.com/bfs/face/0757e9098c3a4154c2a924103ad71f5eb5d8297b.jpg_64x64.jpg',
        text: '陽炎阳炎笑って咲いた夜空の花束が微笑着绽放的夜空的花束痛いくらいに眩しい熱を帯びながら带着像要刺痛眼睛一般耀眼的热气夏...',
        url: 'https://www.bilibili.com/read/cv7247581',
        action: {
          view: 627,
          like: 324,
          comment: 11,
          date: '8-20'
        }
      },
      {
        title: '【七奈月刊】2020年七月双月报',
        avatar: 'https://i2.hdslb.com/bfs/face/0757e9098c3a4154c2a924103ad71f5eb5d8297b.jpg_64x64.jpg',
        text: '七月双月报录入时间6月1日~7月30日首先恭喜神楽七奈在2020.07.30晚达到150w关注数！贪恋萝莉又如何？七奈今扮一抹多。喜盼桃子...',
        url: 'https://www.bilibili.com/read/cv7247581',
        action: {
          view: 12345,
          like: 556,
          comment: 38,
          date: '7-31'
        }
      },
      {
        title: '【狗妈月报】2020年五月双月报',
        avatar: 'https://i2.hdslb.com/bfs/face/0757e9098c3a4154c2a924103ad71f5eb5d8297b.jpg_64x64.jpg',
        text: '五月双月报录入时间区间4月1日~5月31日神光照入彩云西，乐起悠悠过海溪。七色霞衣娇玉貌，奈良茶墨画虹霓。天仙乐易为民伴，...',
        url: 'https://www.bilibili.com/read/cv7247581',
        action: {
          view: 1924,
          like: 453,
          comment: 28,
          date: '5-31'
        }
      }
    ]
  }
}
</script>

<style lang="less" scoped>
.actions {
  display: flex;
  span {
    padding-right: 15px;
    .icon {
      margin-right: 5px;
    }
  }
}
</style>
