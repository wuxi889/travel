<template>
	<div class="wrapper">
  	<swiper :options="swiperOption">
	    <!-- slides -->
	    <swiper-slide v-for="(item) of swiperList" :key="item.id">
	    	<img class="swiper-image" :src="item.url" />
	    </swiper-slide>
	    <!-- Optional controls -->
	    <div class="swiper-pagination"  slot="pagination"></div>
  	</swiper>
  	</div>
</template>

<script type="text/javascript">
	export default {
		name: "HomeSwiper",
		data () {
			return {
				swiperOption: {
					pagination: '.swiper-pagination',
					loop: false
				},
				swiperList: [{
					id: 'img1',
					url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548265021620&di=f038485903cc0219d9b8a71c4c6f4f9f&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01398c5942618ca8012193a3f97976.jpg'
				},
				{
					id: 'img2',
					url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548264972406&di=606bdbb62202abcc089d6eba29f96201&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F019a0558be22d6a801219c77d0578a.jpg%402o.jpg'
				}]
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