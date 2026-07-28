<script lang="ts">
	let { icon, ...props } = $props();
</script>

<img src={`/icons/${icon}.svg`} alt={icon} {...props} />

<style>
	img {
		width: var(--px24);
		height: var(--px24);
	}
</style>
