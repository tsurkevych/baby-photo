<template lang="pug">
	picture(ref='main' v-if='lazy')
		source(v-if='images.webp' ref='webp' :srcset='preloader' type="image/svg+xml")
		source(ref='picture' :srcset='preloader' type="image/svg+xml")
		img(
			v-bind='$attrs'
			ref='img'
			:src='preloader'
			:class='$style.img'
			:title='title'
			:alt='alt'
			:width='width'
			:height='height'
			:style='{ opacity: load ? 1 : 0 }'
		)
	picture(ref='main' v-else)
		source(v-if='images.webp' ref='webp' :srcset='images.webp' type='image/webp')
		source(:srcset='images.picture' :type='mimeType')
		img(
			v-bind='$attrs'
			ref='img'
			:src='images.picture'
			:class='$style.img'
			:title='title'
			:alt='alt'
			:width='width'
			:height='height'
			:style='{ opacity: load ? 1 : 0 }'
		)
</template>

<script>
export default {
	/**
	 * @description props.images - масив зображень
	 * @description props.images.picture - зображення png/jpeg
	 * @description props.images.webp - зображення webp
	 * @description props.width - ширина
	 * @description props.height - висота
	 * @description props.title - висота
	 * @description props.alt - висота
	 */
	props: {
		images: Object,
		title:  {
			type:     String,
			required: true
		},
		alt:   {
			type:     String,
			required: true
		},
		lazy:      {
			type: Boolean,
			default() {
				return true;
			}
		},
		width: {
			type: String,
			default() {
				return '100';
			}
		},
		height: {
			type: String,
			default() {
				return '100';
			}
		}
	},

	/**
	 * @returns {object} - data
	 * @description load - статус завантаження зображень
	 * @description mimeType - mime тип файлу
	 * @description preloader
	 */
	data() {
		return {
			load:      false,
			mimeType:  this.images.picture.includes('.png') ? 'image/png' : 'image/jpeg',
			observer:  null,
			preloader: require('@/assets/images/logo.svg')
		};
	},
	created() {
		if (!this.lazy) this.load = true;
	},
	mounted() {
		!this.load && this.init();
	},
	destroyed() {
		this.observer && this.observer.disconnect();
	},
	methods: {
		/**
		 * @description ініціалізація "лінивого" звантаження
		 */
		init() {
			this.observer
				= new IntersectionObserver(entries => {
					if (entries[0].isIntersecting) {
						const lazyImage = entries[0].target;

						if (this.$refs.webp) {
							this.$refs.webp.srcset = this.images.webp;
							this.$refs.webp.type = 'image/webp';
						}
						this.$refs.picture.srcset = this.images.picture;
						this.$refs.picture.type = this.mimeType;
						this.$refs.img.src = this.images.picture;
						this.observer.unobserve(lazyImage);
						this.load = true;
					}
				}, {
					threshold: 0.8
				});

			this.$nextTick(() => {
				this.observer.observe(this.$refs.main);
			});
		}
	}
};
</script>

<style lang="scss" module>
.img {
	display: block;

	// width: 100%;
	// height: auto;
}
</style>
