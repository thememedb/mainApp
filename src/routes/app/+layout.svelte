<script lang="ts">
	let { children } = $props();
</script>

<header>
	<a href="/">
		<h4 class="logo">memedb</h4>
	</a>
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
</header>
<main>
	{@render children()}
</main>

<style>
	header {
		height: 64px;
		background-color: rgba(0, 0, 0, 0.85);
		position: fixed;
		top: 0px;
		left: 50%;
		transform: translate(-50%, 0%);
		margin: 0 auto;
		width: 376px;
		max-width: 376px;
		display: flex;
		justify-content: end;
		gap: 24px;
		align-items: center;
		padding: 16px;
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
		font-size: 36px;
		font-weight: 700;
		letter-spacing: -0.03em;
		line-height: 1;
		display: block;

		background: var(--gradient);
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
	}
	main {
		padding-top: 64px;
		width: 376px;
		max-width: 376px;
		height: 100dvh;
		margin: 0 auto;
		background-color: black;
	}
	a {
		color: var(--link);
		text-decoration: none;
	}
	a:hover {
		color: var(--link-hover);
	}
	a:active {
		color: var(--link-active);
	}
</style>
