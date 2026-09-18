<script lang="ts">
	import {
		backIn,
		backInOut,
		backOut,
		bounceIn,
		bounceInOut,
		bounceOut,
		circIn,
		circInOut,
		circOut,
		cubicIn,
		cubicInOut,
		cubicOut,
		elasticIn,
		elasticInOut,
		elasticOut,
		expoIn,
		expoInOut,
		expoOut,
		linear,
		quadIn,
		quadInOut,
		quadOut,
		quartIn,
		quartInOut,
		quartOut,
		quintIn,
		quintInOut,
		quintOut,
		sineIn,
		sineInOut,
		sineOut
	} from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';

	let { isMenuOpen = $bindable(false), children, x = 0, y = 0 } = $props();

	let style = (() => {
		if (y !== 0) return 'align-items: center;';
		else if (x > 0) return 'align-items: flex-end;';
		else if (x < 0) return 'align-items: flex-start;';
		else return '';
	})();
</script>

{#if isMenuOpen}
	<button
		class="background"
		onclick={() => (isMenuOpen = false)}
		in:fade={{ duration: 250, easing: cubicOut }}
		out:fade={{ duration: 250, easing: linear }}
		aria-label="close menu"
	>
		<div class="backgroundUnderHeader"></div>
	</button>
	<div
		class="menu-background"
		{style}
		in:fly={{ x, y, duration: 300, easing: cubicOut }}
		out:fly={{ x, y, duration: 300, easing: backInOut }}
	>
		{@render children()}
	</div>
{/if}

<style>
	.background {
		display: flex;
		position: fixed;
		top: var(--headerHeight);
		top: var(--px0);
		left: calc(50% - var(--width) / 2);
		width: var(--width);
		height: 100vh;
		z-index: -1;
		background: rgba(0, 0, 0, 0.8);
		.backgroundUnderHeader {
			height: var(--headerHeight);
			width: var(--width);
			background: var(--black);
		}
	}
	.menu-background {
		position: fixed;
		right: 0;
		top: var(--px64);
		background: red;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
	}
</style>
