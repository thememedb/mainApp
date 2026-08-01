export function showScore(score: number) {
	return `${score > 0 ? '+' : ''}${score}`;
}

export function showTime(time: string) {
	const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
	return new Date(time).toLocaleString('lt-LT', { timeZone });
}

export const dateFormatShort = new Intl.DateTimeFormat('en-US', {
	month: 'long',
	day: 'numeric'
});
export const dateFormatFull = new Intl.DateTimeFormat('lt-LT', {
	month: 'short',
	day: 'numeric',
	year: 'numeric'
});
export const dateFormatRelative = new Intl.RelativeTimeFormat("en-GB", {
	numeric: 'auto',
	style: 'short'

});

// let cachedLocale = '';
// let shortDateFormatter: Intl.DateTimeFormat | null = null;
// let relativeFormatter: Intl.RelativeTimeFormat | null = null;

// export function getShortDateFormatter() {
// 	const locale = navigator.language;

// 	if (!shortDateFormatter || locale !== cachedLocale) {
// 		cachedLocale = locale;
// 		shortDateFormatter = new Intl.DateTimeFormat(locale, {
// 			month: 'long',
// 			day: 'numeric'
// 		});
// 	}

// 	return shortDateFormatter;
// }
// export function getRelativeTimeFormatter() {
// 	const locale = navigator.language;

// 	if (!relativeFormatter || cachedLocale !== locale) {
// 		cachedLocale = locale;
// 		relativeFormatter = new Intl.RelativeTimeFormat(locale, {
// 			numeric: 'auto'
// 		});
// 	}

// 	return relativeFormatter;
// }
