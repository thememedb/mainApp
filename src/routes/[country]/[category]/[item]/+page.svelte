<script lang="ts">
	import {
		ActionSection,
		CommentSection,
		EmojiSection,
		FooterSection,
		MediaSection,
		TagSection,
		UserSection
	} from '$lib';
	let { data } = $props();

	let { media, user, emojis, tags, comments } = $derived(data);
</script>

<MediaSection {media} />
<UserSection {user} />
<ActionSection />
<EmojiSection {emojis} />
<TagSection {tags} />
<CommentSection {comments} />
<FooterSection />
