<script>
	import { StatusIcon } from '$lib';
	let { name, icon } = $props();
</script>

<div class="username">
	<span>{name}</span>
	<StatusIcon name={icon} />
</div>

<style>
	.username {
		height: var(--px20);
		display: flex;
		align-items: baseline;
		gap: calc(var(--px1) * 5);
		font-size: var(--px20);
		font-weight: 500;
		:global(&:has(> .statusIcon.big)) {
			align-items: center;
		}
	}
</style>
