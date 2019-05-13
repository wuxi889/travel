<template>
	<div>
		<div class="item" v-for="(item, index) of list" :key="index">
			<div class="item-title border-bottom">
				<span class="item-title-icon"></span>
				{{item.title}}
			</div>
			<!-- 递归组件 -->
			<div v-if="item.children">
				<detail-list :list="item.children" class="item-children"></detail-list>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: 'DetailList',
		components: {
			
		},
		props: {
			list: Array
		},
		data () {
			return {
			}
		},
		methods: {
		}
	}
</script>

<style lang="stylus" scoped>
	@import '~__styles__/varibles.styl'
	.item
		.item-title
			line-height: .8rem
			font-size: .32rem
			padding: 0 .2rem
			.item-title-icon
				position: relative
				left: .06rem
				top: .06rem
				display: inline-block
				width: .36rem
				height: .36rem
				background: url('http://s.qunarzz.com/piao/image/touch/sight/detail.png') 0rem -.45rem no-repeat
				margin-right: .1rem
				background-size: .41rem
		.item-children
			padding-left: .25rem
			
</style>