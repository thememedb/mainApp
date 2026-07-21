<script lang="ts">
	import Bot from '$lib/assets/icons/statusIcons/small/bot.svelte';
	import Coins from '$lib/assets/icons/statusIcons/big/coins.svelte';
	import Donator from '$lib/assets/icons/statusIcons/big/donator.svelte';
	import Rich from '$lib/assets/icons/statusIcons/big/rich.svelte';
	import StarSolid from '$lib/assets/icons/statusIcons/small/starSolid.svelte';
	import StarLine from '$lib/assets/icons/statusIcons/small/starLine.svelte';
	import Square from '$lib/assets/icons/statusIcons/small/square.svelte';
	import SquareBig from '$lib/assets/icons/statusIcons/big/squareBig.svelte';
	import Verified from '$lib/assets/icons/statusIcons/small/verified.svelte';

	const icons = {
		bot: Bot,
		coins: Coins,
		donator: Donator,
		rich: Rich,
		starSolid: StarSolid,
		starLine: StarLine,
		verified: Verified,
		square: Square,
		squareBig: SquareBig
	};
	const bigIcons = ['coins', 'donator', 'rich', 'squareBig'];
	let { name, ...props } = $props();
	const Icon = $derived(icons[name as keyof typeof icons] ?? Error);
	const isBig = $derived(bigIcons.includes(name));
</script>

<Icon class={'statusIcon ' + (isBig ? 'big' : '')} {...props} />

<style>
	:global(.statusIcon) {
		display: inline-block;
		width: var(--px16);
		height: var(--px16);
		overflow: visible;
		&.big {
			width: var(--px20);
			height: var(--px20);
		}
	}
</style>
