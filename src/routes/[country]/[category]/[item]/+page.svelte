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
	
	let { media, user, reactions, tags, comments } = $derived(data);
</script>

<MediaSection {media} />
<UserSection {user} />
<ReactionSection {reactions} />
<TagSection {tags} />
<CommentSection {comments} />
<FooterSection />
