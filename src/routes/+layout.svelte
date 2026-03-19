<script lang="ts">
	import favicon from '$lib/assets/Favicon v8.png';
	let { children } = $props();
</script>

<svelte:head>
	<title>Memedb</title>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
