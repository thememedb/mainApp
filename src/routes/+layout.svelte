<script lang="ts">
	let { children } = $props();
</script>

<main>
	<header>
		<a href="/">
			<h2 class="logo">memedb</h2>
		</a>
		<div class="nav">
			<a href="/uppload">
				<img src="/icons/cloudArrowUp.svg" alt="Icon" />
			</a>
			<a href="/donate">
				<img src="/icons/handCoinsRegular.svg" alt="Icon" />
			</a>
			<a href="/filter">
				<img src="/icons/funnel.svg" alt="Filter" />
			</a>
			<a href="/menu">
				<img src="/icons/menuBurger.svg" alt="IcoMenu" />
			</a>
		</div>
	</header>
	<div class="children">
		{@render children()}
	</div>
</main>

<style>
	main {
		container-type: inline-size;
		width: 100%;
		margin: 0 auto;
		min-width: 240px;
		max-width: 644px;
		background-color: black;
		min-height: 100dvh;
		header {
			position: sticky;
			top: 0;
			width: 100%;
			height: var(--px64);
			background: linear-gradient(
				to bottom,
				rgba(0, 0, 0, 1) 0%,
				rgba(0, 0, 0, 0.96) 30%,
				rgba(0, 0, 0, 0.9) 80%,
				rgba(0, 0, 0, 0.85) 90%,
				rgba(0, 0, 0, 0.8) 97%,
				rgba(0, 0, 0, 0) 100%
			);
			backdrop-filter: blur(1px);
			display: flex;
			justify-content: space-between;
			align-items: center;
			gap: var(--px16);
			padding: var(--px16);
			z-index: 1000;
			a {
				text-decoration: none;
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
				font-size: var(--px36);
				font-weight: 700;
				letter-spacing: -0.03em;
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
				gap: var(--px16);
				img {
					width: var(--px24);
					height: var(--px24);
				}
			}
		}
		.children {
			z-index: 0;
		}
	}
</style>
