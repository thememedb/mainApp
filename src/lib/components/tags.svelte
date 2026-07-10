<script>
	import { Tag } from '$lib';
</script>

<div class="tags container">
	<Tag text="funny" />
	<Tag text="kvykt" />
	<Tag text="smiling" />
	<Tag text="happy" />
	<Tag text="lol" />
	<Tag text="katukas" />
	<Tag text="precious" />
</div>

<style>
	.tags {
		position: relative;
		width: 100%;
		height: max-content;
		overflow-x: scroll;
		scrollbar-width: none;
		-ms-overflow-style: none;
		-webkit-overflow-scrolling: touch;
		display: flex;
		align-items: center;
		gap: var(--px8);
		padding-top: var(--px16);
		&::-webkit-scrollbar {
			display: none;
		}
	}
</style>
