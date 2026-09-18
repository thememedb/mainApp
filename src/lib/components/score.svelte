<script>
	let { score } = $props();
</script>

<!-- minus not necessary, because it's displayed by default -->
<span class="score">{score > 0 ? '+' : ''}{score}</span>

<style>
	.score {
		font-size: var(--px16);
	}
</style>
