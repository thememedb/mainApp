<script>
	import { Icon } from '$lib';
</script>

<div class="actions container">
	<div class="icons">
		<Icon name="plus" />
		<Icon name="minus" />
		<Icon name="heart" />
		<Icon name="threeDots" />
		<Icon name="details" />
		<Icon name="tag" />
		<Icon name="smiley" />
		<Icon name="reply" />
	</div>
</div>

<style>
	.actions {
		padding-left: 0;
		height: var(--px48);
		.icons {
			display: flex;
			:global(.icon) {
				height: var(--px48);
				padding: var(--px10) var(--px5) var(--px6) var(--px5);
				color: var(--gray80);
				width: var(--px42);
				&:first-child {
					padding-left: var(--mobilePadding);
					width: var(--px46);
				}
				&:last-child {
					width: var(--px48);
					padding: var(--px11);
					transform: scale(1.6) translate(var(--px8), var(---px12));
				}
			}
		}
	}
</style>
