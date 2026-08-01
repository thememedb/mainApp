<script>
	import { Icon, Username, Score, Time } from '$lib';
	let { comment } = $props();
	let { user, comment: commentText, time, rank, vote } = $derived(comment);
</script>

<div class="comment">
	<div class="user">
		<a href={`/users/${user.name}`}>
			<img class="avatar" src={user.avatar} alt="user avatar" />
		</a>
		<div class="user-info">
			<Username name={user.name} icon={user.icon} />
			<div class="bottom">
				<div class="score-time">
					<Score score={rank} />
					<Time {time} />
				</div>
				<div class="reactionButtons">
					<Icon name="threeDots" class="icon first" />
					<Icon name="minus" />
					<Icon name="plus" />
					<Icon name="reply" />
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
			gap: var(--px14);
			font-size: var(--px20);
			.avatar {
				width: var(--px48);
				height: var(--px48);
				border-radius: 100%;
			}
			.user-info {
				color: var(--gray90);
				height: var(--px48);
				display: flex;
				flex-direction: column;
				.bottom {
					height: var(--px24);
					display: flex;
					align-items: baseline;
					gap: var(--px6);
					.score-time {
						color: var(--gray80);
						font-weight: 400;
						line-height: 1;
						font-size: var(--px15);
					}
					:global(&:has(.time)) {
						transform: translateY(var(---px2));
						.reactionButtons {
							transform: translateY(var(--px8));
						}
					}
					:global(&:has(.date)) {
						transform: translateY(var(---px1));
						gap: var(--px12);
						.reactionButtons {
							transform: translateY(calc(var(--px1) * 6.75));
						}
					}
					.reactionButtons {
						display: flex;
						/* gap: var(--px10); */
						:global(.icon) {
							color: var(--gray50);
							width: calc(var(--px24) + 2 * var(--px5));
							height: var(--px24);
							padding: 0 var(--px5);
							&.first {
								
							}
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
			line-height: var(--px22);
		}
	}
</style>
