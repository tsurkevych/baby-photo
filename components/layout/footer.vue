<template lang="pug">
	div(:class='$style.footer')
		layout-waves(:params='{color: "hsl(208, 97%, 87%)", index: 2, height: 198, revert: true}')
		ui-container(
			:class='$style.container'
		)
			| © {{ new Date().getFullYear() }} TataG
</template>

<style lang="scss" module>
.footer {
	position: sticky;
	top: 0;
	background: {
		color: var(--secondary);
	}

	.container {
		padding: {
			top: 12px;
			bottom: 24px;
		}
	}

	&__logo {
		height: 48px;

		svg {
			display: block;
			height: 48px;
		}
	}
}
</style>
