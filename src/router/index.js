import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/home'
import JavaScript from '@/pages/JavaScript/JavaScript'
// import City from '@/components/common/City'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: JavaScript
    }
  ]
})
