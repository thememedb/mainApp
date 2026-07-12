<script>
	let { data } = $props();
</script>

<div class="media container">
	<img class="image" src={'https://img.pr0gramm.com/' + data.thumb} alt="full meme" />
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
