<script lang="ts">
	import { backIn, cubicOut, quintIn } from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';
	import { beforeNavigate } from '$app/navigation';
	import { ui, uiMenuEnum, LogoMenuItems, UserMenuItems, FilterMenuItems } from '$lib';

	let isMenuOpen = $derived(ui.menu !== uiMenuEnum.none);
	let { x, y, duration } = $derived(ui);
	let menu = {
		[uiMenuEnum.main]: LogoMenuItems,
		[uiMenuEnum.user]: UserMenuItems,
		[uiMenuEnum.filter]: FilterMenuItems,
		[uiMenuEnum.none]: null
	};

	beforeNavigate(() => (ui.menu = uiMenuEnum.none));
	$effect(() => {
		document.documentElement.style.overflow = isMenuOpen ? 'hidden' : '';
		return () => (document.documentElement.style.overflow = '');
	});
</script>

{#if isMenuOpen}
	{@const CurrentMenu = menu[ui.menu]}
	<div
		class="mainview-shade"
		in:fade={{ duration, easing: cubicOut }}
		out:fade={{ duration, easing: quintIn }}
	>
		<div class="backgroundUnderHeader"></div>
		<div
			class={`menu-back back-${ui.menu}`}
			in:fly={{ x, y, duration, easing: cubicOut }}
			out:fly={{ x, y, duration, easing: backIn }}
		>
			<CurrentMenu />
		</div>
	</div>
	<div
		class={`menu-front front-${ui.menu}`}
		in:fly={{ x, y, duration, easing: cubicOut }}
		out:fly={{ x, y, duration, easing: backIn }}
	>
		<CurrentMenu />
	</div>
{/if}
{#if isMenuOpen}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<!-- has to be a div, because otherwise ui "blinks" -->
	<div class="fullscreen-close" onclick={() => (ui.menu = uiMenuEnum.none)}></div>
{/if}

<style>
	.mainview-shade {
		z-index: 999;
		position: fixed;
		top: 0;
		bottom: 0;
		left: calc(50% - var(--width) / 2);
		width: var(--width);
		overflow: hidden;
		background: rgba(0, 0, 0, 0.8);
		.backgroundUnderHeader {
			position: relative;
			height: var(--headerHeight);
			width: var(--width);
			background: var(--black);
		}
	}
	.menu-back {
		position: absolute;
		top: 0;
		padding-top: var(--headerHeight);
		border-bottom: var(--px1) solid transparent;
		&.back-user {
			left: calc(0px - var(--headerHeight));
			border-bottom-right-radius: var(--px16);
			padding-left: var(--headerHeight);
			border-right: var(--px1) solid transparent;
			background:
				linear-gradient(var(--black), var(--black)) padding-box,
				linear-gradient(-55deg, var(--gray40) 0%, black 37%) border-box;
		}
		&.back-filter {
			left: 50%;
			transform: translateX(-50%);
			border-bottom-left-radius: var(--px16);
			border-bottom-right-radius: var(--px16);
			border-right: var(--px1) solid transparent;
			border-left: var(--px1) solid transparent;
			background:
				linear-gradient(var(--black), var(--black)) padding-box,
				linear-gradient(0deg, var(--gray40) 0%, black 80%) border-box;
		}
		&.back-main {
			right: calc(0px - var(--headerHeight));
			border-bottom-left-radius: var(--px16);
			padding-right: var(--headerHeight);
			border-left: var(--px1) solid transparent;
			background:
				linear-gradient(var(--black), var(--black)) padding-box,
				linear-gradient(65deg, var(--gray40) 0%, black 35%) border-box;
		}
	}
	.fullscreen-close {
		z-index: 1001;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		cursor: pointer;
	}
	.menu-front {
		z-index: 1002;
		opacity: 0;
		position: fixed;
		top: var(--px64);
		&.front-user {
			left: 0px;
			left: calc(50% - var(--width) / 2);
		}
		&.front-filter {
			left: 50%;
			transform: translateX(-50%);
		}
		&.front-main {
			right: calc(50% - var(--width) / 2);
		}
	}
</style>
