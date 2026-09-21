<script lang="ts">
	import { LogoMenuItems } from '$lib';
	import { backIn, cubicOut, quintIn } from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';
	import { beforeNavigate } from '$app/navigation';

	let { x = 0, y = 0, children, isMenuOpen = $bindable(false) } = $props();
	const duration = 300;
	let styleFront = $state('');
	let styleBack = $state('');

	beforeNavigate(() => {
		isMenuOpen = false;
	});
	$effect(() => {
		document.documentElement.style.overflow = isMenuOpen ? 'hidden' : '';
		return () => {
			document.documentElement.style.overflow = '';
		};
	});

	$effect(() => {
		if (y !== 0 && x === 0) {
			styleFront = 'top: var(--px64);' + 'left: 50%;' + 'transform: translateX(-50%);';
			styleBack =
				'padding-top: var(--headerHeight);' +
				'top: 0px;' +
				'left: 50%;' +
				'transform: translateX(-50%);' +
				'border-bottom-left-radius: var(--px16);' +
				'border-bottom-right-radius: var(--px16);';
		}
		if (y === 0 && x > 0) {
			styleFront = 'top: var(--px64);' + 'right: 0px;';
			styleBack =
				'top: var(--px64);' +
				'right: calc(0px - var(--headerHeight));' +
				'border-bottom-left-radius: var(--px16);' +
				'padding-right: var(--headerHeight);';
		}
		if (y === 0 && x < 0) {
			styleFront = 'top: var(--px64);' + 'left: 0px;';
			styleBack =
				'top: var(--px64);' +
				'left: calc(0px - var(--headerHeight));' +
				'border-bottom-right-radius: var(--px16);' +
				'padding-left: var(--headerHeight);' +
				'border-right: var(--px2) solid transparent;' +
				'border-bottom: var(--px2) solid transparent;' +
				'background: linear-gradient(var(--black), var(--black)) padding-box,' +
				' linear-gradient(-55deg, var(--gray10) 0%, black 40%) border-box;';
		}
	});
</script>

{#if isMenuOpen}
	<div
		class="color-backgrounds"
		in:fade={{ duration, easing: cubicOut }}
		out:fade={{ duration, easing: quintIn }}
	>
		<div class="backgroundUnderHeader"></div>
	</div>
	<div
		class="menu-back"
		style={styleBack}
		in:fly={{ x, y, duration, easing: cubicOut }}
		out:fly={{ x, y, duration, easing: backIn }}
	>
		{@render children()}
	</div>
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div class="click-away-bg" onclick={() => (isMenuOpen = false)} aria-label="close menu"></div>
	<div
		class="menu-front"
		style={styleFront}
		in:fly={{ x, y, duration, easing: cubicOut }}
		out:fly={{ x, y, duration, easing: backIn }}
	>
		{@render children()}
	</div>
{/if}

<style>
	.color-backgrounds {
		z-index: -1;
		display: flex;
		position: fixed;
		top: var(--px0);
		left: calc(50% - var(--width) / 2);
		width: var(--width);
		height: 100vh;
		background: rgba(0, 0, 0, 0.8);
		.backgroundUnderHeader {
			height: var(--headerHeight);
			width: var(--width);
			background: var(--black);
		}
	}
	.click-away-bg {
		position: fixed;
		top: 0;
		right: 0;
		z-index: 1000;
		width: var(--width);
		height: 100vh;
		cursor: pointer;
	}
	.menu-front {
		z-index: 2000;
		position: fixed;
	}
	.menu-back {
		position: absolute;
		z-index: -1;
		background-color: black;
		:global(.item) {
			/* is it possible to do it without !important? */
			color: transparent !important;
		}
	}
</style>
