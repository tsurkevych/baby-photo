<template lang="pug">
	section#gallery(:class='$style.gallery')
		layout-waves(:params='{color: "#f4ebea", index: 4, height: 242, revert: true }')
		ui-container(:class='$style.container')
			ui-headline {{ params.title }}
			ui-row
				ui-grid(
					v-for='(item, index) in params.images'
					:key='index'
					:class='$style.services__item'
					:md='12'
					:lg='8'
				)
					ui-background(
						:class='$style.gallery__item'
						:images='{\
							picture: require("@/assets/images/photo/" + item + ".jpg")\
						}'
						:data-fancybox='`gallery_${_uid}`'
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
	}
};
</script>

<style lang="scss" module>
.gallery {
	background: {
		color: color.scale(map.get($colors, 'main'), $lightness: 20%);
	}

	.container {
		padding: {
			top: 1%;
			bottom: 12%;
		}
	}

	&__item {
		height: 0;
		padding: {
			bottom: 75%;
		}

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
