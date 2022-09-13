<template lang="pug">
	section#about(:class='$style.faq')
		layout-waves(:params='{color: "#f4ebea", index: 7, height: 184, revert: true }')
		ui-container(:class='$style.container')
			ui-headline {{ params.title }}
			ui-row(:class='$style.row')
				ui-grid(:sm='14')
					ui-content(:content='params.content')
				ui-grid(:xs='2' :sm='2')
				ui-grid(:xs='20' :sm='8')
					ui-background(
						:class='$style.faq__photo'
						:images='{\
							picture: require("@/assets/images/" + params.photo + ".jpg")\
						}'
					)
</template>

<script>
import params from '@/data/about.json';
export default {
	data() {
		return {
			params
		};
	}
};
</script>

<style lang="scss" module>
.faq {
	background: {
		color: color.scale(map.get($colors, 'main'), $lightness: 20%);
	}

	text: {
		align: justify;
	}

	.container {
		padding: {
			top: 1%;
			bottom: 12%;
		}
	}

	&__photo {
		height: 0;
		padding: {
			bottom: 133%;
		}

		@include b-only(xs) {
			margin: {
				top: 24px;
			}
		}
	}

	.row {
		align-items: center;

		/* @include b-only(xs) {
			flex-direction: column-reverse;
		} */
	}
}
</style>
