<script lang="ts">
	let { children } = $props();
</script>

<main>
	<header>
		<a href="/">
			<h2 class="logo">memedb</h2>
		</a>
		<div class="nav">
			<a href="/app">
				<img src="/icons/cloudArrowUp.svg" alt="Icon" width="24" height="24" />
			</a>
			<a href="/app">
				<img src="/icons/handCoinsRegular.svg" alt="Icon" width="24" height="24" />
			</a>
			<a href="/app">
				<img src="/icons/funnel.svg" alt="Filter" width="24" height="24" />
			</a>
			<a href="/app">
				<img src="/icons/menuBurger.svg" alt="IcoMenu" width="32" height="32" />
			</a>
		</div>
	</header>
	{@render children()}
</main>

<style>
	header {
		--px4: calc(4/376);
		--px8: calc(8/376);
		--px16: calc(16/376);
		--px24: calc(24/376);
		--px36: calc(36/376);
		--px64: calc(64/376);
		position: sticky;
		top: 0;
		width: 100%;
		height: calc(var(--px64) * 100cqw);
		background-color: rgba(0, 0, 0, 0.85);
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: calc(var(--px16) * 100cqw);
		padding: calc(var(--px16) * 100cqw);
	}
	.logo {
		--gradient: linear-gradient(
			-150deg,
			#ff00ff 0%,
			#00d4ff 40%,
			#00ff99 50%,
			#ffff00 70%,
			#ff7700 85%,
			#ff33bb 100%
		);
		margin: 0;
		font-size: calc(var(--px36) * 100cqw);
		font-weight: 700;
		letter-spacing: -0.03em;
		line-height: 1;
		display: block;
		white-space: nowrap;
		background: var(--gradient);
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
	}
	.nav {
		display: flex;
		align-items: center;
		gap: calc(var(--px16) * 100cqw);
	}
	.nav img {
		width: calc(var(--px24) * 100cqw);
		height: calc(var(--px24) * 100cqw);
	}
	main {
		background-color: black;
	}
	a {
		text-decoration: none;
	}
</style>
