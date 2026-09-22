<script lang="ts">
</script>

<div class="menu" id="menu">
	<div class="item">News</div>
	<div class="item">Blog</div>
	<a href="/user/15" class="item">User 15</a>
	<div class="item">Shop</div>
	<div class="item">Contacts</div>
	<div class="item">Settings</div>
</div>

<style>
	.menu {
		width: max-content;
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
