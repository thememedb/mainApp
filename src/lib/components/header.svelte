<script lang="ts">
	import Icon from '$lib/components/icon.svelte';
	import { page } from '$app/state';
	let isDetails = $derived(page.route.id === '/[country]/[category]/[item]');
	// let route = $derived(page.route.id);
	// $effect(() => {
	// 	alert(route);
	// });
</script>

<header style="background: {isDetails ? 'var(--gradient)' : 'transparent'}">
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
	derived
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
	header {
		--gradient: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 1) 0%,
			rgba(0, 0, 0, 0.98) 50%,
			rgba(0, 0, 0, 0.9) 80%,
			rgba(0, 0, 0, 0.85) 90%,
			rgba(0, 0, 0, 0.8) 100%
		);
		position: sticky;
		top: 0;
		width: 100%;
		height: var(--px64);
		display: flex;
		justify-content: space-between;
		align-items: center;
		/* gap: var(--px16); */
		/* padding: var(--px8); */
		z-index: 1000;
		.logo-image {
			padding: var(--px0) var(--px6) var(--px6) var(--px0);
			width: var(--px64);
			height: var(--px64);
		}
		.user-avatar-container {
			padding: var(--px11) var(--px11) var(--px11) var(--px11);
			width: var(--px64);
			height: var(--px64);
			overflow: hidden;
			/* border-radius: 1000px; */
		}
		.user-avatar {
			/* padding: var(--px18) var(--px18) var(--px6) var(--px6); */
			width: var(--px42);
			height: var(--px42);
			overflow: hidden;
			border-radius: 1000px;
		}
		:global(.icon.share, .icon.back) {
			padding: var(--px16);
			color: var(--gray80);
			width: var(--px64);
			height: var(--px64);
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
	}
</style>
