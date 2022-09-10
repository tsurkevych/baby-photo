import { Plugin } from '@nuxt/types';
import {
	Swiper,
	SwiperOptions,
	Navigation,
	Autoplay
} from 'swiper';
import events from '@/libs/events';

// import { Fancybox } from '@fancyapps/ui';

/**
 * @description Кастомні івенти ресайзу і скролу
 * @type {Plugin}
 */
const pluginEvents: Plugin = ({ store }) => {
	const resize = () => {
		store.commit('setWw', window.innerWidth);
		store.commit('setWh', window.innerHeight);
		document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
	};
	const scroll = () => {
		store.commit('setScrollTop', window.pageYOffset || document.documentElement.scrollTop);
	};

	events();
	resize();
	scroll();
	window.addEventListener('cr', resize);
	document.addEventListener('cs', scroll);
};

/**
 * @description Swiper
 * @example this.$swiper(el, params)
 * @type {Plugin}
 */
const pluginSwiper: Plugin = (_ctx, inject) => {
	Swiper.use([ Navigation, Autoplay ]);
	inject('swiper', (el: HTMLElement, params: SwiperOptions): Swiper => new Swiper(el, params));
};

/**
 * @description Fancybox
 * @type {Plugin}
 */
const pluginFancybox: Plugin = (_ctx, inject) => {
	const { Fancybox } = require('@fancyapps/ui');

	inject('fancybox', Fancybox);
};

/**
 *
 * @description Глобальні плагіни
 * @type {Plugin}
 */
const plugin: Plugin = (...arg) => {
	pluginEvents(...arg);
	pluginSwiper(...arg);
	pluginFancybox(...arg);
};

export default plugin;
