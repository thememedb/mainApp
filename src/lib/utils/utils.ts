import {
	differenceInDays,
	differenceInHours,
	differenceInMinutes,
	differenceInMonths,
	differenceInWeeks,
	differenceInYears,
	formatDistanceToNowStrict
} from 'date-fns';

export function showScore(score: number) {
	return `${score > 0 ? '+' : ''}${score}`;
}

export function showTime(time: string) {
	const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
	return new Date(time).toLocaleString('lt-LT', { timeZone });
}

export function showTimeAgo(time: string) {
	const referenceDate = new Date(time);
	const now = new Date();
	const diffMs = now.getTime() - referenceDate.getTime();

	if (diffMs < 60 * 1000) return 'just now';

	const diffMinutes = differenceInMinutes(now, referenceDate);
	if (diffMinutes < 60) return `${diffMinutes} min ago`;

	const diffHours = differenceInHours(now, referenceDate);
	if (diffHours < 24) return `${diffHours} hour${diffHours === 1 ? '' : 's'} ago`;

	const diffDays = differenceInDays(now, referenceDate);
	if (diffDays < 7) return `${diffDays} day${diffDays === 1 ? '' : 's'} ago`;

	const diffWeeks = differenceInWeeks(now, referenceDate, { roundingMethod: 'floor' });
	if (diffWeeks < 4) return `${diffWeeks} week${diffWeeks === 1 ? '' : 's'} ago`;

	const diffMonths = differenceInMonths(now, referenceDate);
	if (diffMonths < 12) return `${diffMonths} month${diffMonths === 1 ? '' : 's'} ago`;

	const diffYears = differenceInYears(now, referenceDate);
	return `${diffYears} year${diffYears === 1 ? '' : 's'} ago`;
}
