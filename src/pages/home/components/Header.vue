<template>
	<div class="header">
		<div class="header-left">
			<svg class="iconfont icon-arrow-left" aria-hidden="true">
			    <use xlink:href="#icon-arrow-left"></use>
			</svg>
		</div>
		<div class="header-mid">
			<svg class="iconfont icon-search" aria-hidden="true">
			    <use xlink:href="#icon-search"></use>
			</svg>
			输入城市/景点/游玩主题
		</div>
		<router-link to='/city'>
			<div class="header-right">
				{{this.city}}
				<svg class="iconfont icon-arrow-solid-bottom" aria-hidden="true">
				    <use xlink:href="#icon-arrow-solid-bottom"></use>
				</svg>
			</div>
		</router-link>
	</div>
</template>

<script type="text/javascript">
	import { mapState, mapGetters } from 'vuex'
	// 使用stylus
	// 添加scoped 不影响其他vue的样式
	// npm install stylus --save
	// npm install stylus-loader --save
	export default {
		name: 'HomeHeader',
		props: {
		},
		computed: {
			// 展开运算符
			// mapState 把 vuex 的数据映射到组件的computed的计算属性里
			...mapState(['city']),
			...mapGetters(['doubleCity'])
		}
	}
</script>

<style lang="stylus" scoped>
	// 在样式中引入要用“~”符号
	@import '~__styles__/varibles.styl'
	.header
		display: flex
		height: $headerHeight
		background-color: $bgColor
		color: #FFF
		.header-left
			width: .64rem
			float: left
			margin-left: .25rem
			line-height: $headerHeight
		.header-right
			min-width: 1.04rem
			padding: 0 .15rem
			float: right
			text-align: center
			line-height: .86rem
			color: #FFF
		.header-mid
			flex: 1
			background-color: #FFF
			border-radius: .1rem
			height: .62rem
			margin-top: .12rem
			line-height: .62rem
			color: #CCC
			padding-left: .15rem
			margin-left: .25rem
	.icon-arrow-left
		width: .5rem
		height: .5rem
		float: left
		margin: .16rem 0
	.icon-search
		width: .5rem
		height: .5rem
		float: left
		margin: .06rem 0
	.icon-arrow-solid-bottom
		width: .25rem
		height: .25rem


</style>