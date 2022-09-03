<template lang="pug">
	div(
		:is='tag || "div"'
		:class='grid'
	)
		slot
</template>

<script>

/**
 * @summary блок з контентом (потрібні допрацювання)
 */
export default {
	props: {
		tag: String, // тег/компонент
		xs:  { // розмірна сітка > 0
			type: Number,
			default() {
				return 24;
			}
		},
		sm: { // розмірна сітка >= 640px
			type: Number
		},
		md: { // розмірна сітка >= 961px
			type: Number
		},
		lg: { // розмірна сітка >= 1200px
			type: Number
		},
		xl: { // розмірна сітка >= 1599px
			type: Number
		}
	},
	computed: {
		/**
		 * @returns {object} - список класів
		 */
		grid() {
			return [
				this.$style[`col-${this.xs}`],
				this.sm && this.$style[`col-sm-${this.sm}`],
				this.md && this.$style[`col-md-${this.md}`],
				this.lg && this.$style[`col-lg-${this.lg}`],
				this.xl && this.$style[`col-xl-${this.xl}`]
			];
		}
	}
};
</script>

<style lang="scss" module>
/* stylelint-disable function-no-unknown */
@each $breakpoint in map-keys($grid-breakpoints) {
	@include b-up($breakpoint) {
		$infix: breakpoint-infix($breakpoint, $grid-breakpoints);

		@for $i from 1 through $grid-columns {
			.col#{$infix}-#{$i} {
				@include make-col($i);
				@include make-col-ready;
			}
		}
	}
}
</style>
