<template lang="pug">
	section#services(:class='$style.services')
		layout-waves(:params='{color: "hsl(0, 0%, 100%)", index: 6, height: 213, revert: true }')
		ui-container(:class='$style.container')
			ui-headline {{ params.title }}
			div(v-for='(item, index) in params.items')
				ui-hr(v-if='index !== 0')
				home-services-item(
					:key='index'
					:item='item'
				)
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
	position: relative;
	z-index: 3;

	.container {
		padding: {
			top: 1%;
			bottom: 12%;
		}
	}
}
</style>
