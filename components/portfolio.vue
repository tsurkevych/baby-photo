<template lang="pug">
	div(:class='$style.gallery')
		ui-container
			h2(:class='$style.gallery__title') {{ params.title }}
			ui-row
				ui-grid(
					v-for='(item, index) in params.images'
					:key='index'
					:class='$style.services__item'
					:md='12'
					:lg='8'
				)
					div(
						:class='$style.gallery__item'
						:style='{backgroundImage: `url(${require("@/assets/images/photo/" + item + ".jpg")})`}'
						data-fancybox="gallery"
						:data-src='require("@/assets/images/photo/" + item + ".jpg")'
					)
</template>

<script>
import params from '@/data/portfolio.json';
export default {
	data() {
		return {
			params
		};
	},
	mounted() {
		this.$fancybox.bind('[data-fancybox]', {});
	}
};
</script>

<style lang="scss" module>
.gallery {
	padding: {
		top: 8%;
		bottom: 8%;
	}
	background: {
		color: color.scale(map.get($colors, 'main'), $lightness: 20%);
	}

	&__title {
		margin: {
			bottom: 6%;
		}

		font: {
			size: 28px;
			weight: 900;
		}
		text: {
			align: center;
			transform: uppercase;
		}

		@include b-up(md) {
			font: {
				size: 48px;
			}
		}
	}

	&__item {
		height: 250px;
		cursor: zoom-in;
		margin: {
			bottom: 16px;
		}
		background: {
			position: center;
			size: cover;
		}
	}
}
</style>
