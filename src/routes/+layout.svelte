<script lang="ts">
	import Icon from '$lib/components/icon.svelte';
	let { children } = $props();
</script>

<main>
	<header>
		<a href="/">
			<h2 class="logo">memedb</h2>
		</a>
		<div class="nav">
			<a href="/uppload">
				<Icon name="cloudArrowUp" class="icon" />
			</a>
			<a href="/donate">
				<Icon name="handCoinsRegular" class="icon" />
			</a>
			<a href="/filter">
				<Icon name="funnel" class="icon" />
			</a>
			<a href="/menu">
				<Icon name="menuBurger" class="icon" />
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
		background-color: var(--black);
		min-height: 100dvh;
		header {
			position: sticky;
			top: 0;
			width: 100%;
			height: var(--px64);
			background: linear-gradient(
				to bottom,
				rgba(0, 0, 0, 1) 0%,
				rgba(0, 0, 0, 0.98) 50%,
				rgba(0, 0, 0, 0.9) 80%,
				rgba(0, 0, 0, 0.85) 90%,
				rgba(0, 0, 0, 0.8) 97%,
				rgba(0, 0, 0, 0) 100%
			);
			/* background: linear-gradient(
				to bottom,
				rgba(0, 0, 0, 1) 0%,
				rgba(0, 0, 0, 0.995) 70%,
				rgba(0, 0, 0, 0.95) 90%,
				rgba(0, 0, 0, 0.9) 94%,
				rgba(0, 0, 0, 0.8) 97%,
				rgba(0, 0, 0, 0) 100%
			); */
			backdrop-filter: blur(1px);
			display: flex;
			justify-content: space-between;
			align-items: center;
			gap: var(--px16);
			padding: var(--px16);
			z-index: 1000;

			.logo {
				--gradient1: linear-gradient(
					-150deg,
					#ff00ff 0%,
					#00d4ff 40%,
					#00ff99 50%,
					#ffff00 70%,
					#ff7700 85%,
					#ff33bb 100%
				);
				--gradient2: linear-gradient(
					30deg,
					color(display-p3 1 0 0.5) 10%,
					color(display-p3 1 0.5 0) 18%,
					color(display-p3 1 1 0) 30%,
					color(display-p3 0 1 0) 45%,
					color(display-p3 0 1 0.5) 52.5%,
					color(display-p3 0 1 1) 60%,
					color(display-p3 0 0.5 1) 65%,
					color(display-p3 0 0.25 1) 70%,
					color(display-p3 0 0 1) 74%,
					color(display-p3 0.25 0 1) 79%,
					color(display-p3 0.5 0 1) 82%,
					color(display-p3 1 0 0.5) 87%
				);
				--gradient3: linear-gradient(
					30deg,
					color(display-p3 1 0 0.4) 10%,
					color(display-p3 1 0.5 0) 18%,
					color(display-p3 1 1 0) 30%,
					color(display-p3 0 1 0) 45%,
					color(display-p3 0 1 0.5) 52.5%,
					color(display-p3 0 1 1) 60%,
					color(display-p3 0 0.5 1) 70%,
					color(display-p3 0 0 1) 80%,
					color(display-p3 0 0 0.4) 89%
				);
				--gradient4: linear-gradient(
					30deg,
					color(display-p3 1 0 0.5) 7%,
					color(display-p3 1 0.5 0) 18%,
					color(display-p3 1 1 0) 30%,
					color(display-p3 0 1 0) 40%,
					/* color(display-p3 0 0.25 1) 48.5%, */ color(display-p3 0 1 0.75) 50%,
					/* color(display-p3 0 0.25 1) 51.5%, */ color(display-p3 0 1 0) 60%,
					color(display-p3 1 1 0) 70%,
					color(display-p3 1 0.5 0) 80%,
					color(display-p3 1 0 0.4) 89%
				);
				--gradient5: linear-gradient(
					30deg,
					color(display-p3 1 0 0.5) 10%,
					color(display-p3 1 0.5 0) 18%,
					color(display-p3 1 1 0) 30%,
					color(display-p3 0 1 0) 45%,
					color(display-p3 0 1 0.5) 52.5%,
					color(display-p3 0 1 1) 60%,
					/* color(display-p3 0 0.5 1) 70%, */ /* color(display-p3 0.5 0 1) 79%, */
					color(display-p3 0 0.65 1) 65%,
					color(display-p3 0 0.45 1) 68%,
					/* color(display-p3 0.2 0.2 1) 73%, */ color(display-p3 0.25 0.25 1) 75%,
					color(display-p3 0.35 0.25 1) 78%,
					color(display-p3 1 0 1) 85%,
					color(display-p3 1 0 0.5) 87%
				);
				margin: 0;
				font-size: var(--px36);
				font-weight: 700;
				letter-spacing: -0.03em;
				display: block;
				white-space: nowrap;
				background: var(--gradient3);
				-webkit-background-clip: text;
				background-clip: text;
				color: transparent;
			}
			.nav {
				display: flex;
				align-items: center;
				gap: var(--px16);
				:global(.icon) {
					color: var(--gray90);
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
