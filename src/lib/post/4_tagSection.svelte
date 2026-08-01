<script>
	import { Tag } from '$lib';
	let { tags } = $props();
</script>

<div class="tags container">
	{#each tags as tag}
		<Tag {tag} />
	{/each}
</div>

<style>
	.tags {
		position: relative;
		width: 100%;
		height: max-content;
		overflow-x: scroll;
		scrollbar-width: none;
		-ms-overflow-style: none;
		-webkit-overflow-scrolling: touch;
		display: flex;
		align-items: center;
		gap: var(--px8);
		padding-top: var(--px16);
		&::-webkit-scrollbar {
			display: none;
		}
	}
</style>
