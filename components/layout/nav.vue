<template lang="pug">
	div#home(:class='$style.header')
		ui-container(
			:class='$style.container'
		)
			div(:class='$style.header__left')
				div(
					v-html='logo'
					:class='$style.header__logo'
					@click='scrollTo'
				)
			transition(name='header')
				layout-menu(
					v-show='(ww === 0 || (ww >= $size.md) || open) && $route.path === "/"'
					:class='$style.header__menu'
					@click='setOpen(false)'
				)
			a(
				:class='$style.phone'
				href='tel:+380682029597'
				title='Телефон'
			)
				svg-icon(
					:class='$style.icon'
					name='phone'
				)
				span(v-show='ww === 0 || ww >= $size.md') +38 (068) 202 95 97
			client-only
				div(
					v-if='(ww < $size.md) && $route.path === "/"'
					:class='$style.burger'
					@click='setOpen(!open)'
				)
					span(:class='[$style.hamburger, $style["hamburger--squeeze"], open && $style["is-active"]]')
						span(:class='$style["hamburger-box"]')
							span(:class='$style["hamburger-inner"]')
		transition(name='header')
			layout-waves(
				v-if='wave'
				:params='{color: "#c1c791", index: 1, height: 120}'
			)
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import logo from '@/assets/images/logo.svg?raw';
export default {
	data() {
		return {
			logo,
			wave: true,
			open: false
		};
	},
	computed: mapGetters({
		ww: 'ww'
	}),
	watch: {
		ww() {
			if (this.ww >= this.$size.md) {
				this.bodyScrollAdd();
				this.setOpen(false);
			}
		}
	},
	mounted() {
		this.scroll();
		document.addEventListener('scroll', () => {
			this.scroll();
		});
	},
	methods: {
		...mapActions({
			bodyScrollRemove: 'bodyScrollRemove',
			bodyScrollAdd:    'bodyScrollAdd'
		}),
		scrollTo() {
			scrollTo({
				top:      0,
				behavior: 'smooth'
			});
		},
		scroll() {
			const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

			this.wave = !(scrollTop > 1);
		},
		setOpen(payload) {
			(payload && this.ww < this.$size.md) ? this.bodyScrollRemove() : this.bodyScrollAdd();
			this.open = payload;
		}
	}
};
</script>

<style lang="scss" module>
$hamburger-padding-x: 0 !default;
$hamburger-padding-y: 0 !default;
$hamburger-layer-width: 24px !default;
$hamburger-layer-height: 3px !default;
$hamburger-layer-spacing: 6px !default;
$hamburger-layer-color: var(--secondary) !default;
$hamburger-layer-border-radius: 2px !default;
$hamburger-hover-opacity: 1 !default;
$hamburger-active-layer-color: $hamburger-layer-color !default;
$hamburger-active-hover-opacity: $hamburger-hover-opacity !default;
$hamburger-hover-use-filter: false !default;
$hamburger-hover-filter: opacity(50%) !default;
$hamburger-active-hover-filter: $hamburger-hover-filter !default;
$hamburger-types: (squeeze) !default;

@import '~hamburgers/_sass/hamburgers/base';
@import '~hamburgers/_sass/hamburgers/types/squeeze';

.burger {
	display: flex;
	align-items: center;
	margin: {
		left: 16px;
	}

	.hamburger {
		height: 21px;
	}
}

.header {
	position: sticky;
	z-index: 10;
	top: 0;
	background: {
		color: color.scale(map.get($colors, 'main'), $lightness: -10%);
	}

	.container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: {
			top: 16px;
			bottom: 16px;
		}
	}

	&__left {
		display: flex;

		@include b-up(md) {
			width: 220px;
		}
	}

	&__logo {
		height: 48px;
		cursor: pointer;

		svg {
			display: block;
			height: 48px;
		}
	}
}

.phone {
	display: flex;
	align-items: center;
	margin: {
		left: auto;
	}
	font: {
		size: 18px;
		weight: 700;
	}

	@include b-up(md) {
		margin: {
			left: 24px;
		}
	}

	.icon {
		margin: {
			right: 8px;
		}
	}

	span {
		@include b-down(sm) {
			display: none;
		}
	}
}
</style>
