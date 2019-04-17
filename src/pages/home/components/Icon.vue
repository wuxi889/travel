<template>
	<div class="icons">
	  	<swiper>
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
		data: function () {
			return {
				iconList: [{
					id: '000001',
					imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
					desc: '景点门票'
				}, {
					id: '000002',
					imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
					desc: '海洋馆'
				}, {
					id: '000003',
					imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
					desc: '游乐场'
				}, {
					id: '000004',
					imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
					desc: '泡温泉'
				}, {
					id: '000005',
					imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
					desc: '一日游'
				}, {
					id: '000006',
					imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/de711920c71e38287d9f95f7910aa1aa.png',
					desc: '精品小团'
				}, {
					id: '000007',
					imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png',
					desc: '三坊七巷'
				}, {
					id: '000008',
					imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/87/20656da0ac042002.png',
					desc: '武夷山'
				}, {
					id: '000009',
					imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png',
					desc: '六神花露水'
				}]
			}
		},
		computed: {
			pages: function () {
				const pages = []
				this.iconList.forEach((val, key) => {
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