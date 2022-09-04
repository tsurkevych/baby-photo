<template lang="pug">
	#__template
		layout-nav
		main
			nuxt
		layout-footer
		client-only
			lazy-layout-cursor
</template>

<script>

const title = 'ᐉ TataG • Дитячий фотограф • Дитяче фото';
const url = 'https://baby-photo.space';
const description = 'Потрібен дитячий фотограф? Дитяча фотосесія, як підготуватися, зйомка новонародженого. NEWBORN. Сімейна історія. Life style';
const image = url + require('~/assets/images/logo.png');

/**
 * @default
 * @summary стандартний лейаут сайту
 */
export default {
	head() {
		return {
			title,
			meta:  [
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
				}
			],

			script: [
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

		};
	}
};
</script>
