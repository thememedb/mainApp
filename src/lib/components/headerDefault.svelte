<script lang="ts">
	import Icon from '$lib/components/icon.svelte';
	import { page } from '$app/state';
</script>

<header>
	<a href={`/users/1}`}>
		<img class="user-avatar" src="/userAvatars/2.jpg" alt="Users Avatar" />
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
	<a href="/lithuania/top" data-sveltekit-reload>
		<img class="logo-image" src="/favicon.png" alt="Logo" />
	</a>
</header>

<style>
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
			rgba(0, 0, 0, 0.8) 100%
		);
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: var(--px16);
		padding: var(--px8);
		z-index: 1000;
		.logo-image {
			/* transform: scaleX(-1); */
			width: var(--px48);
			height: var(--px48);
		}
		.user-avatar {
			width: var(--px42);
			height: var(--px42);
			border-radius: 100%;
		}
		.logo {
			/* pratrinti gradientus ir palikti tik vieną spalvą */
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
				45deg,
				color(display-p3 0.8 0 0.3) 7%,
				color(display-p3 1 0.5 0) 18%,
				color(display-p3 1 1 0) 30%,
				color(display-p3 0.2 1 0.2) 45%,
				color(display-p3 0 1 0.5) 52.5%,
				color(display-p3 0 1 1) 60%,
				color(display-p3 0 0.5 1) 70%,
				color(display-p3 0 0 1) 80%,
				color(display-p3 0 0 0.4) 92%
			);
			--gradient3: linear-gradient(
				45deg,
				color(display-p3 0.4 0 0.2) 5%,
				color(display-p3 0.6 0 0.3) 10%,
				color(display-p3 0.7 0.15 0.15) 15%,
				color(display-p3 0.9 0.5 0) 25%,
				color(display-p3 1 1 0) 35%,
				color(display-p3 0.2 1 0.2) 50%,
				color(display-p3 0 1 0.5) 57%,
				color(display-p3 0 1 1) 66%,
				color(display-p3 0 0.65 1) 72%,
				color(display-p3 0 0.3 1) 80%,
				color(display-p3 0.2 0 0.45) 91%
			);
			margin: 0;
			font-size: var(--px36);
			font-weight: 700;
			letter-spacing: -0.03em;
			display: block;
			white-space: nowrap;
			background: var(--gradient2);
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
</style>
