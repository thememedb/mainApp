<!-- src/routes/+page.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';

	interface Particle {
		id: number;
		size: number;
		left: number;
		delay: number;
		duration: number;
		color1: string;
		color2: string;
	}

	let particles: Particle[] = [];

	const colors = [
		{ c1: 'rgba(014, 165, 233, 0.15)', c2: 'rgba(006, 182, 212, 0.15)' },
		{ c1: 'rgba(006, 182, 212, 0.15)', c2: 'rgba(016, 185, 129, 0.15)' },
		{ c1: 'rgba(016, 185, 129, 0.15)', c2: 'rgba(234, 179, 008, 0.15)' },
		{ c1: 'rgba(234, 179, 008, 0.15)', c2: 'rgba(255, 200, 000, 0.15)' },
		{ c1: 'rgba(255, 200, 000, 0.15)', c2: 'rgba(236, 072, 153, 0.15)' },
		{ c1: 'rgba(236, 072, 153, 0.15)', c2: 'rgba(217, 070, 239, 0.15)' },
		{ c1: 'rgba(217, 070, 239, 0.15)', c2: 'rgba(014, 165, 233, 0.15)' }
	];

	onMount(() => {
		// Generate subtle floating particles with random colors
		particles = Array.from({ length: 12 }, (_, i) => {
			const colorPair = colors[Math.floor(Math.random() * colors.length)];
			return {
				id: i,
				size: Math.random() * 80 + 40,
				left: Math.random() * 100,
				delay: Math.random() * -20,
				duration: Math.random() * 18 + 22,
				color1: colorPair.c1,
				color2: colorPair.c2
			};
		});
	});
</script>

<svelte:head>
	<title>memedb — Coming Soon</title>
	<meta name="description" content="The curated, searchable meme database — launching soon." />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="viewport">
	<div class="particles">
		{#each particles as p}
			<div
				class="particle"
				style="--size: {p.size}px; --left: {p.left}vw; --delay: {p.delay}s; --duration: {p.duration}s; --color1: {p.color1}; --color2: {p.color2};"
			></div>
		{/each}
	</div>

	<main class="content">
		<h1 class="logo">memedb</h1>
		<div class="tagline">the legend is born</div>
		<div class="coming-soon">stay tuned</div>
		<div class="launch-date">Spring 2026</div>
	</main>
</div>

<style>
	:global(:root) {
		--bg: #000000;
		--text: #f8f9ff;
		--gradient: linear-gradient(
			-150deg,
			#ff00ff 0%,
			#00d4ff 40%,
			#00ff99 50%,
			#ffff00 70%,
			#ff7700 85%,
			#ff33bb 100%
		);
	}

	:global(html),
	:global(body) {
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	.viewport {
		min-height: 100dvh;
		background: var(--bg);
		color: var(--text);
		font-family:
			'Rubik',
			system-ui,
			-apple-system,
			sans-serif;
		position: relative;
		overflow: hidden;
	}

	.particles {
		position: fixed;
		inset: 0;
		pointer-events: none;
		z-index: 0;
	}

	.particle {
		position: absolute;
		width: var(--size);
		height: var(--size);
		background: radial-gradient(circle at 30% 30%, var(--color1), var(--color2));
		border-radius: 50%;
		left: var(--left);
		top: 120dvh;
		animation: float-drift var(--duration) linear infinite;
		animation-delay: var(--delay);
		will-change: transform, opacity;
		filter: blur(2px) drop-shadow(0 0 12px var(--color1));
	}

	@keyframes float-drift {
		0% {
			transform: translateY(0) translateX(0) scale(1);
			opacity: 1;
		}
		25% {
			transform: translateY(-37.5dvh) translateX(30px) scale(0.95);
		}
		50% {
			transform: translateY(-75dvh) translateX(0) scale(0.85);
			opacity: 0.8;
		}
		75% {
			transform: translateY(-112.5dvh) translateX(-30px) scale(0.75);
		}
		to {
			transform: translateY(-150dvh) translateX(0) scale(0.7);
			opacity: 0;
		}
	}

	.content {
		position: relative;
		z-index: 1;
		min-height: 100dvh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 2.5rem 1.5rem;
		text-align: center;
	}

	.logo {
		font-size: clamp(4.8rem, 14vw, 11rem);
		font-weight: 700;
		letter-spacing: -0.03em;
		line-height: 0.9;
		background: var(--gradient);
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
		filter: drop-shadow(0 0 8rem rgba(0, 212, 255, 0.5))
			drop-shadow(0 0 4rem rgba(255, 51, 187, 0.4));
		animation: breathe 10s ease-in-out infinite;
	}

	@keyframes breathe {
		0%,
		100% {
			filter: blur(0.5px) drop-shadow(0 0 3rem rgba(14, 165, 233, 0.5));
		}
		50% {
			filter: blur(0px) drop-shadow(0 0 5rem rgba(236, 72, 153, 0.4));
		}
	}

	.coming-soon {
		margin: 1rem 0 1rem;
		font-size: clamp(2.8rem, 8vw, 5.2rem);
		font-weight: 600;
		letter-spacing: -0.02em;
		background: linear-gradient(45deg, #0ea5e9, #10b981, #eab308, #ec4899);
		-webkit-background-clip: text;
		background-clip: text;
		color: #aeadad;
	}

	.tagline {
		font-size: clamp(1.2rem, 3.8vw, 1.55rem);
		font-weight: 500;
		color: rgb(76, 76, 76);
		max-width: 38ch;
		line-height: 1.48;
		opacity: 0.92;
		filter: blur(0.5px);
	}

	.launch-date {
		position: fixed;
		bottom: 2rem;
		left: 50%;
		transform: translateX(-50%);
		font-size: 1.25rem;
		color: rgb(76, 76, 76);
		letter-spacing: 0.05em;
		margin-top: 0;
		z-index: 2;
	}

	@media (min-width: 640px) {
		.content {
			padding: 4rem 2rem;
		}
	}

	@media (min-width: 1024px) {
		.tagline {
			font-size: 1.75rem;
		}
	}
</style>
