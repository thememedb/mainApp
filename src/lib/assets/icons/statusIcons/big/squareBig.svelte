<script>
	let { ...props } = $props();
</script>

<svg
	viewBox="0 0 20 20"
	fill="var(--red)"
    opacity="0.5"
	{...props}
>
	<rect x="0" y="0" width="20" height="20" fill="blue"  />
	<rect x="2" y="6.5" width="12" height="10.5" />
</svg>
