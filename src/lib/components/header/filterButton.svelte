<script lang="ts">
	import { Icon, ui, uiMenuEnum } from '$lib';
	const onclick = () => {
		ui.x = 0;
		ui.y = -ui.spring;
		ui.menu = uiMenuEnum.filter;
	};
</script>

<button {onclick} class="menu-logo">
	<Icon
		name="funnel"
		class={ui.menu === uiMenuEnum.filter ? 'funnel-icon active' : 'funnel-icon'}
		style={`transition: all ${ui.duration}ms ease-out`}
	/>
</button>

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
			&.active {
				color: var(--yellow);
			}
		}
	}
</style>
