<template lang="pug">
	div(
		:class='[$style.loader, $style[`loader--${type}`]]'
	)
		div(:class='$style.loader__grid')
			div(
				v-for='item in 9'
				:class='[$style.loader__item, $style[`loader__item--${item}`]]'
			)
</template>

<script>

/**
 * @summary прелоадер
 */
export default {
	props: {
		type: { // тип (колір лоадера)
			type: String,
			default() {
				return 'blue';
			}
		}
	}
};
</script>

<style lang="scss" module>
.loader {
	display: flex;
	position: absolute;
	z-index: 3;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	align-items: center;
	justify-content: center;
	background: {
		color: var(--main);
	}

	/* background: {
		attachment: scroll;
		position: center;
		repeat: no-repeat;
		size: 50px 50px;
	} */

	/* &--white {
		background: {
			color: var(--blue);
			image: var(--load-white);
		}
	}

	&--blue {
		background: {
			color: var(--white);
			image: var(--load-blue);
		}
	} */

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
			color: var(--secondary);
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
		transform: scale3d(.9, .9, .9);
	}

	35% {
		transform: scale3d(0, 0, 1);
	}
}
</style>
