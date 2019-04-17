<template>
	<div class="search">
		<input class="search-input" type="text" placeholder="输入城市名或拼音">
	</div>
</template>

<script type="text/javascript">
	export default {
		name: 'CitySearch',
		data () {
			return {
				
			}
		}
	}
</script>

<style lang="stylus" scoped>
	@import '~__styles__/varibles.styl'
	.search
		height: .72rem
		background-color: $bgColor
		padding: 0 .1rem
		.search-input
			box-sizing: border-box
			height: .62rem
			line-height: .62rem
			width: 100%
			text-align: center
			border-radius: .06rem
			color: #666
			padding: 0 .1rem
</style>