<script lang="ts">
	import { Tags, Reactions, PostUser, Media, Comments, Footer } from '$lib';
	let { data } = $props();
</script>

<Media {data} />
<PostUser />
<Reactions />
<Tags />
<Comments />
<Footer />
