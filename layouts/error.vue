<template lang='pug'>
	div 404
</template>

<script>

/**
 * @summary компонент 404 помилки
 */
export default {
	layout: 'error',
	props:  {
		error: Object // об'єкт помилки
	}
};
</script>

<style lang="scss" module>
.header {
	height: 178px;

	@include b-up(md) {
		height: 384px;
	}
}

.error {
	padding: {
		top: 32px;
		bottom: 32px;
	}

	.headline {
		font: {
			size: 16px;
		}

		@include b-up(md) {
			font: {
				size: 20px;
			}
		}

		&--bottom {
			margin: {
				top: 16px;
				bottom: 0;
			}

			@include b-up(md) {
				margin: {
					top: 32px;
				}
			}
		}
	}

	&__home {
		margin: 0 4px;
		color: var(--link);
		white-space: nowrap;

		@include hover {
			text: {
				decoration: underline;
			}
		}
	}
}
</style>
