<template>
	<transition>
		<slot></slot>
	</transition>
</template>

<script type="text/javascript">
	export default {
		name: 'Fade',

	}
</script>

<style lang="stylus" scoped>
	// 动画 class
	.v-enter, .v-leave-to
		opacity: 0
	.v-enter-activive, .v-leave-active
		transition: opacity .5s
</style>