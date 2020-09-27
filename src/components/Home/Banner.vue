<template>
  <div class="banner" >
    <div>banner</div>
    <a-button icon="setting" class="btn" @click="changeSkeleton(!showSkeleton)">
      {{msg}}
    </a-button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState([
      'showSkeleton'
    ]),
    msg() {
      return this.showSkeleton ? '显示模拟数据' : '隐藏模拟数据'
    }
  },
  methods: {
    ...mapMutations([
      'changeSkeleton'
    ])
  }
}
</script>

<style lang="less" scoped>
.banner {
  background: #ddd;
  width: 100%;
  height: 120px;
  .btn {
    z-index: 99;
    position: fixed;
    right: 20px;
    top: 5px;
  }
}
</style>
