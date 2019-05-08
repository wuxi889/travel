<template>
	<div>
		<div class="header-abs" @click="handleBack" v-show="showAbs">
			<svg aria-hidden="true" class="iconfont header-abs-icon">
				<use xlink:href="#icon-arrow-left"></use>
			</svg>
		</div>
		<div class="header-fix" v-show="!showAbs" :style="opacityStyle">
			{{title}}
			<svg aria-hidden="true" class="iconfont header-fix-icon" @click="handleBack">
				<use xlink:href="#icon-arrow-left"></use>
			</svg>

		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: 'DetailHeader',
		components: {
			
		},
		data () {
			return {
				title: '景点详情',
				showAbs: true,
				opacityStyle: {
					opacity: 0
				},
			}
		},
		methods: {
			handleBack () {
				this.$router.go(-1);
			},
			handleScroll () {
				const top = document.documentElement.scrollTop
				this.showAbs = top >= 60 ? false : true
				if (top >= 60) {
					var opacity = top / 140
					opacity = opacity > 1 ? 1 : opacity
					this.opacityStyle = {
						opacity: opacity
					}
					this.showAbs = false
				}
				else {
					this.showAbs = true
				}
			}
		},
		// keepalive
		activated () {
			// window 是全局对象绑定
			window.addEventListener('scroll', this.handleScroll)
		},
		// 页面即将隐藏或被即将被替换，就会执行 deactivated 钩子函数
		deactivated () {
			window.removeEventListener('scroll', this.handleScroll)
		}
	}
</script>

<style lang="stylus" scoped>
	@import '~__styles__/varibles.styl'
	.header-abs
		position: absolute
		left: .1rem
		top: .1rem
		width: .8rem
		height: .8rem
		border-radius: 50%
		background-color: rgba(0, 0, 0, .8)
		.header-abs-icon
			color: #FFF
			width: .4rem
			height: .4rem
			padding: .2rem
	.header-fix
		position: fixed
		overflow: hidden
		height: 1rem
		line-height: 1rem
		text-align: center
		background-color: $bgColor
		font-size: .32rem
		width: 100%
		top: 0
		left: 0
		color: #FFF
		.header-fix-icon
			position: fixed
			width: .4rem
			height: .4rem
			padding: .3rem
			left: 0
			top: 0
			
</style>