<script lang="ts">
	import Icon from '$lib/components/icon.svelte';
	let { tag } = $props();
	let { id, score, text } = $derived(tag);
</script>

<div class="tag">
	<Icon name="plus" />
	<span>{text}</span>
	<Icon name="minus" />
</div>

<style>
	.tag {
		padding: var(--px4);
		border-radius: 9999px;
		display: flex;
		flex-shrink: 0;
		align-items: center;
		justify-content: flex-start;
		gap: var(--px4);
		background-color: var(--gray15);
		font-size: var(--px18);
		font-weight: 450;
		color: var(--gray60);
		:global(.icon) {
			width: var(--px24);
			height: var(--px24);
		}
	}
</style>
