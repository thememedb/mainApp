<script lang="ts">
	import { Icon, Username, Score, Time, Views } from '$lib';

	let { user } = $props();
	let { name, avatar, id, time, score, icon, views } = $derived(user);
</script>

<div class="postUser container">
	<div class="user">
		<a href={`/users/${name}`}>
			<img src={avatar} alt="Users Avatar" />
		</a>
		<div class="user-info">
			<Username {name} {icon} />
			<div class="score-time-views">
				<Score {score} />
				<span class="dot"> • </span>
				<Time {time} />
				<span class="dot"> • </span>
				<Views {views} />
			</div>
		</div>
	</div>
</div>

<style>
	.postUser {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: var(--px16) var(--px0) var(--px8) var(--mobilePadding);
		gap: var(--px8);
		.user {
			display: flex;
			align-items: center;
			justify-content: flex-start;
			gap: var(--px14);
			font-size: var(--px20);
			a {
				flex-shrink: 0;
			}
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
				.score-time-views {
					display: flex;
					align-items: baseline;
					gap: var(--px6);
					color: var(--gray80);
					font-weight: 400;
					line-height: 0.8;
					.dot {
						font-size: var(--px18);
						color: var(--gray70);
					}
					:global(.score) {
						font-size: var(--px20);
					}
					:global(.time) {
						font-size: var(--px18);
						color: var(--gray70);
					}
					:global(.date) {
						color: var(--gray60);
						font-weight: 425;
						font-size: var(--px18);
					}
					:global(.views) {
						color: var(--gray60);
						font-size: var(--px17);
					}
				}
			}
		}
	}
</style>
