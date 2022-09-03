<template lang="pug" functional>
	component(
		:class='$style.title'
		:is='props.tag'
	)
		slot
</template>

<script>
export default {
	props: {
		tag: {
			type: String,
			default() {
				return 'h2';
			}
		}
	}
};
</script>

<style lang="scss" module>
.title {
	margin: {
		bottom: 6%;
	}

	font: {
		size: 28px;
		weight: 900;
	}
	text: {
		align: center;
		transform: uppercase;
	}

	@include b-up(md) {
		font: {
			size: 48px;
		}
	}
}
</style>

