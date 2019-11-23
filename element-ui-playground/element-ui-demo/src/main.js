import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter);
import router from './router.js'

import App from './App.vue'

import './plugins/element.js'

import axios from 'axios'
axios.defaults.baseURL = 'http://oa-test.wfl-ischool.cn/dingding_api'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

Vue.config.productionTip = false

 new Vue({
  data: {
    current_user: null
  },
  mounted(){
    axios.post(
      'users/login_by_pwd',
      {
        username: 'wfl_longhr',
        password: '123qwe'
      })
      .then(result => {
        if (result.data.result) {
          this.current_user = result.data.user
          window.localStorage.setItem('current_user', JSON.stringify(result.data.user))
        } else {
          window.localStorage.setItem('current_user', JSON.stringify({}))
          console.log('登录失败');
        }
    })
  },
  render: h => h(App),
  router
}).$mount('#app')
