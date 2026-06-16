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
			<!-- <img src={'https://thumb.pr0gramm.com/' + item.thumb} alt={'thumb-' + item.id} loading="lazy" /> -->
		</div>
	{/each}
</main>

<style>
	h1 {
		color: white;
	}
	main {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: 4px;
		background-color: transparent;
	}
	.square {
		--size: 120px;
		width: var(--size);
		height: var(--size);
		background-color: var(--gray40);
		border-radius: 4px;
	}
	.square img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	@media (width < 376px) {
		main {
			width: 100dvw;
			/* height: 100dvh; */
		}
		.square {
			--size: calc((100dvw - 16px) / 3);
			width: var(--size);
			height: var(--size);
		}
		img {
			width: 100%;
			height: 100%;
			object-fit: scale-down;
			display: block;
		}
	}
</style>
