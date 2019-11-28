<template>
  <div class="container-fluid login-panel">
    <div class="logo">
      <img src="@/assets/logo.png" alt="" class="">
      <span>登录</span>
    </div>
    <div class="row">
      <div class="col-md-4 col-sm-6">
        <div class="card">
          <div class="card-body">
            <form @submit.prevent="submit">
              <div class="form-group">
                <label for="Uname">用户名</label>
                <input type="text" id="Uname" class="form-control" v-model='uname'>
              </div>
              <div class="form-group">
                <label for="Password">密码</label>
                <input type="password" id="Password" class="form-control" v-model='password'>
              </div>
              <div class="form-group">
                <button type="submit" class="btn btn-success form-control">提交</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data(){
    return {
      uname: '',
      password: ''
    }
  },
  methods: {
    submit(){
      let _this = this
      axios.post(
        'users/login_by_pwd',
        {
          username: _this.uname,
          password: _this.password
        }
      ).then(function(result){
          if (result.data.result) {
            _this.$root.schools = result.data.schools
            _this.$root.current_user = result.data.user
            window.localStorage.setItem('token', result.data.user.token)
            window.localStorage.setItem('schools', JSON.stringify(result.data.schools))
            _this.$router.push({path: '/'})
          } else {
            _this.$message.error(`${result.data.msg}`);
            console.log('登录失败');
          }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .logo {
    img {
      display: block;
      margin: 0 auto;
    }
    span {
      display: block;
      text-align: center;
      font-size: 30px;
      font-weight: 700
    }
  }
  .row {
    display: flex;
    justify-content: space-around;
  }
  .submit {
    display: flex;
    justify-content: space-around;
  }
</style>