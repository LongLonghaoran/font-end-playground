import VueRouter from 'vue-router'
import HomeComponent from '@/views/HomeComponent.vue'
import login from '@/views/login.vue'
const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: HomeComponent
    },
    {
      path: '/login',
      component: login
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (!JSON.parse(window.localStorage.getItem('current_user')) && to.fullPath !== '/login') {
    next({
      path: '/login'
    })
  } else {
    next()
  }
})

export default router