<script lang="ts">
	import { Menu, LogoMenuItems } from '$lib';
	let isMenuOpen = $state(false);
</script>

<button onclick={() => (isMenuOpen = !isMenuOpen)} class="logo-menu">
	<!-- delete this logoNmark left unnecessary after indicator removal -->
	<div class="logoNmark">
		<img class="logo-image" src="/favicon.png" alt="Logo" />
	</div>
</button>
<Menu x={50} bind:isMenuOpen>
	<LogoMenuItems />
</Menu>

<style>
	.logo-menu {
		width: var(--px64);
		height: var(--px64);
		padding: var(--px9) var(--mobilePadding) var(--px9) var(--px2);
		@media (pointer: coarse) {
			padding-left: var(--px5);
			padding-right: var(--px5);
		}
		.logoNmark {
			position: relative;
			width: calc(var(--px1) * 54);
			height: calc(var(--px1) * 46);
			overflow: hidden;
			display: flex;
			justify-content: center;
			align-items: center;
			.logo-image {
				--size: calc(var(--px1) * 54);
				object-fit: cover;
				width: var(--size);
				height: var(--size);
			}
		}
	}
</style>
