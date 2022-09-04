import { Plugin } from '@nuxt/types';

/**
 * @description розмірна сітка сайту (стилі)
 * @example this.$size.sm // 640
 * @type {Plugin}
 */
const pluginSize: Plugin = (_ctx, inject) => {
	inject('size', {
		xs:  0,
		sm:  640,
		md:  961,
		lg:  1200,
		xl:  1599,
		xxl: 1920
	});
};

/**
 *
 * @description Глобальні плагіни
 * @type {Plugin}
 */
const plugin: Plugin = (...arg) => {
	pluginSize(...arg);
};

export default plugin;
