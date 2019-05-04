<template>
  	<div id="app">
  		<!-- 把请求的内容保存到内存 -->
	  	<keep-alive>
	    	<router-view/>
	  	</keep-alive>
  	</div>
</template>

<script>
export default {
  	name: 'App'
}
</script>

<style>
</style>
