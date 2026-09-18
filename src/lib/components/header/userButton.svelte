<script lang="ts">
	import { page } from '$app/state';
	import { fade } from 'svelte/transition';
	import { goto } from '$app/navigation';
	let isProfile = $derived(page.route.id === '/users/[user]');
	let isMenuOpen = $state(false);

	const onclick = () => {
		if (isProfile) isMenuOpen = !isMenuOpen;
		if (!isProfile) goto('/users/3');
	};
</script>

<button {onclick} class="user-avatar-container">
	<div class="picNmark">
		<img class="user-avatar" src="/userAvatars/2.jpg" alt="Users Avatar" />
		{#if !isMenuOpen && isProfile}
			<div class="indicator" transition:fade={{ duration: 250 }}></div>
		{/if}
	</div>
</button>

<style>
	.user-avatar-container {
		width: var(--px64);
		height: var(--px64);
		padding: var(--px12) var(--px18) var(--px12) var(--px6);
		.picNmark {
			position: relative;
			width: var(--px40);
			height: var(--px40);
			.indicator {
				--size: var(--px6);
				position: absolute;
				bottom: 0;
				right: 0;
				width: var(--size);
				height: var(--size);
				background: var(--gray80);
				clip-path: polygon(100% 0, 100% 100%, 0 100%);
			}
		}
		@media (pointer: fine) {
			padding: var(--px12) var(--px16) var(--px12) var(--mobilePadding);
		}
	}
	.user-avatar {
		width: var(--px40);
		height: var(--px40);
		border-radius: 100%;
	}
</style>
