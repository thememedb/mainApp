<script lang="ts">
	const onclick = () => alert('menu');
</script>

<div class="menu">
	<a class="item" href="/user/1"> Profile </a>
	<button class="item" {onclick}>Favorites</button>
	<button class="item" {onclick}>My server</button>
	<button class="item" {onclick}>Friends</button>
	<button class="item" {onclick}>Subscriptions</button>
</div>

<style>
	.menu {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		.item {
			display: flex;
			width: 100%;
			font-size: var(--px24);
			font-weight: 500;
			color: var(--gray80);
			padding: var(--px16) var(--px32);
			&:last-child {
				padding-bottom: var(--px28);
			}
		}
	}
</style>
