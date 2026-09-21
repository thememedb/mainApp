<script lang="ts">
	import { Menu, UserMenuItems } from '$lib';
	let isMenuOpen = $state(false);
</script>

<button onclick={() => (isMenuOpen = !isMenuOpen)} class="user-menu">
	<!-- remove this picNmark div. left unnecessery after indicator was removed. -->
	<div class="picNmark">
		<img class="user-avatar" src="/userAvatars/2.jpg" alt="Users Avatar" />
	</div>
</button>
<Menu x={-50} bind:isMenuOpen>
	<UserMenuItems />
</Menu>

<style>
	.user-menu {
		width: var(--px64);
		height: var(--px64);
		padding: var(--px12) var(--px18) var(--px12) var(--px6);
		.picNmark {
			position: relative;
			width: var(--px40);
			height: var(--px40);
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
