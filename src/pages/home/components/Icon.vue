<template>
	<div class="icons">
	  	<swiper :options="swiperOption">
	  		<swiper-slide v-for="(page, index) of pages" :key="index">
				<div class="icon" v-for="vo of page" :key="vo.id">
					<div class="icon-img">
						<img class="icon-img-content" :src="vo.imgUrl">
					</div>
					<p class="icon-desc">{{vo.desc}}</p>
				</div>
			</swiper-slide>
	  	</swiper>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: 'HomeIcon',
		props: {
			list: Array
		},
		data: function () {
			return {
				swiperOption: {
					autoplay: false
				}
			}
		},
		computed: {
			pages: function () {
				const pages = []
				this.list.forEach((val, key) => {
					const page = [Math.floor(key / 8)]
					if(!pages[page]) {
						pages[page] = []
					}

					pages[page].push(val)
				})
				return pages
			}
		}
	}
</script>

<style lang='stylus' scoped>
	@import '~__styles__/varibles.styl'
	@import '~__styles__/mixins.styl'
	.icons
		height: 0
		overflow: hidden
		padding-bottom: 50%
		margin: .25rem 0;
		.icon
			width: 25%
			float: left
			height: 0
			padding-bottom: 25%;
			overflow: hidden
			position: relative
			.icon-desc
				position: absolute
				left: 0
				right: 0
				bottom: 0
				height: .44rem
				line-height: .44rem
				text-align: center
				color: $darkTextColor
				ellipsis()
			.icon-img
				position: absolute
				top: 0
				left: 0
				right: 0
				bottom: .44rem
				box-sizing: border-box
				padding: .1rem
				.icon-img-content
					display: block
					margin: 0 auto
					height: 100%
	.icons >>> .swiper-container
		height: 0
		padding-bottom: 50%
				
</style>