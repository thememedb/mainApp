<script lang="ts">
	import { Icon, Username, Score, Time } from '$lib';

	let { user } = $props();
	let { name, avatar, id, time, score } = $derived(user);
</script>

<div class="postUser container">
	<div class="user">
		<a href={`/users/${name}`}>
			<img src={avatar} alt="Users Avatar" />
		</a>
		<div class="user-info">
			<Username {name} icon="verified" />
			<div class="score-time">
				<Score {score} />
				<Time {time} />
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
		gap: var(--px8);
		.user {
			display: flex;
			align-items: center;
			justify-content: flex-start;
			gap: var(--px14);
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
				gap: var(--px8);
				.score-time {
					color: var(--gray80);
					font-weight: 400;
					line-height: 0.8;
					:global(.score) {
						font-size: var(--px20);
					}
					:global(.time) {
						font-size: var(--px18);
					}
					:global(.date) {
						font-weight: 425;
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
