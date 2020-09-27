import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    showSkeleton: true
  },
  mutations: {
    changeSkeleton(state, flag) {
      state.showSkeleton = flag
    }
  }
})

export default store
