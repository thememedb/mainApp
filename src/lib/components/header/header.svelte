<script lang="ts">
	import FilterButton from './filterButton.svelte';
	import UserButton from './userButton.svelte';
	import LogoButton from './logoButton.svelte';
	import Icon from '$lib/components/icon.svelte';
	import { page } from '$app/state';
	let isDetails = $derived(page.route.id === '/[country]/[category]/[item]');
	let isProfile = $derived(page.route.id === '/users/[user]');
	let isHome = $derived(page.route.id === '/[country]/[category]');
</script>

{#snippet nav()}
<div class="nav">
	<a href="/donate">
		<Icon name="handCoinsBold3" class="icon" />
	</a>
	<a href="/uppload">
		<Icon name="cloudArrowUp" class="icon" />
	</a>
	<FilterButton />
</div>
{/snippet}

<div class="header-background"></div>

{#if isDetails}
	<header>
		<a href={`/lithuania/top#${page.data.media.id}`}>
			<Icon name="arrowLeftFat" class="icon back" />
		</a>
		{@render nav()}
		<a href="/share">
			<Icon name="share" class="icon share" />
		</a>
	</header>
	{:else}
	<header>
		<UserButton />
		{@render nav()}
		<LogoButton />
	</header>
{/if}

<style>
	.header-background {
		width: 100%;
		height: var(--px64);
	}
	header {
		--gradient:
			linear-gradient(
				to bottom,
				rgba(0, 0, 0, 1) 0%,
				rgba(0, 0, 0, 0.98) 50%,
				rgba(0, 0, 0, 0.9) 80%,
				rgba(0, 0, 0, 0.85) 90%,
				rgba(0, 0, 0, 0.8) 100%
			),
			linear-gradient(to right, rgba(0, 0, 0, 1) 0px, rgba(0, 0, 0, 0) var(--px64)),
			linear-gradient(to left, rgba(0, 0, 0, 1) 0px, rgba(0, 0, 0, 0) var(--px64));
		background: var(--gradient);
		position: fixed;
		top: 0;
		width: 100%;
		min-width: var(--minWidth);
		max-width: var(--maxWidth);
		height: var(--px64);
		display: flex;
		justify-content: space-between;
		align-items: center;
		z-index: 1000;
		:global(.icon.back) {
			color: var(--gray80);
			width: var(--px64);
			height: var(--px64);
			padding: var(--px14) calc(var(--px28) - var(--mobilePadding)) var(--px14)
				calc(var(--mobilePadding));
		}
		.nav {
			display: flex;
			align-items: center;
			:global(.icon) {
				position: relative;
				padding: var(--px20) var(--px12);
				color: var(--gray80);
				width: var(--px48);
				height: var(--px64);
			}
		}
		:global(.icon.share) {
			color: var(--gray80);
			width: var(--px64);
			height: var(--px64);
			padding-top: var(--px13);
			padding-right: var(--mobilePadding);
			padding-bottom: var(--px15);
			padding-left: calc(var(--px28) - var(--mobilePadding));
		}
	}
</style>
