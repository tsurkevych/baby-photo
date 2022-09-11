<template lang="pug">
	div(:class='$style.menu')
		nav(:class='$style.nav')
			div(
				v-for='item in menu'
				:class='$style.nav__item'
				@click='scrollTo(item.id)'
			) {{ item.label }}
		client-only
			layout-footer(
				v-if='ww < $size.md'
				:class='$style.menu__social'
				:footer='false'
			)
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	data() {
		return {
			menu: [
				{
					label: 'Про мене',
					id:    'about'
				},
				{
					label: 'Послуги',
					id:    'services'
				},
				{
					label: 'Галерея',
					id:    'gallery'
				},
				{
					label: 'Інформація',
					id:    'faq'
				}
			]
		};
	},
	computed: mapGetters({
		ww: 'ww'
	}),
	methods: {
		scrollTo(id) {
			this.$emit('click');
			scrollTo({
				top:      document.getElementById(id).offsetTop - 100,
				behavior: 'smooth'
			});
		}
	}
};
</script>

<style lang="scss" module>
.nav {
	display: flex;
	flex-direction: column;
	align-items: center;

	@include b-up(md) {
		flex-direction: row;
	}

	&__item {
		margin: {
			bottom: 16px;
		}

		color: var(--secondary);

		font: {
			size: 24px;
			weight: 700;
		}

		cursor: pointer;

		@include b-up(md) {
			margin: {
				bottom: 0;
				left: 16px;
			}

			font: {
				size: 18px;
			}
		}
	}
}

.menu {
	display: flex;
	top: 80px;
	right: 0;
	left: 0;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: {
		color: color.scale(map.get($colors, 'main'), $lightness: 10%);
	}

	@include b-down(sm) {
		@include fix-height(80px);

		position: absolute;

		padding: {
			top: 20%;
		}

		// height: calc(100vh - 80px);
	}

	@include b-up(md) {
		flex-direction: row;
		margin: {
			// left: auto;
		}
		background: {
			color: color.scale(map.get($colors, 'main'), $lightness: -10%);
		}
	}

	&__social {
		width: 100%;

		margin: {
			top: auto;
		}

		/* position: absolute;
		right: 0;
		bottom: 0;
		left: 0; */
	}
}
</style>
