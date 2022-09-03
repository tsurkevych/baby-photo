<template lang="pug">
	header(:class='$style.header')
		ui-container
			h1(:class='$style.header__title') Дитяча фотосесія
			div(:class='$style.header__hr')
				svg-icon(
					name='diaphragm'
					:class='$style.icon'
				)
			div(:class='$style.header__description')
				p якісні фото
				p на довгу пам'ять
</template>

<script>
export default {

};
</script>

<style lang="scss" module>
.header {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: calc(100vh - 80px);
	padding: {
		top: 8%;
		bottom: 8%;
	}
	background: {
		image: linear-gradient(45deg, rgba(255, 106, 161, 1) 0%, rgba(63, 166, 255, .6) 100%), url('~/assets/images/photo/IMG_3572-min.jpg');
		position: center;
		size: cover;
	}

	&__title {
		color: var(--white);

		font: {
			size: 36px;
			weight: 900;
		}
		text: {
			align: center;
			transform: uppercase;
		}

		@include b-up(md) {
			font: {
				size: 100px;
			}
		}
	}

	&__description {
		color: var(--white);
		font: {
			size: 24px;
			weight: 700;
		}
		text: {
			align: center;
		}
	}

	&__hr {
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
				color: var(--white);
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

			color: var(--white);
		}
	}
}
</style>
