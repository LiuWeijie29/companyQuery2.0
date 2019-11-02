// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import iView from 'iview'
import 'iview/dist/styles/iview.css';
import {store} from './store/store'
import  echarts from 'echarts'
import mockData from './mock'
import G2 from '@antv/g2'


Vue.use(G2)
Vue.use(iView);
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts

//全局变量
Vue.prototype.$company = {};
Vue.prototype.$companyList = {};

new Vue({
  el: '#app',
  store:store,
  router,
  components: { App },
  template: '<App/>',
  created(){
    this.$http.get('/msg1').then((res)=>{
      console.log(res)
    })
  }
})
