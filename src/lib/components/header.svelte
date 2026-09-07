<script lang="ts">
	import Icon from '$lib/components/icon.svelte';
	import { page } from '$app/state';
	let isDetails = $derived(page.route.id === '/[country]/[category]/[item]');
</script>

<div class="header-background"></div>
<header>
	{#if isDetails}
		<a href={`/lithuania/top#${page.data.media.id}`}>
			<Icon name="arrowLeftFat" class="icon back" />
		</a>
	{:else}
		<a href={`/users/1}`}>
			<div class="user-avatar-container">
				<img class="user-avatar" src="/userAvatars/2.jpg" alt="Users Avatar" />
			</div>
		</a>
	{/if}
	<div class="nav">
		<a href="/uppload">
			<Icon name="cloudArrowUp" class="icon" />
		</a>
		<a href="/donate">
			<Icon name="handCoinsRegular" class="icon" />
		</a>
		<a href="/filter">
			<Icon name="funnel" class="icon" />
		</a>
		<a href="/menu">
			<Icon name="menuBurger" class="icon" />
		</a>
	</div>
	{#if isDetails}
		<a href="/share">
			<Icon name="share" class="icon share" />
		</a>
	{:else}
		<a href="/lithuania/top" data-sveltekit-reload>
			<img class="logo-image" src="/favicon.png" alt="Logo" />
		</a>
	{/if}
</header>

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
		.user-avatar-container {
			width: var(--px64);
			height: var(--px64);
			padding: var(--px12) var(--px18) var(--px12) var(--px6);
			@media (pointer: fine) {
				padding: var(--px12) var(--px16) var(--px12) var(--mobilePadding);
			}
		}
		.user-avatar {
			width: var(--px40);
			height: var(--px40);
			border-radius: 100%;
		}
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
			width: calc(var(--px1) * 176);
			:global(.icon) {
				padding: var(--px20) var(--px10);
				color: var(--gray80);
				width: var(--px64);
				height: var(--px64);
			}
		}
		.logo-image {
			object-fit: cover;
			width: var(--px64);
			height: var(--px64);
			padding: var(--px6) var(--mobilePadding) var(--px8) var(--px2);
			@media (pointer: coarse) {
				padding-left: var(--px5);
				padding-right: var(--px5);
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
