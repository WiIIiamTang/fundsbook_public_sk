import type { PageLoad } from './$types';
import { locale, loadTranslations } from '$lib/translations';
import defaults from '$lib/defaults.json';

export const prerender = true;
export const ssr = false;
export const trailingSlash = 'always';

export const load: PageLoad = async () => {
	// local storage
	const userLocale = localStorage.getItem('locale');
	if (userLocale) {
		locale.set(userLocale);
	} else {
		localStorage.setItem('locale', defaults.locale);
	}
	console.log(localStorage.getItem('locale'));

	const defaultLocale = defaults.locale;
	const initLocale = locale.get() || defaultLocale;

	await loadTranslations(initLocale);

	return {};
};
