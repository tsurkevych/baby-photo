import Vue from 'vue';
import { Plugin } from '@nuxt/types';
import VueTippy, { TippyComponent } from 'vue-tippy';

// import { Fancybox } from '@fancyapps/ui';

/* import {
	Swiper,
	SwiperOptions,
	Navigation,
	Pagination,
	Autoplay,
	Thumbs
} from 'swiper'; */

/**
 * @description Swiper
 * @example this.$swiper(el, params)
 * @type {Plugin}
 */
/* const pluginSwiper: Plugin = (_ctx, inject) => {
	Swiper.use([
		Navigation,
		Pagination,
		Autoplay,
		Thumbs
	]);
	inject('swiper', (el: HTMLElement, params: SwiperOptions): Swiper => new Swiper(el, params));
}; */

/**
 * @description Tippy
 * @type {Plugin}
 */
const pluginTippy: Plugin = () => {
	Vue.use(VueTippy, {
		theme: 'light-border',
		arrow: true
	});
	Vue.component('Tippy', TippyComponent);
};

/**
 * @description Tippy
 * @type {Plugin}
 */
const pluginFancybox: Plugin = (_ctx, inject) => {
	const { Fancybox } = require('@fancyapps/ui');

	console.log(Fancybox);

	inject('fancybox', Fancybox);
};

/**
 *
 * @description Глобальні плагіни
 * @type {Plugin}
 */
const plugin: Plugin = (...arg) => {
	pluginFancybox(...arg);
	pluginTippy(...arg);
};

export default plugin;
