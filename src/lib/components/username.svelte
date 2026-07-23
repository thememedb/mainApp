<script>
	import { StatusIcon } from '$lib';
	let { name, icon } = $props();
</script>

<a href="/">
	<div class="username">
		<span class="text">{name}</span>
		<StatusIcon name={icon} />
	</div>
</a>

<style>
	.username {
		height: var(--px20);
		display: flex;
		flex-wrap: nowrap;
		align-items: baseline;
		gap: calc(var(--px1) * 5);
		font-size: var(--px20);
		font-weight: 500;
		.text{
			display: inline-block;
		}
		:global(&:has(> .statusIcon.big)) {
			align-items: center;
		}
	}
</style>
