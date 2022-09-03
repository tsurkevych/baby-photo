<template lang="pug">
	section(:class='$style.gallery')
		layout-waves(:params='{color: "#fff", index: 9, height: 210, revert: true }')
		ui-container(:class='$style.container')
			ui-headline {{ params.title }}
			ul
				li(v-for='(item, index) in params.items')
					ui-hr(v-if='index !== 0')
					section(:class='$style.item')
						header(:class='$style.item__header')
							svg-icon(
								name='diaphragm'
								:class='$style.icon'
							)
							h3 {{ item.title }}
						ui-content(
							:class='$style.item__content'
							:content='item.content'
						)

</template>

<script>
import params from '@/data/faq.json';
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
	.container {
		padding: {
			top: 1%;
			bottom: 12%;
		}
	}
}

.item {
	border: {
		radius: 4px;
	}
	background: {
		color: color.scale(map.get($colors, 'main'), $lightness: 50%);
	}

	&__header {
		display: flex;
		align-items: center;
		padding: 8px 16px;
		background: {
			color: var(--main);
		}
		font: {
			size: 16px;
			weight: 700;
		}

		@include b-up(md) {
			font: {
				size: 22px;
			}
		}

		.icon {
			width: 28px;
			min-width: 28px;
			height: 28px;
			margin: {
				right: 16px;
			}

			filter: drop-shadow(0 0 2px map.get($colors, 'secondary'));
			color: color.scale(map.get($colors, 'main'), $lightness: 50%);
		}
	}

	&__content {
		padding: 16px 16px 16px 60px;

		@include b-up(md) {
			padding: 32px 32px 32px 60px;
		}
	}
}
</style>
