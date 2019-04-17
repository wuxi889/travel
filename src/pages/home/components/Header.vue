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
		<div class="header-right">
			{{city}}
			<svg class="iconfont icon-arrow-solid-bottom" aria-hidden="true">
			    <use xlink:href="#icon-arrow-solid-bottom"></use>
			</svg>
		</div>
	</div>
</template>

<script type="text/javascript">
	// 使用stylus
	// 添加scoped 不影响其他vue的样式
	// npm install stylus --save
	// npm install stylus-loader --save
	export default {
		name: 'HomeHeader',
		props: {
			city: String
		}
	}
</script>

<style lang="stylus" scoped>
	// 在样式中引入要用“~”符号
	@import '~__styles__/varibles.styl'
	.header
		display: flex
		height: .86rem
		background-color: $bgColor
		color: #FFF
		.header-left
			width: .64rem
			float: left
			margin-left: .25rem
			line-height: .86rem
		.header-right
			width: 1.24rem
			float: right
			text-align: center
			line-height: .86rem
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