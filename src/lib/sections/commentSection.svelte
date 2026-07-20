<script>
	import { Comment } from '$lib';
	let { comments } = $props();
</script>

<div class="comments container">
	{#each comments as thread}
		<div class="threadContainer">
			{#each thread as comment}
				<Comment {comment} />
			{/each}
		</div>
	{/each}
</div>

<style>
	.comments {
		display: flex;
		flex-direction: column;
		gap: var(--px24);
		padding-top: var(--px24);
	}
	.threadContainer {
		display: flex;
		flex-direction: column;
		gap: var(--px16);
		padding: var(--px12) 0 var(--px8) var(--px12);
		border-top-left-radius: calc(var(--px1) * 36);
		border-bottom-left-radius: var(--px16);
		border-left: calc(var(--px1) * 2) solid transparent;
		border-bottom: calc(var(--px1) * 1.5) solid transparent;
		background:
			linear-gradient(var(--black), var(--black)) padding-box,
			linear-gradient(90deg, var(--gray60) 0%, var(--gray15) 35%, black 70%) border-box;
	}
</style>
