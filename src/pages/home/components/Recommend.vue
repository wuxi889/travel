<template>
	<div>
		<div class="title">
			热门推荐
		</div>
		<ul>
			<li class="item border-bottom" v-for="vo of list" :key="vo.id">
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
		props: {
			list: Array
		},
		data: function () {
			return {
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