import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import child from '@/components/children/children'
import Hashmd from '@/components/skeleton/hashMd'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/child',
      name: 'child',
      component: child
    }, {
      path: '/hash',
      name: 'Hashmd',
      component: Hashmd
    }
  ]
})
