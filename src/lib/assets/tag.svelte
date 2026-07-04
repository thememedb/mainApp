<script lang="ts">
	import Icon from '$lib/assets/icons/icon.svelte';
	let { text } = $props();
</script>

<div class="tag">
	<Icon name="plus" class="icon" />
	<span>{text}</span>
	<Icon name="minus" class="icon" />
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
