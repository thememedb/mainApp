<script>
	import { Icon } from '$lib';
</script>

<div class="reactions container">
	<div class="icons">
		<Icon name="plus" class="icon" />
		<Icon name="minus" class="icon" />
		<Icon name="heart" class="icon" />
		<Icon name="smiley" class="icon" />
	</div>
	<div class="emojis">
		<img src="/emojis/face-with-tears-of-joy_1f602.png" alt="emoji1" style="--i: 1;" />
		<img src="/emojis/grinning-face-with-smiling-eyes_1f601.png" alt="emoji2" style="--i: 0.9;" />
		<img src="/emojis/pile-of-poo_1f4a9.png" alt="emoji3" style="--i: {0.9 ** 2};" />
		<img src="/emojis/grinning-face_1f600.png" alt="emoji3" style="--i: {0.9 ** 3};" />
		<img src="/emojis/see-no-evil-monkey_1f648.png" alt="emoji3" style="--i: {0.9 ** 4};" />
		<img
			src="/emojis/smiling-face-with-open-mouth-and-cold-sweat_1f605.png"
			alt="emoji3"
			style="--i: {0.9 ** 5};"
		/>
		<img
			src="/emojis/smiling-face-with-open-mouth-and-smiling-eyes_1f604.png"
			alt="emoji3"
			style="--i: {0.9 ** 6};"
		/>
		<img
			src="/emojis/smiling-face-with-open-mouth-and-tightly-closed-eyes_1f606.png"
			alt="emoji3"
			style="--i: {0.9 ** 7};"
		/>
		<img
			src="/emojis/smiling-face-with-open-mouth-and-tightly-closed-eyes_1f606.png"
			alt="emoji3"
			style="--i: {0.9 ** 8};"
		/>
		<img
			src="/emojis/smiling-face-with-open-mouth-and-tightly-closed-eyes_1f606.png"
			alt="emoji3"
			style="--i: {0.9 ** 9};"
		/>
		<img
			src="/emojis/smiling-face-with-open-mouth-and-tightly-closed-eyes_1f606.png"
			alt="emoji3"
			style="--i: {0.9 ** 10};"
		/>
		<img
			src="/emojis/smiling-face-with-open-mouth-and-tightly-closed-eyes_1f606.png"
			alt="emoji3"
			style="--i: {0.9 ** 11};"
		/>
		<img
			src="/emojis/smiling-face-with-open-mouth-and-tightly-closed-eyes_1f606.png"
			alt="emoji3"
			style="--i: {0.9 ** 12};"
		/>
		<img
			src="/emojis/smiling-face-with-open-mouth-and-tightly-closed-eyes_1f606.png"
			alt="emoji3"
			style="--i: {0.9 ** 13};"
		/>
		<img
			src="/emojis/smiling-face-with-open-mouth-and-tightly-closed-eyes_1f606.png"
			alt="emoji3"
			style="--i: {0.9 ** 14};"
		/>
		<img
			src="/emojis/smiling-face-with-open-mouth-and-tightly-closed-eyes_1f606.png"
			alt="emoji3"
			style="--i: {0.9 ** 15};"
		/>
		<img
			src="/emojis/smiling-face-with-open-mouth-and-tightly-closed-eyes_1f606.png"
			alt="emoji3"
			style="--i: {0.9 ** 16};"
		/>
		<img
			src="/emojis/smiling-face-with-open-mouth-and-tightly-closed-eyes_1f606.png"
			alt="emoji3"
			style="--i: {0.9 ** 17};"
		/>
		<img
			src="/emojis/smiling-face-with-open-mouth-and-tightly-closed-eyes_1f606.png"
			alt="emoji3"
			style="--i: {0.9 ** 18};"
		/>
		<img
			src="/emojis/smiling-face-with-open-mouth-and-tightly-closed-eyes_1f606.png"
			alt="emoji3"
			style="--i: {0.9 ** 19};"
		/>
		<img
			src="/emojis/smiling-face-with-open-mouth-and-tightly-closed-eyes_1f606.png"
			alt="emoji3"
			style="--i: {0.9 ** 20};"
		/>
		<img
			src="/emojis/smiling-face-with-open-mouth-and-tightly-closed-eyes_1f606.png"
			alt="emoji3"
			style="--i: {0.9 ** 21};"
		/>
	</div>
</div>

<style>
	.reactions {
		padding-top: var(--px16);
		display: flex;
		align-items: center;
		justify-content: flex-start;
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
			padding-left: var(--px24);
			flex: 1 1 auto;
			display: flex;
			align-items: center;
			justify-content: flex-start;
			gap: var(--px8);
			overflow-x: scroll;
			scrollbar-width: none;
			-ms-overflow-style: none;
			-webkit-overflow-scrolling: touch;
			mask-image: linear-gradient(
				to right,
				transparent,
				rgba(0, 0, 0, 0.05) var(--px4),
				rgba(0, 0, 0, 0.13) var(--px8),
				rgba(0, 0, 0, 0.22) var(--px12),
				rgba(0, 0, 0, 0.35) var(--px16),
				rgba(0, 0, 0, 0.4) var(--px18),
				rgba(0, 0, 0, 0.45) var(--px20),
				rgba(0, 0, 0, 0.55) var(--px24),
				rgba(0, 0, 0, 1) var(--px32),
				rgba(0, 0, 0, 1) calc(100% - var(--px64)),
				transparent
			);
			&::-webkit-scrollbar {
				display: none;
			}
			img {
				width: calc(var(--px28) * var(--i));
				height: calc(var(--px28) * var(--i));
			}
		}
	}
</style>
