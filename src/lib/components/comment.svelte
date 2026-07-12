<script>
	import MoneyFilled from '$lib/assets/icons/complex/moneyFilled.svelte';
	import { Icon } from '$lib';
	import StatusIcon from './statusIcon.svelte';
	let { comment } = $props();
</script>

<div class="comment">
	<div class="user">
		<img src="/userAvatars/4.jpg" alt="user avatar" />
		<div class="user-info">
			<div class="username">
				<span>FermBoy</span>
				<StatusIcon name="square" />
				<!-- <MoneyFilled class="icon" /> -->
			</div>
			<div class="bottom">
				<div class="score-time">
					<span class="score">+17 • </span>
					<span class="time">1min ago</span>
				</div>
				<div class="reactionButtons">
					<Icon name="threeDots" class="icon" />
					<Icon name="minus" class="icon" />
					<Icon name="plus" class="icon" />
					<Icon name="reply" class="icon" />
				</div>
			</div>
		</div>
	</div>
	<div class="commentText">
		Rorem ipsum, dolor sit amet. Gaudeamus igitur, nortradamus to chaltur.
	</div>
</div>

<style>
	.comment {
		.user {
			padding-bottom: var(--px8);
			display: flex;
			align-items: center;
			justify-content: flex-start;
			gap: var(--px12);
			font-size: var(--px20);
			img {
				width: var(--px48);
				height: var(--px48);
				border-radius: 100%;
			}
			.user-info {
				color: var(--gray90);
				height: var(--px48);
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				justify-content: flex-end;
				gap: var(--px4);
				.username {
					height: var(--px20);
					display: flex;
					align-items: baseline;
					gap: var(--px4);
					font-size: var(--px20);
					font-weight: 500;
					:global(&:has(> .icon.big)) {
						/* background-color: red; */
						align-items: center;
					}
					:global(.icon) {
						display: inline-block;
						width: var(--px16);
						height: var(--px16);
						&.big {
							width: var(--px20);
							height: var(--px20);
							/* transform: scale(1.25) translateY(var(--px1)); */
						}
					}
				}

				.bottom {
					display: flex;
					align-items: flex-end;
					gap: var(--px8);
					.score-time {
						color: var(--gray80);
						font-weight: 400;
						line-height: 1;
						font-size: var(--px14);
					}
					.reactionButtons {
						margin-bottom: calc(var(--px1) * -6);
						display: flex;
						align-items: end;
						justify-content: flex-start;
						gap: var(--px8);
						:global(.icon) {
							color: var(--gray50);
							width: var(--px24);
							height: var(--px24);
						}
					}
				}
			}
		}
		.commentText {
			margin-left: calc(var(--px1) * -1);
			font-size: calc(var(--px1) * 16);
			font-weight: 400;
			color: var(--gray80);
			line-height: 1.25;
		}
	}
</style>
