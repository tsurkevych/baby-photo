<template lang="pug">
	transition(name='fade')
		div(v-if='loading' :class='$style.loading')
			div(:class='$style.loading__grid')
				div(
					v-for='item in 9'
					:class='[$style.loading__item, $style[`loading__item--${item}`]]'
				)
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

/**
 * @summary Лоадер (перехід між сторінками)
 */
export default {
	computed: mapGetters({
		loading: 'loading'
	}),
	methods: {
		...mapMutations({
			setLoading: 'setLoading'
		}),
		start() {
			this.setLoading(true);
		},
		finish() {
			this.setLoading(false);
		}
	}
};
</script>

<style lang="scss" module>
.loading {
	display: flex;
	position: fixed;
	z-index: 100;
	top: 0;
	left: 0;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	background: rgba(255, 255, 255, .8);

	&__grid {
		width: 40px;
		height: 40px;
		margin: 100px auto;
	}

	&__item {
		width: 33%;
		height: 33%;
		float: left;
		animation: cube-grid-scale-delay 1.3s infinite ease-in-out;
		background: {
			color: var(--blue);
		}

		$items: 1 .2s,
			2 .3s,
			3 .4s,
			4 .1s,
			5 .2s,
			6 .3s,
			7 0s,
			8 .1s,
			9 .2s;

		@each $t, $c in $items {
			&--#{$t} {
				animation: {
					delay: $c;
				}
			}
		}
	}
}

@keyframes cube-grid-scale-delay {
	0%,
	70%,
	100% {
		transform: scale3d(1, 1, 1);
	}

	35% {
		transform: scale3d(0, 0, 1);
	}
}

</style>
