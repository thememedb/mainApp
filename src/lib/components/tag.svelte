<script lang="ts">
	import Icon from '$lib/components/icon.svelte';
	let { tag } = $props();
	let { id, score, text } = $derived(tag);


</script>

<div class="tagWrap">
	<button class="plus" onclick={() => alert('plius')}>
		<div class="plusBG">
			<Icon name="plus" />
		</div>
	</button>
	<button class="tag" onclick={() => alert(text)}>
		<div class="tagBG">
			<span>{text}</span>
		</div>
	</button>
	<button class="minus" onclick={() => alert('minus')}>
		<div class="minusBG">
			<Icon name="minus" />
		</div>
	</button>
</div>

<style>
	.tagWrap {
		--bgcolor: var(--gray15);
		--color: var(--gray60);
		display: flex;
		align-items: center;
		height: var(--px48);
		flex-shrink: 0;
		&:first-child .plus {
			padding-left: var(--px8);
		}
		.plus {
			padding: var(--px8) var(--px0) var(--px8) var(--px4);
			.plusBG {
				background-color: var(--bgcolor);
				color: var(--color);
				padding: var(--px4);
				border-radius: 999px 0 0 999px;
			}
		}
		.minus {
			padding: var(--px8) var(--px4) var(--px8) var(--px0);
			.minusBG {
				background-color: var(--bgcolor);
				color: var(--color);
				padding: var(--px4);
				border-radius: 0 999px 999px 0;
			}
		}
		.tag {
			height: var(--px48);
			min-width: var(--px32);
			display: flex;
			align-items: center;
			padding: var(--px8) var(--px0);
			.tagBG {
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				height: var(--px32);
				background-color: var(--bgcolor);
				color: var(--color);
				font-size: var(--px18);
				font-weight: 450;
				padding: var(--px4) var(--px0);
			}
			:global(.icon) {
				flex-shrink: 0;
				width: var(--px24);
				height: var(--px24);
			}
		}
	}
</style>
