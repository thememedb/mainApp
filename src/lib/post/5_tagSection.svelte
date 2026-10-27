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
		padding-left: 0;
		width: 100%;
		height: var(--px48);
		overflow-x: scroll;
		scrollbar-width: none;
		-ms-overflow-style: none;
		-webkit-overflow-scrolling: touch;
		display: flex;
		align-items: center;
		mask-image: var(--lineMask);
		&::-webkit-scrollbar {
			display: none;
		}
	}
</style>
