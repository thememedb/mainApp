<script>
	let { emojis } = $props();
</script>

<div class="emojis container">
	{#each emojis as emoji, i (emoji.id)}
		<div class="emoji" style="--i: {0.97 ** i}; flex-shrink: {i > 6 ? 1 : 0};">{emoji.emoji}</div>
	{/each}
</div>

<style>
	.emojis {
		padding-left: 0;
		height: var(--px48);
		display: flex;
		align-items: center;
		justify-content: flex-start;
		overflow-x: scroll;
		scrollbar-width: none;
		-ms-overflow-style: none;
		-webkit-overflow-scrolling: touch;
		mask-image: var(--lineMask);
		&::-webkit-scrollbar {
			display: none;
		}
		.emoji {
			height: var(--px48);
			width: calc(var(--px1) * 42);
			padding: var(--px8) var(--px5);
			font-size: calc(var(--px1) * 26 * var(--i));
			display: flex;
			flex-shrink: 0;
			align-items: center;
			justify-content: center;
			&:first-child {
				padding-left: var(--px8);
				width: calc(var(--px1) * 46);
			}
			&:last-child {
				padding-right: var(--px8);
			}
		}
	}
</style>
