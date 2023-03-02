import { NuxtConfig } from '@nuxt/types';

const title = 'ᐉ TataG • Дитячий фотограф Київ • Дитяче фото';
const url = 'https://baby-photo.space';
const description = 'Потрібен дитячий фотограф? Дитяча фотосесія, як підготуватися, зйомка новонародженого. NEWBORN. Сімейна історія. Life style';
const image = url + '/logo.png';

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
			title,
			meta:                           [
				{
					'http-equiv': 'X-UA-Compatible',
					content:      'ie=edge'
				},
				{
					name:    'color',
					content: '#1f321a'
				},
				{
					name:    'google-site-verification',
					content: 'K3zhPlQVKS_lekSNBNQ6h9S-l3PgV1b-8IgShu3LqZ0'
				},
				{
					property: 'og:url',
					content:  'https://baby-photo.space/'
				},
				{
					property: 'og:locale',
					content:  'uk-UA'
				},
				{
					name:    'robots',
					content: 'index, follow'
				},
				{
					name:    'keywords',
					content: title
				},
				{
					name:    'description',
					content: description
				},
				{
					property: 'og:title',
					content:  'ᐉ TataG • Дитячий фотограф • Дитяче фото'
				},
				{
					property: 'og:description',
					content:  description
				},
				{
					property: 'og:image',
					content:  image
				}
			],
			link: [
				{
					rel:  'image_src',
					href:  image
				}, {
					rel:  'icon',
					type: 'image/x-icon',
					href: '/favicon.ico'
				}
			],
			script: [
				process.env.NODE_ENV === 'production' && {
					src:   'https://www.googletagmanager.com/gtag/js?id=G-DJBYERN53T',
					async: true
				},
				process.env.NODE_ENV === 'production' && {
					innerHTML: `const loadGtmScript = () => {
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
					
						gtag('config', 'G-DJBYERN53T');
					}`
				},
				{
					innerHTML: JSON.stringify({
						'@context': 'https://schema.org',
						'@graph':   [
							{
								'@type': 'WebSite',
								name:    title,
								url
							}, {
								'@type':   'Organization',
								name:      'TataG',
								logo:      image,
								description,
								image,
								url,
								telephone: '+380682029597',
								sameAs:    [ 'https://www.instagram.com/baby_foto_kiev/' ]
							}
						]
					}),
					type: 'application/ld+json'
				}
			]
		},
		router: {
			// middleware:   [ 'trailing-slash-redirect', 'user-agent' ]
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
			'@nuxtjs/style-resources'
		],
		modules:        [
			'@nuxtjs/robots',
			'@nuxtjs/sitemap',
			'@nuxtjs/svg-sprite'

			// '~/modules/gtm/index'
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

		/* gtm: {
			id:    'G-DJBYERN53T',
			layer: 'dataLayer',
			dev:   process.env.NODE_ENV === 'production'
		}, */
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
				fileName: 'icon.png'
			},
			meta: {
				charset:     'utf-8',
				viewport:    'width=device-width, initial-scale=1',
				mobileApp:   true,
				favicon:     true,
				name:        'tata-g',
				author:      'tata-g',
				theme_color: '#1f321a',
				lang:        'uk',
				ogSiteName:  'baby-photo.space',
				ogType:      'website',
				ogTitle:     false
			},
			manifest: {
				name:                    'tata-g',
				background_color:        '#ffffff',
				lang:                    'uk',
				useWebmanifestExtension: false
			}
		},
		cli: {
			badgeMessages: [ 'tata-g' ]
		},
		loading: '~/components/loading.vue'
	};
};

export default config;
