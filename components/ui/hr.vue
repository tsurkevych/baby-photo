<template lang="pug" functional>
	div(:class='[$style.hr, props.white && $style.white]')
		svg-icon(
			name='diaphragm'
			:class='$style.icon'
		)
</template>

<script>
export default {
	props: {
		white: Boolean
	}
};
</script>

<style lang="scss" module>
.hr {
	display: flex;
	position: relative;
	align-items: center;
	justify-content: center;
	margin: {
		top: 40px;
		bottom: 40px;
	}

	&::before,
	&::after {
		content: '';
		width: 100%;
		max-width: 100px;
		height: 2px;
		background: {
			color: var(--secondary);
		}
	}

	.icon {
		width: 50px;
		min-width: 50px;
		height: 50px;
		margin: {
			right: 40px;
			left: 40px;
		}

		color: var(--secondary);
	}

	&.white {
		&::before,
		&::after {
			background: {
				color: var(--white);
			}
		}

		.icon {
			color: var(--white);
		}
	}
}
</style>
