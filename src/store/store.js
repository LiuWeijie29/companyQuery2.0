import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export  const store = new Vuex.Store({
	state:{
		$company:{

		},//被选中的公司
		$companyList:{ },//请求返回的所有公司名
		$url:'',//接口地址url
	},
	mutations:{
		companyHandle(){

		}
	}
})