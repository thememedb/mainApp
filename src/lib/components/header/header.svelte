<script lang="ts">
	import UserButton from './userButton.svelte';
	import LogoButton from './logoButton.svelte';
	import { Icon, FilterButton } from '$lib';
	import { page } from '$app/state';
	let isDetails = $derived(page.route.id === '/[country]/[category]/[item]');
</script>

<div class="header-spacer-for-layout"></div>
<header>
	{#if isDetails}
		<a href={`/lithuania/top#${page.data.media.id}`}>
			<Icon name="arrowLeftFat" class="icon back" />
		</a>
	{:else}<UserButton />{/if}

	<div class="nav">
		<a href="/donate">
			<Icon name="donate" class="icon" />
		</a>
		<a href="/uppload">
			<Icon name="cloudArrowUp" class="icon" />
		</a>
		<FilterButton />
	</div>

	{#if isDetails}
		<a href="/share">
			<Icon name="share" class="icon share" />
		</a>
	{:else}<LogoButton />{/if}
</header>

<style>
	.header-spacer-for-layout {
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
		/* background: rgba(50, 0, 0, 0.8); */
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
		--iconSize: var(--px36);
		--areaSize: var(--px64);
		--padding: calc((var(--areaSize) - var(--iconSize)) / 2);
		:global(.icon.back) {
			color: var(--gray80);
			--shift: var(---px8);
			width: var(--areaSize);
			height: var(--areaSize);
			padding-left: calc(var(--padding) + var(--shift));
			padding-right: calc(var(--padding) - var(--shift));
			padding-top: var(--padding);
			padding-bottom: var(--padding);
		}
		.nav {
			display: flex;
			align-items: center;
			:global(.icon) {
				/* position: relative; */
				padding: var(--px16) var(--px8);
				color: var(--gray80);
				width: var(--px48);
				height: var(--areaSize);
			}
		}
		:global(.icon.share) {
			color: var(--gray80);
			--shift: var(--px8);
			width: var(--areaSize);
			height: var(--areaSize);
			padding-left: calc(var(--padding) + var(--shift));
			padding-right: calc(var(--padding) - var(--shift));
			padding-top: var(--padding);
			padding-bottom: var(--padding);
		}
	}
</style>
