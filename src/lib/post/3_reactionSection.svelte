<script>
	import { Icon } from '$lib';
	let { reactions } = $props();
</script>

<div class="reactions container">
	<div class="icons">
		<Icon name="plus" />
		<Icon name="minus" />
		<Icon name="heart" />
		<Icon name="tag" />
		<Icon name="smiley" />
	</div>
	<div class="emojis">
		{#each reactions as reaction, i (reaction.id)}
			<div class="emoji" style="--i: {0.925 ** i}">{reaction.emoji}</div>
		{/each}
	</div>
</div>

<style>
	.reactions {
		padding-top: var(--px16);
		display: flex;
		align-items: center;
		justify-content: flex-start;
		height: var(--px48);
		.icons {
			flex: 0 0 auto;
			display: flex;
			align-items: center;
			justify-content: flex-start;
			gap: var(--px8);
			:global(.icon) {
				color: var(--gray80);
				width: var(--px32);
				height: var(--px32);
			}
		}
		.emojis {
			height: var(--px32);
			padding-top: var(--px2);
			padding-left: var(--px16);
			flex: 1 1 auto;
			display: flex;
			align-items: center;
			justify-content: flex-start;
			gap: var(--px6);
			overflow-x: scroll;
			overflow-y: hidden;
			scrollbar-width: none;
			-ms-overflow-style: none;
			-webkit-overflow-scrolling: touch;
			mask-image: linear-gradient(
				to right,
				transparent,
				rgba(0, 0, 0, 0.04) var(--px4),
				rgba(0, 0, 0, 0.16) var(--px8),
				rgba(0, 0, 0, 0.25) var(--px10),
				rgba(0, 0, 0, 0.36) var(--px12),
				rgba(0, 0, 0, 0.49) var(--px14),
				rgba(0, 0, 0, 0.64) var(--px16),
				rgba(0, 0, 0, 0.81) var(--px18),
				rgba(0, 0, 0, 1) var(--px22),
				rgba(0, 0, 0, 1) 90%,
				rgba(0, 0, 0, 0) 100%,
				transparent
			);
			&::-webkit-scrollbar {
				display: none;
			}
			.emoji {
				height: 100%;
				display: flex;
				align-items: center;
				font-size: calc(var(--px28) * var(--i));
			}
		}
	}
</style>
