<script lang="ts">
	import Icon from '$lib/components/icon.svelte';
	import { page } from '$app/state';
	import { Score, Time, Username } from '$lib';
	let { name, avatar, score, time } = page.data.user;
</script>

<header>
	<a href={`/lithuania/top#${page.data.media.id}`} data-sveltekit-reload>
		<Icon name="arrowLeftFat" class="icon" />
	</a>
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
	<a href="/share">
		<Icon name="share" class="icon" style="color: var(--gray90)" />
	</a>
</header>

<style>
	header {
		position: sticky;
		top: 0;
		width: 100%;
		height: var(--px64);
		background: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 1) 0%,
			rgba(0, 0, 0, 0.98) 50%,
			rgba(0, 0, 0, 0.9) 80%,
			rgba(0, 0, 0, 0.85) 90%,
			rgba(0, 0, 0, 0.8) 100%
		);
		/* background-color: var(--black); */
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: var(--px16);
		padding: var(--px16);
		z-index: 1000;
		:global(.icon) {
			color: var(--gray80);
			width: var(--px32);
			height: var(--px32);
		}
		.nav {
			display: flex;
			align-items: center;
			gap: var(--px16);
			:global(.icon) {
				color: var(--gray80);
				width: var(--px24);
				height: var(--px24);
			}
		}
	}
</style>
