/* eslint-disable no-console */
/* eslint-disable no-invalid-this */
import path from 'path';
import { Module } from '@nuxt/types';
import { MetaInfo } from 'vue-meta';
import defaults from './defaults';
import { TataModuleGTM } from '@/types';

const gtm: Module<TataModuleGTM> = function(_moduleOptions) {
	const options = {
		default: defaults,
		config:  this.options.gtm
	};

	// setPlugin()
	if (options.config.enabled === undefined) options.config.enabled = options.default.enabled;

	if (options.config.id === undefined) {
		console.warn(`[gtm]: id does not set -> switched to default value: ${options.default.id}`);
		options.config.id = options.default.id;
	}
	if (options.config.layer === undefined) {
		console.warn(`[gtm]: layer options is not set -> switched to default value: ${options.default.layer}`);
		options.config.layer = options.default.layer;
	}
	if (options.config.dev === undefined) options.config.dev = options.default.dev;
	if (options.config.autoInit === undefined) options.config.autoInit = options.default.autoInit;
	if (options.config.variables === undefined) options.config.variables = options.default.variables;
	if (options.config.scriptId === undefined) options.config.scriptId = options.default.scriptId;
	if (options.config.scriptDefer === undefined) options.config.scriptDefer = options.default.scriptDefer;
	if (options.config.scriptURL === undefined) options.config.scriptURL = options.default.scriptURL;
	if (options.config.noScript === undefined) options.config.noScript = options.default.noScript;
	if (options.config.noScriptId === undefined) options.config.noScriptId = options.default.noScriptId;
	if (options.config.noScriptURL === undefined) options.config.noScriptURL = options.default.noScriptURL;

	const injectScript = `var f=d.getElementsByTagName(s)[0],
		j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
		j.${options.config.scriptDefer ? 'defer' : 'async'}=true;
		j.src='${options.config.scriptURL}?id='+i+dl;
		f.parentNode.insertBefore(j, f);
	`;
	const initLayer = " w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});";
	const params = `(window,document,'script','${options.config.layer}','${options.config.id}','_gtm_ids','_gtm_inject')`;
	const func = `(function(w,d,s,l,i,x,y){${initLayer}${injectScript}})${params}`;

	// Double load guard for IIFE
	const gtmFunction = `if(!window._gtm_init){window._gtm_init=1;${func}}`;
	const head = this.options.head as MetaInfo;

	head.script = head.script || [];
	if (options.config.dev) {
		head.script.push({
			hid:       options.config.scriptId,
			innerHTML: gtmFunction
		});

		if (options.config.noScript) {
			const noScript = `<iframe src='${options.config.noScriptURL}?id=${options.config.id}' height='0' width='0' style='display:none;visibility:hidden'></iframe>`;

			head.noscript = head.noscript || [];
			head.noscript.push({
				hid:       options.config.noScriptId,
				pbody:     true,
				innerHTML: noScript
			});
		}
	}

	this.addPlugin({
		src:      path.resolve(__dirname, 'plugins.js'),
		fileName: 'plugins.js',
		options:  {
			...options.config
		}
	});
};

export default gtm;
