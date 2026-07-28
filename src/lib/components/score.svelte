<script>
	let { score } = $props();
</script>

<span class="score">{score > 0 ? '+' : ''}{score} • </span>

<style>
	.score {
		font-size: var(--px16);
	}
</style>
