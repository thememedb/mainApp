<script lang="ts">
	import { page } from '$app/state';
	import { fade } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import { ui, uiMenuEnum } from '$lib';
	let isHome = $derived(page.route.id === '/[country]/[category]');

	const onclick = () => {
		if (isHome && ui.menu !== uiMenuEnum.main) return ui.menu = uiMenuEnum.main;
		if (isHome && ui.menu === uiMenuEnum.main) return ui.menu = uiMenuEnum.closed;
		if (!isHome) goto('/lithuania/top');
	};
</script>

<button {onclick} class="menu-logo">
	<div class="logoNmark">
		<img class="logo-image" src="/favicon.png" alt="Logo" />
		{#if isHome && ui.menu !== uiMenuEnum.main}
			<div class="indicator" transition:fade={{ duration: 250 }}></div>
		{/if}
	</div>
</button>

<style>
	.menu-logo {
		width: var(--px64);
		height: var(--px64);
		padding: var(--px9) var(--mobilePadding) var(--px9) var(--px2);
		@media (pointer: coarse) {
			padding-left: var(--px5);
			padding-right: var(--px5);
		}
		.logoNmark {
			position: relative;
			width: calc(var(--px1) * 54);
			height: calc(var(--px1) * 46);
			overflow: hidden;
			display: flex;
			justify-content: center;
			align-items: center;
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
			.logo-image {
				--size: calc(var(--px1) * 54);
				object-fit: cover;
				width: var(--size);
				height: var(--size);
			}
		}
	}
</style>
