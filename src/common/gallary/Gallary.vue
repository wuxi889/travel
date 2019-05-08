<template>
	<div class="container" @click="handleGallaryClick">
		<div class="wrapper">
		  	<swiper :options="swiperOptions">
			    <!-- slides -->
			    <swiper-slide v-for="(item, index) in images" :key="index">
			    	<img class="gallary-image" :src="item" />
			    </swiper-slide>
			    <!-- Optional controls -->
			    <div class="swiper-pagination" slot="pagination"></div>
		  	</swiper>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: 'CommonGallary',
		data () {
			return {
				swiperOptions: {
					pagination: '.swiper-pagination',
					paginationType: 'fraction',
					// 因为刚访问页面时 gallary组件是隐藏的，点击事件打开后，组件的宽度会有问题，需要设定以下两个参数
					// 意思是 swiper 监听自己或父级元素的width变化时,swiper自适应
					observeParents: true,
					observer: true,
				}
			}
		},
		props: {
			images: {
				type: Array,
				default () {
					return []
				}
			}
		},
		methods: {
			handleGallaryClick () {
				this.$emit('close')
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.container
		display: flex
		// https://www.runoob.com/cssref/css3-pr-flex-direction.html
		flex-direction: column
		// https://www.runoob.com/cssref/css3-pr-justify-content.html
		justify-content: center
		z-index: 999
		position: fixed
		left: 0
		right: 0
		top: 0
		bottom: 0
		background-color: rgba(0, 0, 0, .95)
		.wrapper
			background-color: #FFF
			width: 100%
			height: 0
			overflow: hidden
			padding-bottom: 100%
			.gallary-image
				width: 100%
			.swiper-pagination
				position: fixed
				z-index: 9999
				color: #FFF
				bottom: 1rem
</style>