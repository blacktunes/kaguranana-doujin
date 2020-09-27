<template>
  <a-list item-layout="vertical" size="large" :data-source="listData">
    <template v-slot:footer>
      <div @click="() => loading = !loading">
        <b>点这里</b> 显示/隐藏预览文章
      </div>
    </template>
    <template v-slot:renderItem="item">
      <a-list-item :key="item.title">
        <!-- 底部选项 -->
        <template v-if="!loading" v-slot:actions>
          <span v-for="{type, text} in actions" :key="type">
            <a-icon :type="type" style="margin-right: 8px" />
            {{ text }}
          </span>
        </template>
        <!-- 图片 -->
        <!-- <template v-slot:extra>
          <div style="display: flex;justify-content: center;height: 100%">
          <img
            style="margin: auto"
            width="272"
            alt="logo"
            src="https://i0.hdslb.com/bfs/article/d5220bb1e7dc1019a70065b53e1b2137d6acff4c.jpg@860w_482h.webp"
          />
          </div>
        </template> -->
        <a-skeleton :loading="loading" avatar>
        <a-list-item-meta :description="item.description">
          <template v-slot:title>
            <a :href="item.href">{{ item.title }}</a>
          </template>
          <template v-slot:avatar>
            <a-avatar :src="item.avatar" />
          </template>
        </a-list-item-meta>
        {{ item.content }}
        </a-skeleton>
      </a-list-item>
    </template>
  </a-list>
</template>

<script>
const listData = []
for (let i = 0; i < 5; i++) {
  listData.push({
    href: 'https://www.antdv.com/',
    title: `狗妈月刊 ${i}`,
    avatar: 'https://i0.hdslb.com/bfs/article/d5220bb1e7dc1019a70065b53e1b2137d6acff4c.jpg@860w_482h.webp',
    description:
      '二月月报录入时间区间1月27日~3月6日辣辣七奈军本次推出了【狗妈月刊】第一期 来总结关于狗妈的相关情报，这期的内容有【直播看点】【七奈歌唱】【推特看点】【二创视频推荐】【同人图推荐】。日新月异、物转星移，转眼间在2020年3月6日狗妈来到B站出道已经一周年了，在这一年內狗妈经历了许多大大小小的事情。在此同时狗妈依靠自身魅力和个人能力，吸引来了大量粉丝。为了兼顾到狗妈粉丝因学业、事业等不可抗因素而错过的精彩环节，辣辣七奈军今后将开设【狗妈月刊】来记录一个月內关于狗妈的精彩时刻。疫情开始的202'
  })
}

export default {
  data() {
    return {
      loading: true,
      listData,
      pagination: {
        onChange: page => {
          console.log(page)
        },
        pageSize: 3
      },
      actions: [
        { type: 'like-o', text: '156' },
        { type: 'message', text: '2' }
      ]
    }
  }
}
</script>
