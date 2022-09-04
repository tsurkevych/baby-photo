
import { TataModuleGTM } from '@/types';

const defaults: TataModuleGTM = {
	enabled:   undefined,
	id:        undefined,
	layer:     'dataLayer',
	autoInit:  true,
	dev:       true,
	variables: {},

	scriptId:    'gtm-script',
	scriptDefer: false,
	scriptURL:   'https://www.googletagmanager.com/gtm.js',

	noScript:    true,
	noScriptId:  'gtm-noscript',
	noScriptURL: 'https://www.googletagmanager.com/ns.html'
};

export default defaults;
