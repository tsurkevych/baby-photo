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
			)
		slot
</template>

<script>
import { mapGetters } from 'vuex';

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
			load:  false,
			style: null
		};
	},
	computed: mapGetters({
		wh:        'wh',
		scrollTop: 'scrollTop'
	}),
	watch: {
		scrollTop() {
			!this.load && this.init();
		}
	},
	created() {
		if (!this.lazy) {
			const g = this.gradient ? (this.gradient + ',') : '';

			this.style = {
				backgroundImage: g + `url(${this.$device?.isSafari ? this.images.picture : (this.images.webp || this.images.picture)})`
			};
			this.load = true;
		}
	},
	mounted() {
		this.startInit && this.lazyInit();
		!this.load && this.init();
	},
	methods: {
		/**
		 * @description ініціалізація
		 */
		init() {
			const { top, bottom } = this.$el.getBoundingClientRect();

			if (
				top - this.wh <= 100
				&& bottom + top + this.$el.clientHeight >= 0
			) this.lazyInit();
		},

		/**
		 * @description ініціалізація "лінивого" звантаження
		 */
		lazyInit() {
			const lazyImageObserver
				= new IntersectionObserver(entries => {
					entries.forEach(entry => {
						const lazyImage = entry.target;
						const g = this.gradient ? (this.gradient + ',') : '';

						lazyImage.style.backgroundImage = g + `url(${this.$device?.isSafari ? this.images.picture : (this.images.webp || this.images.picture)})`;
						lazyImageObserver.unobserve(lazyImage);
						this.load = true;
					});
				});

			lazyImageObserver.observe(this.$el);
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
