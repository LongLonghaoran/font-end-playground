import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter);
import router from './router.js'

import App from './App.vue'

// element-ui插件
import './plugins/element.js'
import 'bootstrap/dist/css/bootstrap.min.css';

// 安装bootstrap
import 'bootstrap';

import axios from 'axios'
axios.defaults.baseURL = 'http://oa-test.wfl-ischool.cn/dingding_api'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

Vue.config.productionTip = false

 new Vue({
  data: {
    current_user: null
  },
  render: h => h(App),
  router
}).$mount('#app')
