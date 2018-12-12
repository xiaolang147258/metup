import Vue from 'vue'
import Vuex from 'vuex'

import VueResource from 'vue-resource';
Vue.use(VueResource);

Vue.use(Vuex);


const state = {
	url:'http://www.meetartapp.com:8080/a10',//全局请求头
	data:{//全局存储当前登录用登录信息
		memid:'',
		tokenid:'',
		tou_url:'',//当前登录用头像url
		name:'',//当前登录用户昵称
	},
	
	
	
	
	
};

//修改状态
const mutations = {};

export default new Vuex.Store({
	state,
	mutations
});
