<script>
	import { Icon } from '$lib';
	let { reactions } = $props();
</script>

<div class="reactions container">
	<div class="icons">
		<Icon name="plus" />
		<Icon name="minus" />
		<Icon name="heart" />
		<Icon name="threeDots" />
		<Icon name="details" />
		<Icon name="tag" />
		<Icon name="smiley" />
		<Icon name="reply" />
	</div>
	<div class="emojis">
		{#each reactions as reaction, i (reaction.id)}
			<div class="emoji" style="--i: {0.925 ** i}">{reaction.emoji}</div>
		{/each}
	</div>
</div>

<style>
	.reactions {
		padding-left: 0;
		height: var(--px96);
		.icons {
			display: flex;
			:global(.icon) {
				padding: var(--px10) var(--px5) var(--px6) var(--px5);
				color: var(--gray80);
				width: var(--px42);
				height: var(--px48);
				&:first-child {
					padding-left: var(--mobilePadding);
					width: var(--px46);
				}
				&:last-child {
					width: var(--px48);
					padding: var(--px11);
					transform: scale(1.6) translate(var(--px8), var(---px12));
				}
			}
		}
		.emojis {
			height: var(--px48);
			flex: 1 1 auto;
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
				padding: var(--px8) var(--px4);
				height: 100%;
				display: flex;
				align-items: center;
				font-size: calc(var(--px1) * 26 * var(--i));
				&:first-child {
					padding-left: var(--px8);
				}
			}
		}
	}
</style>
