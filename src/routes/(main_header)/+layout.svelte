<script lang="ts">
	import Header from '$lib/components/headerDefault.svelte';
	let { children } = $props();
</script>

<main>
	<Header />
	<div class="children">
		{@render children()}
	</div>
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
		.children {
			z-index: 0;
		}
	}
</style>
