<script lang="ts">
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
<div class="tags container">tags</div>
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
			padding: calc(var(--px16) * 100cqw) calc(var(--px8) * 100cqw) calc(var(--px16) * 100cqw) 0;
			.user {
				display: flex;
				align-items: center;
				justify-content: flex-start;
				gap: calc(var(--px8) * 100cqw);
				font-size: calc(var(--px20) * 100cqw);
				img {
					width: calc(var(--px48) * 100cqw);
					height: calc(var(--px48) * 100cqw);
					border-radius: 100%;
				}
				.user-info {
					display: flex;
					flex-direction: column;
					gap: calc(var(--px8) * 100cqw);
					.username {
						display: flex;
						align-items: center;
						justify-content: flex-start;
						gap: calc(var(--px4) * 100cqw);
						font-size: calc(var(--px20) * 100cqw);
						font-weight: 500;
						img {
							width: calc(var(--px20) * 100cqw);
							height: calc(var(--px20) * 100cqw);
						}
					}
					.score-time {
						color: var(--gray80);
						font-weight: 400;
						.score {
							font-size: calc(var(--px20) * 100cqw);
						}
						.time {
							font-size: calc(var(--px18) * 100cqw);
						}
					}
				}
			}
			.reply {
				padding: calc(var(--px8) * 100cqw);
				img {
					width: calc(var(--px32) * 100cqw);
					height: calc(var(--px32) * 100cqw);
				}
			}
		}
		&.reactions {
			display: flex;
			align-items: center;
			justify-content: flex-start;
			/* gap: calc(var(--px24) * 100cqw); */
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
				gap: calc(var(--px8) * 100cqw);
				img {
					width: calc(var(--px32) * 100cqw);
					height: calc(var(--px32) * 100cqw);
				}
			}
			.emojis {
				padding-left: calc(var(--px24) * 100cqw);
				mask-image: linear-gradient(
					to right,
					transparent,
					rgba(0, 0, 0, 0.05) calc(var(--px4) * 100cqw),
					rgba(0, 0, 0, 0.2)calc(var(--px8) * 100cqw),
					rgba(0, 0, 0, 0.5) calc(var(--px12) * 100cqw),
					rgba(0, 0, 0, 0.6) calc(var(--px16) * 100cqw),
					rgba(0, 0, 0, 1) calc(var(--px24) * 100cqw),
					rgba(0, 0, 0, 1) calc(100% - 100px),
					transparent
				);
				flex: 1 1 auto;
				display: flex;
				align-items: center;
				justify-content: flex-start;
				gap: calc(var(--px8) * 100cqw);
				overflow-x: scroll;
				overflow-clip-margin: 24px;
				scrollbar-width: none;
				-ms-overflow-style: none;
				-webkit-overflow-scrolling: touch;
				&::-webkit-scrollbar {
					display: none;
				}
				img {
					width: calc(var(--px28) * 100cqw * var(--i));
					height: calc(var(--px28) * 100cqw * var(--i));
				}
			}
		}
		&.tags {
			padding: calc(var(--px16) * 100cqw) 0;
		}
	}

	img {
		width: 100%;
		height: auto;
	}
</style>
