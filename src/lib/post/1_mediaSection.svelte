<script>
	let { media } = $props();
</script>

<div class="media container">
	<img class="image" src={'https://img.pr0gramm.com/' + media.thumb} alt="full meme" />
</div>

<style>
	.media {
		padding-left: 0;
	}
	img {
		width: 100%;
		height: auto;
	}
</style>
