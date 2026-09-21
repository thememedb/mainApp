<script lang="ts">
	import { Icon, FilterMenuItems, Menu } from '$lib';
	let isMenuOpen = $state(false);
</script>

<button onclick={() => (isMenuOpen = !isMenuOpen)} class="menu-logo">
	<Icon name="funnel" class={isMenuOpen ? 'funnel-icon active' : 'funnel-icon'} />
</button>
<Menu y={-50} bind:isMenuOpen>
	<FilterMenuItems />
</Menu>

<style>
	button {
		width: var(--px48);
		height: var(--px64);
		padding: var(--px20) var(--px12);
		:global(.funnel-icon) {
			padding: 0;
			color: var(--gray80);
			width: var(--px24);
			height: var(--px24);
			transition: all 300ms ease-out;
			&.active {
				color: var(--yellow);
			}
		}
	}
</style>
