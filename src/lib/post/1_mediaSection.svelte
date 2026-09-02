<script>
	let { media } = $props();
</script>

<div class="media container">
	<a href={`/lithuania/top#${media.id}`} aria-label="View details for {media.id}">

		<img class="image" src={`https://img.pr0gramm.com/${media.thumb}`} alt="full meme" />
	</a>
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
