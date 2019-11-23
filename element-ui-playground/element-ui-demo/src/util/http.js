import axios from 'axios'
import store from '@/util/store.js'
axios.defaults.baseURL = 'http://oa-test.wfl-ischool.cn/dingding_api';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
const http = {
  loginByPwd() {
    axios.post(
      'users/login_by_pwd',
      {
        username: 'wfl_longhr',
        password: '123qwe'
      })
      .then(result => {
        if (result.data.result) {
          store.setUser(result.data.user);
          console.log(store);
        } else {
          console.log('登录失败');
        }
    })
  }
}

export default http