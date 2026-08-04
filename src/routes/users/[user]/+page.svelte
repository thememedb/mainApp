<script>
	import { page } from '$app/stores';
	import Username from '$lib/components/username.svelte';
	let { data } = $props();
	let { name, avatar, icon, aura, credits } = $derived(data);
</script>

<svelte:head>
	<title>User {name}</title>
</svelte:head>

<section>
	<div class="user">
		<img class="avatar" src={avatar} alt="user avatar" />
		<div class="user-info">
			<Username {name} {icon} />
		</div>
	</div>
	<div class="stats">
		<div>Aura: {aura}</div>
		<div>Rank: </div>
		<div>Credits: {credits}</div>
		<div>Uploads: </div>
		<div>Favorites: </div>

	</div>
</section>

<style>
	.user {
		padding-top: var(--px64);
		padding-bottom: var(--px36);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		gap: var(--px16);
		.avatar {
			width: var(--px128);
			height: var(--px128);
			border-radius: 100%;
		}
		.user-info {
			color: var(--white);
			padding-left: calc(var(--px24) + var(--px5));
		}
	}
	.stats {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: var(--px8);
		padding-left: var(--px8);
		font-size: var(--px16);
		font-weight: 400;
		color: var(--gray90);
	}
</style>
