<script>
	import { Icon, Username, Score, Time } from '$lib';
	let { comment } = $props();
	let { user, comment: commentText, time, rank, vote } = $derived(comment);
</script>

<div class="comment">
	<div class="user">
		<img src={user.avatar} alt="user avatar" />
		<div class="user-info">
			<Username name={user.name} icon={user.icon} />
			<div class="bottom">
				<div class="score-time">
					<Score score={rank} />
					<Time {time} />
					<!-- <span class="time">ago</span> -->
					<!-- <span class="time">{showTimeAgo2(time)}</span> -->
					<!-- <span class="time">
						<span style="font-size: var(--px14)">26-</span>
						<span style="font-size: calc(var(--px1) * 13)">07-</span>
						<span style="font-size: var(--px12)">22</span>
					</span> -->
				</div>
				<div class="reactionButtons">
					<a href="/">
						<Icon name="threeDots" class="icon" />
					</a>
					<a href="/">
						<Icon name="minus" class="icon" />
					</a>
					<a href="/">
						<Icon name="plus" class="icon" />
					</a>
					<a href="/">
						<Icon name="reply" class="icon" />
					</a>
				</div>
			</div>
		</div>
	</div>
	<div class="commentText">
		{commentText}
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
				.bottom {
					display: flex;
					align-items: flex-end;
					gap: var(--px8);
					.score-time {
						color: var(--gray80);
						font-weight: 400;
						line-height: 1;
						font-size: var(--px14);
						:global(.time) {
							color: var(--gray70);
						}
						:global(&:has(> .date)) {
							font-size: calc(var(--px1) * 15);
							line-height: 0.75;
						}
						:global(.date) {
							font-size: var(--px14);
							color: var(--gray60);
						}
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
			font-size: var(--px16);
			font-weight: 400;
			color: var(--gray90);
			line-height: 1.25;
		}
	}
</style>
