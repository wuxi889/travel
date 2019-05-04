import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

// 创建仓库
export default new Vuex.Store({
	state,
	// actions: {
	// 	changeCity (ctx, city) {
	// 		ctx.commit('changeCity', city)
	// 	}
	// },
	mutations,
	getters: {
		// 类似 computed，用于计算 state 里的数据后传值，防止冗余数据
		doubleCity (city) {
			return state.city + ' ' + state.city
		}
	}
})