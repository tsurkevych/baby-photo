<template lang="pug">
	section#services(:class='$style.services')
		layout-waves(:params='{color: "hsl(0, 0%, 100%)", index: 6, height: 213, revert: true }')
		ui-container(:class='$style.container')
			ui-headline {{ params.title }}
			ui-row
				ui-grid(:md='4')
				ui-grid(:xs='8' :md='4')
					div(:class='$style.services__sticky')
						ui-image(
							:images='{\
								picture: require("@/assets/images/1.png")\
							}'
							alt="price"
							title="price"
						)
				ui-grid(:xs='16' :md='10')
					div(:class='$style.services__main')
						div(v-for='(item, index) in params.items')
							ui-hr(v-if='index !== 0')
							home-services-item(
								:key='index'
								:item='item'
							)
			ui-hr
			div(:class='$style.prices')
				div(:class='$style.prices__title')
					h3 Вартість
						span послуг
				ui-row
					ui-grid(:md='6')
					ui-grid(:md='12')
						div(:class='$style.prices__list')
							ul
								li ТАЇНСТВО ХРЕЩЕННЯ
								li ВИПИСКА 3 ПОЛОГОВОГО
								li ПЕРШІ ДНІ В ПОЛОГОВОМУ
								li ПЕРШИЙ ТОРТИК
								li СІМЕЙНА ІСТОРІЯ
								li ФОТОПРОГУЛЯНКА
							div(:class='$style.prices__sum')
								div 1000
									span грн/год
						div(:class='$style.prices__description')
							ui-image(
								:images='{\
									picture: require("@/assets/images/1.png")\
								}'
								alt="price"
								title="price"
							)
							span 100+ ФОТО В КОЛЬОРО ТА СВІТЛОКОРЕКЦІЇ. <br>  ПЕРЕДАЧА МАТЕРІАЛУ ЧЕРЕЗ ФАЙЛООБМІННИК. <br> ТЕРМІН ГОТОВНОСТІ ФОТО 2 ТИЖНІ.
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

<style>
@import 'https://fonts.googleapis.com/css2?family=Yomogi&display=swap';
</style>

<style lang="scss" module>
.services {
	position: relative;
	z-index: 3;

	&__sticky {
		position: sticky;
		z-index: 6;
		top: 30vh;

		img {
			display: block;
			position: relative;

			@include b-down(sm) {
				left: -10vw;
				width: 160%;
			}

			@include b-up(md) {
				width: 120%;
			}
		}
	}

	/* &__main {
		height: 300vh;
	} */

	.container {
		padding: {
			top: 1%;
			bottom: 12%;
		}
	}
}

.prices {
	&__title {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: {
			bottom: 70px;
		}
		font: {
			size: 24px;
			weight: 500;
		}

		text-transform: uppercase;

		@include b-up(md) {
			font: {
				size: 32px;
			}
		}

		h3 {
			padding: {
				left: 5%;
			}
		}

		span {
			position: relative;
			top: 36px;
			left: -20%;
			color: color.scale(map.get($colors, 'main'), $lightness: -30%);
			font: {
				family: 'Yomogi', cursive;
			}
		}
	}

	&__sum {
		color: color.scale(map.get($colors, 'main'), $lightness: -30%);
		font: {
			style: italic;
			size: 18px;
		}

		@include b-up(md) {
			font: {
				size: 32px;
			}
		}

		span {
			position: relative;
			top: 28px;
			left: -20%;
		}
	}

	&__list {
		display: flex;
		align-items: center;
		justify-content: center;

		ul {
			width: 60%;

			@include border(right, color.scale(map.get($colors, 'main'), $lightness: -30%), 2);

			margin-right: 20px;
			padding: {
				right: 20px;
				left: 20px;
			}

			list-style: disc;
			font: {
				size: 18px;
			}

			@include b-up(md) {
				font: {
					size: 22px;
				}
			}
		}
	}

	&__description {
		position: relative;
		margin: {
			top: 100px;
			bottom: 100px;
		}

		color: color.scale(map.get($colors, 'main'), $lightness: -30%);

		@include b-up(md) {
			margin: {
				top: 200px;
				bottom: 200px;
			}
		}

		span {
			display: block;
			padding: {
				left: 30%;
			}

			font: {
				size: 18px;
			}
		}

		img {
			position: absolute;
			top: -100px;
			bottom: -100px;
			width: auto;
			height: calc(100% + 200px);
			margin: {
				top: 30px;
				right: 30px;
			}

			@include b-up(md) {
				top: -200px;
				bottom: -200px;
				height: calc(100% + 400px);
			}
		}
	}
}
</style>
