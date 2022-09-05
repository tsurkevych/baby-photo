<template lang="pug">
	div(:class='[$style.footer, footer && $style.bottom]')
		ui-container(:class='$style.container')
			ui-row(:class='$style.row')
				ui-grid(
					v-if='footer'
					:md='12'
					:class='$style.footer__copy'
				)  © {{ new Date().getFullYear() }} TataG
				ui-grid(
					:md='12'
					:class='$style.footer__social'
				)
					layout-social
</template>

<script>
export default {
	props: {
		footer: {
			type: Boolean,
			default() {
				return true;
			}
		}
	}
};
</script>

<style lang="scss" module>
.footer {
	background: {
		color: color.scale(map.get($colors, 'main'), $lightness: -10%);
	}

	color: var(--secondary);

	@include b-down(sm) {
		text: {
			align: center;
		}
	}

	.container {
		padding: {
			top: 24px;
			bottom: 24px;
		}
	}

	.row {
		align-items: center;
	}

	&__logo {
		height: 48px;

		svg {
			display: block;
			height: 48px;
		}
	}

	&__copy {
		@include b-down(sm) {
			order: 3;
		}
	}

	&__social {
		display: flex;
		justify-content: center;

		@include b-up(md) {
			justify-content: flex-end;
		}
	}

	&.bottom {
		.footer__social {
			@include b-down(sm) {
				order: 1;
				margin: {
					bottom: 24px;
				}
			}
		}
	}
}
</style>
