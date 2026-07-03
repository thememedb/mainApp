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
<div class="user">
	<img src="/userAvatars/5.jpg" alt="user avatar" />
	<div class="user-info">
		<span class="username">arestedDevelopmentsu</span>
		<div class="score-time">
			<span class="score">+692 • </span>
			<span class="time">12min ago</span>
		</div>
	</div>
</div>
<div class="reactions">reactions</div>
<div class="tags">tags</div>
<div class="comments container">comments</div>

<style>
	.user {
		padding: calc(var(--px16) * 100cqw) calc(var(--px8) * 100cqw) calc(var(--px16) * 100cqw) 0;
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
				font-size: calc(var(--px20) * 100cqw);
				font-weight: 500;
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
	img {
		width: 100%;
		height: auto;
	}
	.container {
		position: relative;
		color: white;
		width: 100%;
		height: max-content;
	}
</style>
