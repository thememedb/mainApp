<script lang="ts">
	import { dateFormatShort, dateFormatFull, dateFormatRelative } from '$lib/utils/utils';

	let { time } = $props();

	function showTimeAgo(time: string): { text: string; isDate: boolean } {
		const postDate = new Date(time);
		const now = new Date();

		if (now.getFullYear() > postDate.getFullYear())
			return { text: dateFormatFull.format(postDate), isDate: true };

		const diffMs = now.getTime() - postDate.getTime();
		const seconds = Math.floor(diffMs / 1000);
		const minutes = Math.floor(seconds / 60);
		const hours = Math.floor(minutes / 60);
		const days = Math.floor(hours / 24);

		if (seconds < 60)
			return { text: 'just ' + dateFormatRelative.format(0, 'seconds'), isDate: false };
		if (minutes < 60)
			return { text: dateFormatRelative.format(-minutes, 'minutes'), isDate: false };
		if (hours < 24) return { text: dateFormatRelative.format(-hours, 'hours'), isDate: false };
		if (days < 7) return { text: dateFormatRelative.format(-days, 'days'), isDate: false };

		return { text: dateFormatShort.format(postDate), isDate: true };
	}

	let res = $derived(showTimeAgo(time));
</script>

<span class={res.isDate ? 'date' : 'time'}>{res.text}</span>

<style>
	.time {
		color: var(--gray70);
	}
	.date {
		color: var(--gray60);
	}
</style>
