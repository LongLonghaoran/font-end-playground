<template>
<div>
  <el-container class="full-container">
    <el-header>
      <el-row>
        <el-col :span="3">
          <el-avatar  :size="60" :src="$root.current_user.avatar_url" >
            <default>{{$root.current_user.name}}</default>
          </el-avatar>
        </el-col>
        <el-col :span="6" :offset="15">
          <el-select filterable placeholder="请选择" @change="changeSchool" :value="$root.current_user.school_id">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-row class="tac">
          <el-col :span="24">
            <el-menu class="el-menu-vertical-demo" :unique-opened="true">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span slot="title">导航一</span>
                </template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span slot="title">导航二</span>
                </template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>

      </el-aside>
      <el-container>
        <el-main>
          <slot></slot>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</div>
</template>
<script>
import axios from 'axios'
export default {
  data(){
    return {
        school_id: this.$root.current_user.school_id,
        options: this.$root.schools.map(item => {
          return {
            value: item.value, 
            label: item.text
          }
        }),
        value: ''
    }
  },
  methods: {
    changeSchool(school_id){
      let _this = this
      axios.get(
        'users/change_school',
        {
        params: {
          school_id: school_id,
          token: window.localStorage.getItem('token')
        }}
      ).then(function(result){
          if (result.data.result) {
            _this.$root.current_user = result.data.user
            window.localStorage.setItem('token', result.data.user.token)
            console.log("切换成功")
          } else {
            console.log('切换失败', result.data.msg);
          }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .full-container {
    height: 100vh;
  }
</style>