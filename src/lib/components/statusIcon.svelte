<script lang="ts">
	let { icon, ...props } = $props();
</script>

<img src={`/icons/${icon}.svg`} alt={icon} {...props} />

<style>
	img {
		--padding: var(--px5);
		padding-left: var(--padding);
		width: calc(var(--px24) + var(--padding));
		height: var(--px24);
	}
</style>
