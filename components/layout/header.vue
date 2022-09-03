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
				:params='{color: "hsl(337, 100%, 89%)", index: 1, height: 120}'
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
	top: 0;
	background: {
		color: var(--main);
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
