<template lang="pug">
	component(
		:is='tag || "div"'
		:class='$style.row'
	)
		slot
</template>

<script>

/**
 * @summary row
 */
export default {
	props: {
		tag: String // тег/компонент
	}
};
</script>

<style lang="scss" module>
.row {
	@include make-row;
}
</style>
