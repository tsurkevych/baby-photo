<template lang="pug">
	div(:class='$style.services')
		ui-container
			h2(:class='$style.services__title') {{ params.title }}
			ui-row
				ui-grid(
					v-for='(item, index) in params.items'
					:key='index'
					:class='$style.services__item'
					:md='12'
				)
					div(
						:class='$style.service'
					)
						header(
							:class='$style.service__header'
						)
							svg-icon(
								name='diaphragm'
								:class='$style.icon'
							)
							div(:class='$style.service__title')
								h3 {{ item.name }}
								svg-icon(
									v-if='item.description'
									v-tippy='{theme: "light-border", arrow: true}'
									:content='item.description'
									name='info'
									:class='$style.icon'
								)

						ul(
							:class='$style.service__list'
						)
							li(
								v-for='item in item.list'
								:class='$style.service__item'
							)
								svg-icon(
									name='checked'
									:class='$style.icon'
								)
								| {{ item }}
						div(
							:class='$style.service__price'
						)
							svg-icon(
								name='price'
								:class='$style.icon'
							)
							| {{ item.price }} грн
</template>

<script>
import params from '@/data/services.json';
export default {
	data() {
		return {
			params
		};
	}
};
</script>

<style lang="scss" module>
.services {
	padding: {
		top: 8%;
		bottom: 8%;
	}

	&__title {
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

	&__item {
		margin: {
			bottom: 16px;
		}
	}
}

.service {
	display: flex;
	flex-direction: column;
	height: 100%;
	overflow: hidden;

	// @include border(all, var(--secondary));
	box-shadow: 0 0 10px rgba(137, 128, 105, .2);
	border: {
		radius: 4px;
	}
	background: {
		color: color.scale(map.get($colors, 'main'), $lightness: 50%);
	}

	&__header {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 16px 8px;

		// color: var(--white);
		background: {
			color: var(--main);
		}
		font: {
			size: 18px;
			weight: 700;
		}
		text: {
			align: center;
		}

		.icon {
			width: 28px;
			height: 28px;
			margin: {
				bottom: 16px;
			}
		}
	}

	&__title {
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;

		.icon {
			width: 16px;
			height: 16px;
			margin: {
				bottom: 0;
				left: 8px;
			}
		}
	}

	&__list {
		padding: 16px;
	}

	&__item {
		display: flex;
		align-items: center;

		.icon {
			width: 16px;
			min-width: 16px;
			height: 16px;
			margin: {
				right: 8px;
			}
		}

		&:not(:last-child) {
			margin: {
				bottom: 8px;
			}
		}
	}

	&__price {
		// @include border(top, var(--secondary));

		display: flex;
		align-items: center;
		margin: {
			top: auto;
		}

		padding: 8px 16px;
		background: {
			color: var(--main);
		}

		font: {
			size: 28px;
			weight: 900;
		}

		.icon {
			width: 24px;
			min-width: 24px;
			height: 24px;
			margin: {
				right: 16px;
			}
		}
	}
}
</style>
