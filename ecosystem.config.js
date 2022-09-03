/* eslint-disable camelcase */
module.exports = {
	apps: [
		{
			name:      'epic',
			exec_mode: 'cluster',
			instances: 4,
			script:    './node_modules/nuxt/bin/nuxt.js',
			args:      'start'
		}
	]
};
