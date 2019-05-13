import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
// 引用组件
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  	routes: [
    	{
		    path: '/',
		    name: 'Home',
		    component: Home
    	}, {
    		path: '/city',
    		name: 'City',
    		component: City
    	}, {
        path: '/detail/:id',
        name: 'Detail',
        component: Detail
      }
  	],
    // 对于所有路由器的导航 打开时都会回到页面顶部
    scrollBehavior (to, from, savedPosition) {
      return {x: 0, y: 0}
    }
})
