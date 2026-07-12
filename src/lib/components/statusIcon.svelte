<script lang="ts">
	import Bot from '$lib/assets/icons/statusIcons/bot.svelte';
	import Bot20 from '$lib/assets/icons/statusIcons/bot20.svelte';
	import Bot22 from '$lib/assets/icons/statusIcons/bot22.svelte';
	import Bot23 from '$lib/assets/icons/statusIcons/bot23.svelte';
	import Bot3 from '$lib/assets/icons/statusIcons/bot3.svelte';
	import Bot4 from '$lib/assets/icons/statusIcons/bot4.svelte';
	import Coins from '$lib/assets/icons/statusIcons/coins.svelte';
	import Dollar from '$lib/assets/icons/statusIcons/dollar.svelte';
	import Donator from '$lib/assets/icons/statusIcons/donator.svelte';
	import Euro from '$lib/assets/icons/statusIcons/euro.svelte';
	import Rich from '$lib/assets/icons/statusIcons/rich.svelte';
	import StarBig from '$lib/assets/icons/statusIcons/starBig.svelte';
	import StarSmall from '$lib/assets/icons/statusIcons/starSmall.svelte';
	import Verified from '$lib/assets/icons/statusIcons/verified.svelte';
	import Android from '$lib/assets/icons/statusIcons/android.svelte';
	import Square from '$lib/assets/icons/statusIcons/square.svelte';

	const icons = {
		android: Android,
		bot: Bot,
		bot20: Bot20,
		bot22: Bot22,
		bot23: Bot23,
		bot3: Bot3,
		bot4: Bot4,
		coins: Coins,
		dollar: Dollar,
		donator: Donator,
		euro: Euro,
		rich: Rich,
		starBig: StarBig,
		starSmall: StarSmall,
		verified: Verified,
		square: Square
	} as const;
	const bigIcons = ['euro', 'dollar', 'square'];
	let { name, ...props } = $props();
	const Icon = $derived(icons[name as keyof typeof icons] ?? Error);
	const isBig = $derived(bigIcons.includes(name));
	// const big = false;
</script>

<Icon class={isBig ? 'icon big' : 'icon'} {...props} />

<style>
	/* .icon {
		display: inline-block;
		width: var(--px16);
		height: var(--px16);
	} */
</style>
