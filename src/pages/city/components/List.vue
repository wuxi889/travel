<template>
	<div class="list" ref="wrapper">
		<div>
			<div class="area">
				<div class="title border-topbottom">当前城市</div>
				<div class="button-list">
					<div class="button-wrapper">
						<div class="button">
							{{this.currentCity}}
						</div>
					</div>
				</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">热门城市</div>
				<div class="button-list">
					<div class="button-wrapper" v-for="(item) of hotCities" :key="item.id" @click="handleCityClick(item.name)">
						<div class="button">
							{{item.name}}
						</div>
					</div>
				</div>
			</div>
			<div 
				class="area" 
				v-for="(item, key) of cities" 
				:key="key"
				:ref="key" 
			>
				<div class="title border-topbottom">{{key}}</div>
				<div class="item-list">
					<div 
						class="item border-bottom"
						v-for="innerItem of item"
						:key="innerItem.id"
						@click="handleCityClick(innerItem.name)"
					>
						{{innerItem.name}}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import Bscroll from 'better-scroll'
	import { mapState, mapMutations } from 'vuex'
	export default {
		name: 'CityList',
		props: {
			cities: Object,
			hotCities: Array,
			letter: String
		},
		computed: {
			...mapState({
				currentCity: 'city'
			})
		},
		data () {
			return {

			}
		},
		mounted () {
			this.scroll = new Bscroll(this.$refs.wrapper)
		},
		methods: {
			handleCityClick (city) {
				// this.$store.dispatch('changeCity', city)
				// 组件可直接调用commit
				//this.$store.commit('changeCity', city)
				this.changeCity(city)
				this.$router.push('/')
			},
			...mapMutations(['changeCity'])
		},
		watch: {
			letter () {
				if(this.letter) {
					const element = this.$refs[this.letter][0]
					this.scroll.scrollToElement(element)
				}
			}
		}
	}
</script>

<style lang="stylus" scoped>
	// 在样式中引入要用“~”符号
	@import '~__styles__/varibles.styl'
	.list
		overflow: hidden
		position: absolute
		top: 1.58rem
		left: 0
		bottom: 0
		right: 0
		.title
			line-height: .5rem
			background-color: #EEE
			padding-left: .2rem
			color: #666
			font-size: .26rem
		.border-topbottom
			&:before
				border-color: #777
			&:after
				border-color: #777
		.button-list 
			overflow: hidden
			padding: .1rem .4rem .1rem .1rem
			.button-wrapper
				float: left
				width: 33.33333%
				.button
					margin: .1rem
					text-align: center
					border: .02rem #CCC solid
					padding: .1rem 0
					border-radius: .06rem
		.item-list
			.item
				line-height: .6rem
				color: #666
				padding-left: .2rem
			
</style>