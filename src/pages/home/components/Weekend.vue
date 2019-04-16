<template>
	<div>
		<div class="title">{{title}}</div>
		<ul>
			<li class="item border-bottom" v-for="(item) of list" :key="item.id">
				<div class="item-img-wrapper">
					<img :src="item.imgUrl" class="item-img" />
				</div>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: 'HomeWeekend',
		props: {
			list: Array
		},
		data: function () {
			return {
				title: "周末去哪儿"
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.title
		line-height: .8rem
		background-color: #EEE
		text-indent: .2rem
	.item-img-wrapper
		overflow: hidden
		height: 0
		padding-bottom: 37.09%
		.item-img
			width: 100%
	.item-info
		padding: .1rem
		.item-title
			line-height: .54rem
</style>