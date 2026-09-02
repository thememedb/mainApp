<script>
	import { Icon } from '$lib';
</script>

<div class="end">
	<Icon name="arrowLeftFat" />
	<Icon name="top" />
	<Icon name="reply" />
	<Icon name="share" />
	<!-- &lt;-go back ^go to top^ <Icon name="reply" />reply -->
</div>

<style>
	.end {
		display: flex;
		gap: var(--px24);
		align-items: center;
		justify-content: center;
		height: var(--px64);
		:global(.icon) {
			color: var(--gray80);
			width: var(--px32);
			height: var(--px32);
		}
	}
</style>
