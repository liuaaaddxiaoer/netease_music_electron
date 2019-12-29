import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/a',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },

    {
      path: '/',
      name: 'topList',
      component: () => import('@/page/NeTopListPage')
    },

    {
      path: '*',
      redirect: '/'
    }
  ]
})
