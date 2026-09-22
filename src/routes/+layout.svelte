<script lang="ts">
	import { Header, Menu } from '$lib';
	let { children } = $props();
</script>

<main>
	<Header />
	<div class="children">
		{@render children()}
	</div>
	<Menu />
</main>

<style>
	main {
		container-type: inline-size; /* reference for container queries */
		width: 100%;
		margin: 0 auto;
		min-width: 240px;
		max-width: 644px;
		background-color: var(--black);
		min-height: 100dvh;
	}
</style>
