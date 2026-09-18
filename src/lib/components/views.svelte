<script>
	import { Icon } from '$lib';
	let { views } = $props();
</script>

<span class="views">
	{views}
	<div class="icon">
		<Icon name="eye" />
	</div>
</span>

<style>
	.views {
		color: var(--gray60);
		font-weight: 400;
		font-size: var(--px16);
		:global(.icon) {
			display: inline;
			width: var(--px12);
			height: var(--px12);
		}
	}
</style>
