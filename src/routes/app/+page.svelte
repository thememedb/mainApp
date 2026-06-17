<script lang="ts">
	import thumbs from '$lib/assets/thumbs.json';
	const items = thumbs.items ?? [];
</script>

<main>
	{#each items as item}
		<div
			class="square"
			style="background-image: url({'https://thumb.pr0gramm.com/' +
				item.thumb}); background-size: cover; background-position: center;"
		>
		</div>
	{/each}
</main>

<style>
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
		background-color: var(--gray40);
		/* border-radius: 8px; */
	}
</style>
