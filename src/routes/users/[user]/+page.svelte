<script>
	import { page } from '$app/stores';
	let { data } = $props();
    let { user } = $derived(data);
</script>

<svelte:head>
	<title>User {user}</title>
</svelte:head>

<section>
	<h1>User: {user}</h1>
	<p>Welcome to the profile page for <strong>{user}</strong>.</p>
</section>
