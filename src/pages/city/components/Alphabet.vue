<template>
	<div class="list">
		<ul>
			<li 
				class="item" 
				v-for="item of letters" 
				:key="item"
				:ref="item" 
				@click="handleLetterClick"
				@touchstart="handleTouchStart"
				@touchmove="handleTouchMove"
				@touchend="handleTouchEnd"
				>
				{{item}}
			</li>
		</ul>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: 'CityAlphabet',
		props: {
			cities: Object
		},
		computed: {
			letters () {
				const letters = []
				for (let i in this.cities) {
					letters.push(i)
				}
				return letters
			}
		},
		data () {
			return {
				touchStatus: false,
				startY: 0,
				timer: null
			}
		},
		updated () {
			// 刚开始 cities 为空对象，从父组件中传递进来后，对页面重新渲染，渲染后运行updated生命周期函数
			this.startY = this.$refs['A'][0].offsetTop
		},
		methods: {
			handleLetterClick (e) {
				// 兄弟组件传值
				// Alphabet->City->List
				this.$emit('change', e.target.innerText)
			},
			handleTouchStart () {
				this.touchStatus = true;
			},
			handleTouchMove (e) {
				// 字母表与列表关联
				if (this.touchStatus) {
					// 因为滑动时 执行touchmove的频率很高，在这里进行节流
					if (this.timer) {
						clearTimeout(this.timer)
					}
					this.timer = setTimeout(() => {
						const touchY = e.touches[0].clientY - 79
						const index = Math.floor((touchY - this.startY) / 20)
						if (index >= 0 && index < this.letters.length) {
							this.$emit('change', this.letters[index])
						}
					}, 16)
				}
			},
			handleTouchEnd () {
				this.touchStatus = false;
			},
		}
	}
</script>

<style lang="stylus" scoped>
	// 在样式中引入要用“~”符号
	@import '~__styles__/varibles.styl'
	.list
		display: flex
		flex-direction: column
		justify-content: center
		position: absolute
		top: 1.58rem
		right: 0
		bottom: 0
		width: .4rem
		.item
			line-height: .4rem
			text-align: center
			color: $bgColor

</style>