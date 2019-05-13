<template>
	<div>
		<detail-banner></detail-banner>
		<detail-header></detail-header>
		<div class="content">
			<detail-list :list="list"></detail-list>
		</div>
	</div>
</template>

<script type="text/javascript">
	import DetailBanner from './components/Banner'
	import DetailHeader from './components/Header'
	import DetailList	from './components/List'
	export default {
		name: 'Detail',
		components: {
			DetailBanner,
			DetailHeader,
			DetailList,
		},
		data () {
			return {
				list: [
					{
						title: '成人票',
						children: [
							{
								title: '我草你妈的比',
								children: [{title: '大家草拟吗，快乐你我他'}]
							},
							{
								title: '他草拟爹的比'
							}
						]
					},
					{
						title: '学生票'
					},
					{
						title: '儿童票'
					},
				]
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.content
		height: 50rem
</style>