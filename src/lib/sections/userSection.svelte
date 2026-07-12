<script>
	import { Icon } from '$lib';
	import MoneyFilled from '$lib/assets/icons/complex/moneyFilled.svelte';
</script>

<div class="postUser container">
	<div class="user">
		<img src="/userAvatars/5.jpg" alt="user avatar" />
		<div class="user-info">
			<div class="username">
				<span>JrestedDevelopmentsu</span>
				<MoneyFilled class="icon" />
			</div>
			<div class="score-time">
				<span class="score">+692 • </span>
				<span class="time">12min ago</span>
			</div>
		</div>
	</div>
	<div class="replyButton">
		<a href="/reply">
			<Icon name="reply" class="icon" />
		</a>
	</div>
</div>

<style>
	.postUser {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-top: var(--px16);
		padding-right: var(--px8);
		.user {
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
				display: flex;
				flex-direction: column;
				gap: var(--px8);
				.username {
					display: flex;
					align-items: center;
					justify-content: flex-start;
					gap: var(--px4);
					font-size: var(--px20);
					font-weight: 500;
					:global(.icon) {
						width: var(--px20);
						height: var(--px20);
					}
				}
				.score-time {
					color: var(--gray80);
					font-weight: 400;
					.score {
						font-size: var(--px20);
					}
					.time {
						font-size: var(--px18);
					}
				}
			}
		}
		.replyButton {
			padding: var(--px8);
			:global(.icon) {
				color: var(--gray80);
				width: var(--px32);
				height: var(--px32);
			}
		}
	}
</style>
