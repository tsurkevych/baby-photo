<template lang="pug">
	div(:class='$style.header')
		ui-container(
			:class='$style.container'
		)
			div(
				v-html='logo'
				:class='$style.header__logo'
			)
		transition(name='header')
			layout-waves(
				v-if='wave'
				:params='{color: "#e0cac6", index: 1, height: 120}'
			)
</template>

<script>
import logo from '@/assets/images/logo.svg?raw';
export default {
	data() {
		return {
			logo,
			wave: true
		};
	},
	mounted() {
		this.scroll();
		document.addEventListener('scroll', () => {
			this.scroll();
		});
	},

	methods: {
		scroll() {
			const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

			this.wave = !(scrollTop > 1);
		}
	}
};
</script>

<style lang="scss" module>
.header {
	position: sticky;
	z-index: 10;
	top: 0;
	background: {
		color: color.scale(map.get($colors, 'main'), $lightness: -10%);
	}

	.container {
		padding: {
			top: 16px;
			bottom: 16px;
		}
	}

	&__logo {
		height: 48px;

		svg {
			display: block;
			height: 48px;
		}
	}
}
</style>
