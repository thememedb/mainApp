<script lang="ts">
	import Icon from '$lib/components/icon.svelte';
	import { page } from '$app/state';
	import { fade } from 'svelte/transition';
	import LogoMenuItems from './menus/logoMenuItems.svelte';
	let isDetails = $derived(page.route.id === '/[country]/[category]/[item]');
	let isProfile = $derived(page.route.id === '/users/[user]');
	let isHome = $derived(page.route.id === '/[country]/[category]');
	let isMenuOpen = $state(false);
</script>

<button onclick={() => (isMenuOpen = !isMenuOpen)} class="menu-logo">
	<div class="iconWrapper">
		<Icon name="funnel" class="funnel-icon" />
		{#if !isMenuOpen}
			<div class="indicator" transition:fade={{ duration: 250 }}></div>
		{/if}
	</div>
</button>

<style>
	button {
		width: var(--px48);
		height: var(--px64);
		padding: var(--px20) var(--px12);
		.iconWrapper {
			position: relative;
			:global(.funnel-icon) {
				padding: 0;
				color: var(--gray80);
				width: var(--px24);
				height: var(--px24);
			}
			.indicator {
				--size: var(--px6);
				position: absolute;
				bottom: 0;
				left: 0;
				width: var(--size);
				height: var(--size);
				background: var(--gray80);
				clip-path: polygon(0% 100%, 0% 0%, 100% 100%);
			}
		}
	}
</style>
