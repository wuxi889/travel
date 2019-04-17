<template>
	<div class="header">
		{{headerTitle}}
		<router-link to='/'>
			<div class="header-back">
				＜
			</div>
		</router-link>
	</div>
</template>

<script type="text/javascript">
	// 使用stylus
	// 添加scoped 不影响其他vue的样式
	// npm install stylus --save
	// npm install stylus-loader --save
	export default {
		name: 'CityHeader',
		data () {
			return {
				headerTitle: "城市选择"
			}
		}
	}
</script>

<style lang="stylus" scoped>
	// 在样式中引入要用“~”符号
	@import '~__styles__/varibles.styl'
	.header
		height: $headerHeight
		line-height: $headerHeight
		overflow: hidden
		text-align: center
		color: #FFF
		background-color: $bgColor
		font-size: .32rem
		font-weight: bold
		.header-back
			width: .64rem
			text-align: center
			position: absolute
			top: 0
			left: 0
			color: #FFF
			

</style>