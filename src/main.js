import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/antd'
import moment from 'moment'
import 'moment/locale/zh-cn'

moment.locale('zh-cn')

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
