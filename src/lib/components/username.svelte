<script>
	import { StatusIcon } from '$lib';
	let { name, icon } = $props();
</script>

<a href="/">
	<div class="username">
		<span class="text">{name}</span>
		<StatusIcon {icon} />
	</div>
</a>

<style>
	.username {
		height: var(--px24);
		gap: var(--px5);
		font-size: var(--px20);
		line-height: var(--px20);
		display: flex;
		flex-wrap: nowrap;
		align-items: baseline;
		font-weight: 500;
		.text {
			transform: translateY(var(---px5));
		}
	}
</style>
