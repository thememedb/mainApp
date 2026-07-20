<script>
	let { ...props } = $props();
</script>

<svg
	viewBox="0 0 16 16"
	fill="var(--red)"
    opacity="0.5"
	{...props}
>
	<rect x="0" y="0" width="16" height="16" fill="blue"  />
	<rect x="2" y="2" width="12" height="14" />
</svg>
