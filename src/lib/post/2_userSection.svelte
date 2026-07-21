<script lang="ts">
	import { Icon, Username } from '$lib';
	import { showScore, showTimeAgo } from '$lib/utils/utils';
	let { user } = $props();
	let { name, avatar, id, time, score } = $derived(user);
	const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
</script>

<div class="postUser container">
	<div class="user">
		<img src={avatar} alt="Users Avatar" />
		<div class="user-info">
			<Username {name} icon="verified" />
			<div class="score-time">
				<span class="score">{showScore(score)} • </span>
				<span class="time">{showTimeAgo(time)}</span>
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
				height: var(--px48);
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				justify-content: flex-end;
				gap: var(--px4);
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
