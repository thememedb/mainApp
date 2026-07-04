<script lang="ts">
	import PlusIcon from '$lib/assets/plus.svelte';
	import MinusIcon from '$lib/assets/icons/minus.svelte';
	import Tag from '$lib/assets/tag.svelte';
	let { data } = $props();
	let status = false;
</script>

<div class="media container">
	<img class="image" src={'https://img.pr0gramm.com/' + data.thumb} alt="full meme" />
	<!-- svelte-ignore a11y_media_has_caption -->
	<!-- <video
		id="video"
		class="full"
		// src={'https://vid.pr0gramm.com/' + data.video}
		src={'https://vid-warm.pr0gramm.com/2025/10/03/438d4bc4728c65bc.mp4'}
		playsinline
		preload="auto"
		autoplay
		loop
		controls
	></video> -->
</div>
<div class="user container">
	<div class="user">
		<img src="/userAvatars/5.jpg" alt="user avatar" />
		<div class="user-info">
			<div class="username">
				<span>arestedDevelopmentsu</span>
				<img src="/icons/moneyFilled.svg" alt="coins" />
			</div>
			<div class="score-time">
				<span class="score">+692</span>
				<span> • </span>
				<span class="time">12min ago</span>
			</div>
		</div>
	</div>
	<div class="reply">
		<a href="/reply">
			<img src="/icons/reply.svg" alt="reply" />
		</a>
	</div>
</div>
<div class="reactions container">
	<div class="icons">
		<img src="/icons/plusCircle.svg" alt="like" />
		<img src="/icons/minus.svg" alt="comment" />
		<img src="/icons/heart.svg" alt="share" />
		<img src="/icons/smiley.svg" alt="share" />
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
<div class="tags container">
	<Tag text="funny" />
	<Tag text="kvykt" />
	<Tag text="smiling" />
	<Tag text="happy" />
	<Tag text="lol" />
	<Tag text="katukas" />
	<Tag text="precious" />
</div>
<div class="comments container">comments</div>

<style>
	.container {
		position: relative;
		width: 100%;
		height: max-content;
		&.user {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: var(--px16) var(--px8) var(--px16) 0;
			.user {
				display: flex;
				align-items: center;
				justify-content: flex-start;
				gap: var(--px8);
				font-size: var(--px20);
				img {
					width: var(--px48);
					height: var(--px48);
					border-radius: 100%;
				}
				.user-info {
					display: flex;
					flex-direction: column;
					gap: var(--px8);
					.username {
						display: flex;
						align-items: center;
						justify-content: flex-start;
						gap: var(--px4);
						font-size: var(--px20);
						font-weight: 500;
						img {
							width: var(--px20);
							height: var(--px20);
						}
					}
					.score-time {
						color: var(--gray80);
						font-weight: 400;
						.score {
							font-size: var(--px20);
						}
						.time {
							font-size: var(--px18);
						}
					}
				}
			}
			.reply {
				padding: var(--px8);
				img {
					width: var(--px32);
					height: var(--px32);
				}
			}
		}
		&.reactions {
			display: flex;
			align-items: center;
			justify-content: flex-start;
			.icons {
				background: linear-gradient(
					to bottom,
					rgba(0, 0, 0, 0) 0%,
					rgba(0, 0, 0, 0.96) 30%,
					rgba(0, 0, 0, 0.9) 80%,
					rgba(0, 0, 0, 0.85) 90%,
					rgba(0, 0, 0, 0.8) 97%,
					rgba(0, 0, 0, 0) 100%
				);
				flex: 0 0 auto;
				display: flex;
				align-items: center;
				justify-content: flex-start;
				gap: var(--px8);
				img {
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
					rgba(0, 0, 0, 1) calc(100% - 60px),
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
		&.tags {
			overflow-x: scroll;
			scrollbar-width: none;
			-ms-overflow-style: none;
			-webkit-overflow-scrolling: touch;
			display: flex;
			align-items: center;
			gap: var(--px8);
			padding: var(--px16) 0;
			&::-webkit-scrollbar {
				display: none;
			}
		}
	}

	img {
		width: 100%;
		height: auto;
	}
</style>
