<script lang="ts">
	let { data } = $props();
	let status = false;
</script>

<div class="media container">
	<img
		class="full"
		src={'https://img.pr0gramm.com/' + data.thumb}
		alt="full meme"
	/>
	<!-- svelte-ignore a11y_media_has_caption -->
	<video
		id="video"
		class="full"
		// src={'https://vid.pr0gramm.com/' + data.video}
		src={'https://vid-warm.pr0gramm.com/2025/10/03/438d4bc4728c65bc.mp4'}
		autoplay
		muted
		loop
		controls
	></video>
</div>
<div class="stats container">
	<div class="user">user</div>
	<div class="reactions">reactions</div>
	<div class="tags">tags</div>
</div>
<div class="comments container">comments</div>

<style>
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
