<script lang="ts">
	import Plus from '$lib/assets/plus.svelte';
	import Minus from '$lib/assets/icons/minus.svelte';
	let { text } = $props();
</script>

<div class="tag">
	<Plus class="icon" />
	<span>{text}</span>
	<Minus class="icon" />
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
