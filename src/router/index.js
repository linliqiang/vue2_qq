import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Reg from '@/components/Reg'
import Index from '@/components/Index'
import MusicList from '@/components/MusicList'
import Music from '@/components/Music'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/reg',
      name: 'Reg',
      component: Reg
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/musicList',
      name: 'MusicList',
      component: MusicList
    },
    {
      path: '/music',
      name: 'Music',
      component: Music
    }
  ]
})
