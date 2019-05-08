<template>
	<div>
		<div class="banner" @click="handleBannerClick">
			<img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1501/80/8027ab3d1ef884ed.water.jpg_600x330_cddaa347.jpg" />
			<div class="banner-info">
				<div class="banner-title">我就是曹你妈的那个大鸡吧</div>
				<div class="banner-number">69</div>
			</div>
		</div>
		<common-gallary :images="images" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
	</div>
</template>

<script type="text/javascript">
	import CommonGallary from 'common/gallary/Gallary'
	export default {
		name: 'DetailBanner',
		components: {
			CommonGallary
		},
		data () {
			return {
				showGallary: false,
				images: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557328388090&di=7cd3f3f298f60fbf412991dee2f1da6e&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F26%2F29%2F52%2F58d091b19e64f_1024.jpg']
			}
		},
		methods: {
			handleBannerClick () {
				this.showGallary = true
			},
			handleGallaryClose () {
				this.showGallary = false
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.banner
		position: relative
		overflow: hidden
		height: 0
		padding-bottom: 55%
		.banner-img
			width: 100%
		.banner-info
			display: flex
			position: absolute
			left: 0
			right: 0
			bottom: 0
			line-height: .6rem
			color: #FFF
			background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .6))
			.banner-title
				flex: 1
				font-size: .32rem
				padding: 0 .2rem
			.banner-number
				height: .36rem
				line-height: .36rem
				padding: 0 .2rem
				margin-right: .2rem
				margin-top: .13rem
				border-radius: .16rem
				background-color: rgba(0, 0, 0, .3)
				font-size: .24rem
				
			
</style>