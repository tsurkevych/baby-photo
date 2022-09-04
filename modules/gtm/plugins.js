/* eslint-disable no-underscore-dangle */

const _layer = '<%= options.layer %>';
const _id = '<%= options.id %>';

const GTMClient = (_ctx, isInit) => {
	return {
		init(id = _id) {
			if (isInit[id] || !window._gtm_inject) return;

			window._gtm_inject(id);
			isInit[id] = true;
		},
		push(obj) {
			window[_layer] = window[_layer] || [];

			window[_layer].push(obj);
		}
	};
};

const GTMServer = (ctx, isInit) => {
	const events = [];
	const inits = [];

	const head = ctx.app.head;

	ctx.beforeNuxtRender(() => {
		// if (!inits.length && !events.length) return;
	});

	if (head.script) {
		const gtmScript = head.script.find(s => s.hid === '<%= options.scriptId %>');

		// gtmScript.innerHTML = `window[${_layer}]=${JSON.stringify(events)};${gtmScript.innerHTML}`

		if (inits.length) gtmScript.innerHTML += `;${JSON.stringify(inits)}.forEach(function(i){window._gtm_inject(i)})}`;
	}

	return {
		init(id = _id) {
			if (isInit[id]) return;
			inits.push(id);
			isInit[id] = true;
		},
		push(obj) {
			events.push(obj);
		}
	};
};

const plugin = (ctx, inject) => {
	const id = '<%= options.id %>';
	const autoInit = '<%= options.autoInit %>';
	const isInit = autoInit && id ? { [id]: true } : {};
	const $gtm = process.client ? GTMClient(ctx, isInit) : GTMServer(ctx, isInit);

	ctx.$gtm = $gtm;
	inject('gtm', ctx.$gtm);
};

export default plugin;
