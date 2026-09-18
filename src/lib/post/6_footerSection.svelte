<script>
	import { Icon } from '$lib';
</script>

<div class="end">
	<Icon name="arrowLeftFat" />
	<Icon name="top" />
	<Icon name="reply" />
	<Icon name="share" />
</div>

<style>
	.end {
		padding-top: var(--px8);
		padding-bottom: var(--px4);
		display: flex;
		align-items: center;
		justify-content: center;
		:global(.icon) {
			padding: var(--px16);
			color: var(--gray80);
			width: var(--px64);
			height: var(--px64);
		}
	}
</style>
