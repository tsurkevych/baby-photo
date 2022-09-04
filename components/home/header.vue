<template lang="pug">
	ui-background(
		:class='$style.header'
		gradient=' linear-gradient(45deg, hsla(11, 15%, 79%, .4) 0%, rgba(156, 153, 225, .4) 100%)'
		:images='{\
			picture: require("@/assets/images/photo/IMG_3572-min.jpg")\
		}'
	)
		ui-container
			h1(:class='$style.header__title' v-html='title')
			ui-hr(:white='true')
			div(:class='$style.header__description')
				slot
</template>

<script>
export default {
	props: {
		title: String
	}
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
		top: 6%;
		bottom: 8%;
	}
	background: {
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
				size: 60px;
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
}
</style>
