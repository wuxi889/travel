<template>
	<div>
		<home-header></home-header>
		<home-swiper :list="swiperList"></home-swiper>
		<home-icon :list="iconList"></home-icon>
		<home-recommend :list="recommendList"></home-recommend>
		<home-weekend :list="weekendList"></home-weekend>
	</div>
</template>

<script type="text/javascript">
	import HomeHeader from './components/Header'
	import HomeSwiper from './components/Swiper'
	import HomeIcon from './components/Icon'
	import HomeRecommend from './components/Recommend'
	import HomeWeekend from './components/Weekend'
	import axios from 'axios'
	import { mapState } from 'vuex'
	export default {
		name: 'Home',
		components: {
			HomeHeader,
			HomeSwiper,
			HomeIcon,
			HomeRecommend,
			HomeWeekend
		},
		data () {
			return {
				swiperList: [],
				iconList: [],
				recommendList: [],
				weekendList: [],
				lastcity: '',
			}
		},
		methods: {
			getHomeInfo () {
				axios.get('/api/index.json?city=' + this.city).then(this.getHomeInfoRes)
				this.lastcity = this.city
			},
			getHomeInfoRes (res) {
				if (res.data.ret && res.data.data) {
					const data = res.data.data
					this.swiperList = data.swiperList
					this.iconList = data.iconList
					this.recommendList = data.recommendList
					this.weekendList = data.weekendList
				}

			}
		},
		computed: {
			...mapState(['city'])
		},
		mounted () {
			this.getHomeInfo()
		},
		// 当使用 keepalive 组件后，生命周期函数里会自动添加 activated 函数
		activated() {
			if (this.lastcity !== this.city) {
				this.lastcity = this.city
				this.getHomeInfo()
			}
		}
	}
</script>

<style>
</style>