<template>
	<div class="wrapper">
  	<swiper :options="swiperOption" v-if="showSwiper">
	    <!-- slides -->
	    <swiper-slide v-for="(item) of list" :key="item.id">
	    	<img class="swiper-image" :src="item.imgUrl" />
	    </swiper-slide>
	    <!-- Optional controls -->
	    <div class="swiper-pagination"  slot="pagination"></div>
  	</swiper>
  	</div>
</template>

<script type="text/javascript">
	export default {
		name: "HomeSwiper",
		props: {
			list: Array
		},
		data () {
			return {
				swiperOption: {
					pagination: '.swiper-pagination',
					loop: false
				}
			}
		},
		computed: {
			showSwiper () {
				return this.list.length
			}
		}
	}
</script>

<style lang="stylus" scoped>
	// 宽高比固定不能使用百分比去设置height高度，height的高度比例是对应的父级元素
	// 需要使用 height:0 overfloat:hidden padding-bottom:比例 来设置
	// padding-bottom 百分比的高度是对应this的宽度width
	.wrapper
		width: 100%
		height: 0
		overfloat: hidden
		padding-bottom: 39.06%;
		.swiper-image
			width: 100%
	// >>> 穿透
	.wrapper >>> .swiper-pagination-bullet-active
		background: #FFF !important
</style>