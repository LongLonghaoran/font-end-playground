<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        {{ $root.current_user.name }}
      </a>
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown">
          {{ $root.current_user.current_school_name }}
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <button class="dropdown-item" v-for="item in $root.schools" :key="item.value" @click="changeSchool(item.value)">{{ item.text }}</button>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import axios from 'axios'
export default {
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
  
</style>