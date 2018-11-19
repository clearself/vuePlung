import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'scroll',
      component:  resolve => require.ensure([], () => resolve(require('@/pages/scroll_bottom.vue')), 'scroll')
    },
    {
      path: '/index',
      name: 'index',
      component:  resolve => require.ensure([], () => resolve(require('@/pages/index.vue')), 'index')
    },
    {
      path: '/main',
      name: 'main',
      component:  resolve => require.ensure([], () => resolve(require('@/pages/main.vue')), 'main')
    },{
      path: '/change',
      name: 'change',
      component:  resolve => require.ensure([], () => resolve(require('@/pages/change.vue')), 'change')
    }
  ]
})
