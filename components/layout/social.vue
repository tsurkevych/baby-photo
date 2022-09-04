<template lang="pug">
	nav(:class='$style.social')
		a(
			v-for='(item, index) in items'
			:href='item.link'
			:class='$style.social__item'
			:title='item.icon'
		)
			svg-icon(
				:name='item.icon'
				:class='$style.icon'
			)

</template>
<script>
export default {
	data() {
		return {
			items: [
				{
					icon: 'telegram',
					link: 'tg://resolve?domain=Tetyana_Galabitska'
				},
				{
					icon: 'viber',
					link: 'viber://chat?number=%2B380682029597'
				},
				{
					icon: 'instagram',
					link: 'https://www.instagram.com/baby_foto_kiev/'
				}
			]
		};
	}
};
</script>

<style lang="scss" module>
.social {
	display: flex;
	align-items: center;

	&__item {
		display: block;
		width: 48px;
		min-width: 48px;
		height: 48px;

		&:not(:last-child) {
			margin: {
				right: 16px;
			}
		}

		@include b-up(md) {
			width: 32px;
			min-width: 32px;
			height: 32px;
		}

		.icon {
			width: 48px;
			height: 48px;

			@include b-up(md) {
				width: 32px;
				height: 32px;
			}
		}
	}
}
</style>
