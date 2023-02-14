import i18n from 'sveltekit-i18n';
import type { Config } from 'sveltekit-i18n';

const config: Config = {
	translations: {
		en: {
			en: 'English',
			cn: 'Chinese'
		},
		cn: {
			en: '英语',
			cn: '中文'
		}
	},
	loaders: [
		{
			locale: 'en',
			key: 'common',
			loader: async () => (await import('./en/common.json')).default
		},
		{
			locale: 'cn',
			key: 'common',
			loader: async () => (await import('./cn/common.json')).default
		}
	]
};

export const { t, loading, locales, locale, loadTranslations } = new i18n(config);

loading.subscribe(($loading) => $loading && console.log('Loading translations...'));
