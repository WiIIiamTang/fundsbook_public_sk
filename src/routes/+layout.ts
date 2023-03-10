import type { LayoutLoad } from './$types';
import { locale, loadTranslations } from '$lib/translations';
import defaults from '$lib/defaults.json';

export const prerender = true;
export const ssr = false;
export const trailingSlash = 'always';

export const load: LayoutLoad = async () => {
	// local storage
	const userLocale = localStorage.getItem('fbpsk_config_locale');
	if (userLocale) {
		locale.set(userLocale);
	} else {
		localStorage.setItem('fbpsk_config_locale', defaults.locale);
	}

	const defaultLocale = defaults.locale;
	const initLocale = userLocale || defaultLocale;

	await loadTranslations(initLocale);

	return {};
};
