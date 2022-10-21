<template lang="pug">
	component(
		v-bind='$attrs'
		:is='tag'
		:class='$style.background'
		:style='style'
		:to='to'
	)
		transition(name='fade')
			ui-loader(
				v-if='!load'
				:class='$style.load'
				:type='loader.type'
				:background='loader.background'
			)
		slot
</template>

<script>

/**
 * @summary фонове зображення
 * @tutorial 'http://localhost:4001/docs/vue/components/ui/#background'
 */
export default {
	props: {
		images:    {
			type:     Object,
			required: true
		},
		to:        String,
		gradient:  String,
		tag:      {
			type: String,
			default() {
				return 'div';
			}
		},
		startInit: Boolean,
		lazy:      {
			type: Boolean,
			default() {
				return true;
			}
		},
		loader: {
			type: Object,
			default() {
				return {
					type:       'blue',
					background: null
				};
			}
		}
	},

	/**
	 * @returns {object} - data
	 * @description load - статус завантаження зображень
	 * @description style - стиль фону
	 */
	data() {
		return {
			load:              false,
			style:             null,
			lazyImageObserver: null
		};
	},
	created() {
		if (!this.lazy) {
			const g = this.gradient ? (this.gradient + ',') : '';

			this.style = {
				backgroundImage: g + `url(${this.$device.isSafari ? this.images.picture : (this.images.webp || this.images.picture)})`
			};
			this.load = true;
		}
	},
	mounted() {
		!this.load && this.init();
	},
	destroyed() {
		this.lazyImageObserver && this.lazyImageObserver.disconnect();
	},
	methods: {

		/**
		 * @description ініціалізація "лінивого" звантаження
		 */
		init() {
			this.lazyImageObserver
				= new IntersectionObserver(entries => {
					if (entries[0].isIntersecting) {
						const lazyImage = this.$el;
						const g = this.gradient ? (this.gradient + ',') : '';

						lazyImage.style.backgroundImage = g + `url(${this.$device?.isSafari ? this.images.picture : (this.images.webp || this.images.picture)})`;
						this.lazyImageObserver.unobserve(this.$el);
						this.load = true;
					}
				}, {
					threshold: 0.1
				});

			this.$nextTick(() => {
				this.lazyImageObserver.observe(this.$el);
			});
		}
	}
};
</script>

<style lang="scss" module>
.background {
	position: relative;
	background: {
		size: cover;
		position: center;
		repeat: no-repeat;
	}
}
</style>
