<template lang="pug">
	section(:class='[$style.service, $style[`service--${level}`]]')
		header(:class='$style.service__header')
			div(:class='$style.service__title')
				component(:is='level === 2 ? "h4" : "h3"') {{ item.name }}
			div(
				v-if='item.description'
				:class='$style.service__description'
			) ({{ item.description }})
		div(
			v-if='item.items'
			:class='$style.service__sub'
		)
			home-services-item(
				v-for='(item, index) in item.items'
				:key='index'
				:item='item'
				:level='2'
			)
		ul(
			v-if='item.list'
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
			li(
				v-if='item.images'
				:class='$style.service__gallery'
			)
				button(
					ref='prev'
					:class='[$style.gallery__arrow, $style.prev]'
				)
					svg-icon(name='arrow-left' :class='$style.icon')
				button(
					ref='next'
					:class='[$style.gallery__arrow, $style.next]'
				)
					svg-icon(name='arrow-right' :class='$style.icon')
				.swiper(
					:class='$style.gallery'
					ref='swiper'
				)
					.swiper-wrapper
						ui-background.swiper-slide(
							v-for='(item, i) in item.images'
							:key='i'
							:class='$style.gallery__item'
							:images='{\
								picture: require("@/assets/images/thumbs/" + item + ".jpg")\
							}'
							:data-fancybox='`gallery_${_uid}`'
							:data-src='require("@/assets/images/popup/" + item + ".jpg")'
						)
		div(
			v-if='item.price'
			:class='$style.service__price'
		)
			svg-icon(
				name='price'
				:class='$style.icon'
			)
			| {{ item.price }} грн
</template>

<script>
export default {
	props: {
		item:  Object,
		level: {
			type: Number,
			default() {
				return 1;
			}
		}
	},
	mounted() {
		this.$swiper(this.$refs.swiper, {
			speed:         400,
			slidesPerView: 'auto',
			spaceBetween:  16,
			navigation:    {
				nextEl: this.$refs.next,
				prevEl: this.$refs.prev
			}
		});
	}
};
</script>

<style lang="scss" module>
.service {
	display: flex;
	flex-direction: column;
	height: 100%;

	// overflow: hidden;
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
		padding: 8px 16px;
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

		.icon {
			width: 16px;
			height: 16px;
			margin: {
				bottom: 0;
				left: 8px;
			}
		}
	}

	&__description {
		font: {
			size: 13px;
			weight: 400;
		}
	}

	&__list {
		padding: 16px;
	}

	&__gallery {
		display: flex;
		position: relative;
		align-items: center;
	}

	&__item {
		.icon {
			display: inline;
			width: 8px;
			min-width: 8px;
			height: 8px;
			margin: {
				right: 4px;
				bottom: 1px;
			}
		}

		text: {
			align: center;
		}

		&:not(:last-child) {
			margin: {
				bottom: 8px;
			}
		}
	}

	&__price {
		display: flex;
		align-items: center;
		justify-content: center;
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

	&__sub {
		padding: 0 8px 8px;
	}

	&--2 {
		@include border(right, var(--main), 3);
		@include border(left, var(--main), 3);
		margin: {
			top: 8px;
		}
	}
}

.gallery {
	display: flex;
	align-items: center;
	justify-content: center;

	&__item {
		width: 50px;
		max-width: 50px;
		height: 50px;
		cursor: zoom-in;

		/* margin: {
			bottom: 16px;
		} */
		background: {
			position: center;
			size: cover;
		}

		@include b-up(md) {
			width: 100px;
			max-width: 100px;
			height: 100px;
		}
	}

	&__arrow {
		display: flex;
		position: absolute;
		z-index: 5;
		top: calc(50% - 20px);
		align-items: center;
		justify-content: center;
		width: 40px;
		height: 40px;
		transition: opacity $time;
		box-shadow: 2px 2px 5px var(--secondary);
		border: {
			radius: 50%;
		}
		background: {
			color: var(--main);
		}

		&.prev {
			left: -20px;
		}

		&.next {
			right: -20px;
		}

		&[class~='swiper-button-disabled'] {
			opacity: 0;
		}

		.icon {
			width: 12px;
			height: 12px;
		}
	}
}

</style>
