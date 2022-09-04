import { NuxtConfig } from '@nuxt/types';

/* eslint-disable camelcase */
const config: NuxtConfig = () => {
	return {
		target:   'static',
		generate: {
			dir:      'public',
			fallback: '404.html'
		},
		head:   {
			__dangerouslyDisableSanitizers: [ 'script', 'noscript' ],
			meta:                           [
				{
					'http-equiv': 'X-UA-Compatible',
					content:      'ie=edge'
				},
				{
					name:    'color',
					content: '#1060c1'
				},
				{
					name:    'google-site-verification',
					content: 'K3zhPlQVKS_lekSNBNQ6h9S-l3PgV1b-8IgShu3LqZ0'
				}
			],
			link: [
				{
					rel:  'icon',
					type: 'image/x-icon',
					href: '/favicon.ico'
				}
			]
		},
		router: {
			middleware:   [ 'trailing-slash-redirect', 'user-agent' ]
		},
		plugins:      [
			{
				src:  '~/plugins/server.ts'
			}, {
				src:  '~/plugins/client.ts',
				mode: 'client'
			}
		],
		css:            [ 'assets/scss/style.scss' ],
		components:     true,
		buildModules:   [
			'@nuxt/typescript-build',
			'@nuxtjs/pwa',
			'@nuxtjs/svg',
			'@nuxtjs/stylelint-module',
			'@nuxtjs/style-resources',
			'@nuxtjs/device'
		],
		modules:        [
			'@nuxtjs/axios',
			'@nuxtjs/robots',
			'@nuxtjs/sitemap',
			'@nuxtjs/svg-sprite',
			'@nuxt/content'
		],
		svgSprite: {
			input:        '~/assets/svg/',
			elementClass: 'ep-icon'
		},
		styleResources: {
			scss: [ 'assets/scss/util/settings.scss' ]
		},
		build: {
			// extractCSS: true,

			/* analyze: {
				analyzerMode: 'static'
			}, */
			postcss:    {
				syntax:  'postcss-scss',
				plugins: [
					require('autoprefixer'), require('cssnano')({
						preset: [
							'default', {
								discardComments: {
									removeAll: true
								}
							}
						]
					})
				]
			},
			loaders: {
				scss: {
					implementation: require('sass')
				},
				cssModules: {
					modules: {
						localIdentName: process.env.NODE_ENV === 'development' ? '[local]-[hash:base64:12]' : '_[hash:base64:4]'
					}
				}
			}
		},
		sitemap: {
			hostname: 'https://baby-photo.space/',
			gzip:     true
		},
		robots: [
			{
				UserAgent: '*'
			}
		],
		pwa: {
			icon: {
				source:   '[srcDir]/[staticDir]/icon.png',
				fileName: 'icon.png',
				purpose:  'maskable'
			},
			meta: {
				charset:     'utf-8',
				viewport:    'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0',
				mobileApp:   true,
				favicon:     true,
				name:        'tata-g',
				author:      'tata-g',
				theme_color: '#0261AF',
				lang:        'ua',
				ogSiteName:  'baby-photo.space',
				ogType:      'website',
				ogTitle:     false
			},
			manifest: {
				name:                    'tata-g',
				background_color:        '#ffffff',
				lang:                    'ru',
				useWebmanifestExtension: false
			}
		},
		cli: {
			badgeMessages: [ 'tata-g' ]
		},
		device: {
			refreshOnResize: true
		},
		loading: '~/components/loading.vue'
	};
};

export default config;
