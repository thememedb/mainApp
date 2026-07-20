<script lang="ts">
	import {
		TagSection,
		ReactionSection,
		UserSection,
		MediaSection,
		CommentSection,
		FooterSection
	} from '$lib';
	let { data } = $props();
	let { item, comments } = $derived(data);
</script>

<MediaSection {item} />
<UserSection />
<ReactionSection />
<TagSection />
<CommentSection {comments} />
<FooterSection />
