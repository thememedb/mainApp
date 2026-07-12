<script lang="ts">
	import { TagSection, ReactionSection, UserSection, MediaSection, CommentSection, FooterSection } from '$lib';
	let { data } = $props();
</script>

<MediaSection {data} />
<UserSection />
<ReactionSection />
<TagSection />
<CommentSection />
<FooterSection />
