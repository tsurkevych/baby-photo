<template lang="pug">
	component(
		:is='tag'
		:class='[$style.container, fluid && $style.fluid]'
		@click='$emit("click", $event)'
	)
		slot
</template>

<script>

/**
 * @summary контейнер
 * @event click
 * @tutorial 'http://localhost:4001/docs/vue/components/ui/#container'
 */
export default {
	props: {
		tag: {
			type: String,
			default() {
				return 'div';
			}
		},
		fluid: {
			type: Boolean,
			default() {
				return false;
			}
		}
	}
};
</script>

<style lang="scss" module>
.container {
	@include make-container;

	width: 100%;
	max-width: 1600px;

	@include b-up(md) {
		width: 89%;
	}

	@include b-up(lg) {
		width: 84.3%;
	}

	&.fluid {
		width: 100%;
		max-width: 1920px;
	}
}
</style>
