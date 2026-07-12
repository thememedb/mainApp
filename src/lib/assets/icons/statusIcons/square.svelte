<script>
	let { ...props } = $props();
</script>

<svg
	width="var(--px16)"
	height="var(--px16)"
	viewBox="0 0 16 16"
	xmlns="http://www.w3.org/2000/svg"
	// class="icon"
	fill="var(--red)"
    opacity="0.5"
	{...props}
>
	<rect x="0" y="0" width="16" height="16" fill="blue"  />
	<rect x="2" y="5.5" width="12" height="10.5" />
</svg>
