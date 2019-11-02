import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import map from '@/components/map'
import altas from '@/components/altas'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
	  redirect:'/home',
      name: 'Home',
      component: Home,
    }, {
		path:'/home',
		name:'home',
		component:Home,
        // children:[{
		//     path: 'map',
        //     name: map,
        //     component: map
        // },{
        //     path: 'altas',
        //     name: altas,
        //     component: altas
        // }]
	},
		
  ]
})
