<script lang="ts">
	let { data } = $props();
	const items = $derived(data.items ?? []);
</script>

<div class="header-background"></div>
<main>
	{#each items as item}
		<a href="/lithuania/top/{item.id}" aria-label="View details for {item.id}">
			<div
				id={String(item.id)}
				class="square"
				style="background-image: url({'https://thumb.pr0gramm.com/' +
					item.thumb}); background-size: cover; background-position: center;"
			></div>
		</a>
	{/each}
</main>

<style>
	.header-background {
		position: fixed;
		top: 0;
		left: 0;
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
		z-index: 10;
	}
	main {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
		gap: 1px;
		background-color: transparent;
		width: 100%;
	}
	@media (max-width: 376px) {
		main {
			grid-template-columns: repeat(3, 1fr);
		}
	}
	.square {
		aspect-ratio: 1;
		scroll-margin-top: var(--px64);
		background-color: var(--gray40);
	}
</style>
