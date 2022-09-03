module.exports = {
	extends: [ '@commitlint/config-conventional' ],
	plugins: [ 'commitlint-plugin-regexscope' ],
	rules:   {
		regexscope: [
			2,
			'always',
			{
				pattern: /^(WEB|WEB|AD|PORT|CRM|EM)-[0-9]{2,6}$/,
				case:    'upper-case'
			}
		]
	}
};
