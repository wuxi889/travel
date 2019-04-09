<template>
	<div>
		<div class="title">
			热门推荐
		</div>
		<ul>
			<li class="item border-bottom" v-for="vo of recommendList" :key="vo.id">
				<img class="item-img" :src="vo.imgUrl">
				<div class="item-info">
					<p class="item-info-title">
						{{ vo.title }}
					</p>
					<p class="item-info-desc">
						{{ vo.desc }}
					</p>
					<button class="item-btn">查看详情</button>
				</div>
			</li>
		</ul>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: 'HomeRecommend',
		data: function () {
			return {
				recommendList: [{
					id: '000001',
					imgUrl: 'http://img1.qunarzz.com/sight/p0/1807/ed/edd524723b882b48a3.img.jpg_250x250_336a42c9.jpg',
					title: '小河那流水，那哗啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦',
					desc: '犹如那晴天霹雳，地动山摇，心心相印，印贼做父，父相伤害，还想咋地。。。',
					price: '99.99'
				}, {
					id: '000002',
					imgUrl: 'http://img1.qunarzz.com/sight/p0/1807/ed/edd524723b882b48a3.img.jpg_250x250_336a42c9.jpg',
					title: '小河那流水，那哗啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦',
					desc: '犹如那晴天霹雳，地动山摇，心心相印，印贼做父，父相伤害，还想咋地。。。',
					price: '99.99'
				}, {
					id: '000003',
					imgUrl: 'http://img1.qunarzz.com/sight/p0/1807/ed/edd524723b882b48a3.img.jpg_250x250_336a42c9.jpg',
					title: '小河那流水，那哗啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦',
					desc: '犹如那晴天霹雳，地动山摇，心心相印，印贼做父，父相伤害，还想咋地。。。',
					price: '99.99'
				}]
			}
		}
	}
</script>

<style lang="stylus" scoped>
	@import '~__styles__/varibles.styl'
	@import '~__styles__/mixins.styl'
	.title
		line-height: .75rem
		background-color: #EEE
		text-indent: .2rem
	.item
		display: flex
		height: 2rem
		overflow: hidden
		.item-img
			width: 1.8rem
			height: 1.8rem
			padding: .1rem
		.item-info
			flex: 1
			padding: .1rem 0
			min-width: 0
			.item-info-title
				line-height: .325rem
				padding-bottom: .175rem
				font-size: .325rem
				font-weight: bold
				ellipsis()
			.item-info-desc
				line-height: .4rem
				color: #AAA
			.item-btn
				background-color: #FF9300
				padding: 0 .1rem
				border-radius: .05rem
				color: #FFF
				font-size: .25rem
				margin-top: .15rem
				font-weight: bold
				
</style>