<template lang="pug">
	div(:class='$style.content')
		template(v-for='item in content')
			component(
				v-if='typeof item.text === "string"'
				:is="item.tag"
				v-html='item.text'
			)
			component(
				v-else
				:is="item.tag"
			)
				li(
					v-for='text in item.text'
					v-html='text'
				)
</template>

<script>

/**
 * @summary блок з контентом (потрібні допрацювання)
 * @tutorial 'http://localhost:4001/docs/vue/components/ui/#content'
 */
export default {
	props: {
		content: Array
	}
};
</script>

<style lang="scss" module>
.content {
	position: relative;
	width: 100%;
	max-width: 100%;
	font: {
		size: 16px;
	}

	line-height: 1.5;

	h3,
	h4 {
		font: {
			weight: 700;
		}
		line: {
			height: 1.2;
		}

		&:not(:first-child) {
			margin: {
				top: 16px;
			}
		}

		&:not(:last-child) {
			margin: {
				bottom: 16px;
			}
		}

		@include b-up(md) {
			font: {
				size: 20px;
			}
		}
	}

	h5,
	h6 {
		font: {
			weight: 500;
		}

		&:not(:first-child) {
			margin: {
				top: 16px;
			}
		}

		&:not(:last-child) {
			margin: {
				bottom: 16px;
			}
		}
	}

	p {
		&:not(:first-child) {
			margin: {
				top: 16px;
			}
		}

		&:not(:last-child) {
			margin: {
				bottom: 16px;
			}
		}
	}

	b {
		font: {
			weight: 700;
		}
	}

	img {
		display: block;
		width: 100%;
		height: auto;

		&:not(:first-child) {
			margin: {
				top: 16px;
			}
		}

		&:not(:last-child) {
			margin: {
				bottom: 16px;
			}
		}
	}

	ul {
		&:not(:first-child) {
			margin: {
				top: 16px;
			}
		}

		&:not(:last-child) {
			margin: {
				bottom: 16px;
			}
		}

		li {
			position: relative;

			margin: {
				bottom: 4px;
			}
			padding: {
				left: 16px;
			}

			&::before {
				content: '';
				position: absolute;
				top: 11px;
				left: 6px;
				width: 3px;
				height: 3px;
				border: {
					radius: 50%;
				};
				background: {
					color: var(--secondary);
				}
			}
		}
	}

	ol {
		&:not(:first-child) {
			margin: {
				top: 16px;
			}
		}

		&:not(:last-child) {
			margin: {
				bottom: 16px;
			}
		}

		counter-reset: counter;

		li {
			margin: {
				bottom: 4px;
			}

			counter-increment: counter;

			&::before {
				content: counter(counter) '. ';
			}
		}
	}

	a {
		color: var(--link);

		@include hover {
			text: {
				decoration: underline;
			}
		}
	}
}
</style>
