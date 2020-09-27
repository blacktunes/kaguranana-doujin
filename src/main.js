import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex'
import './plugins/antd'
import moment from 'moment'
import 'moment/locale/zh-cn'

moment.locale('zh-cn')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
