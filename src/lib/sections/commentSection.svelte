<script>
	import { Icon, Comment } from '$lib';
	import MoneyFilled from '$lib/assets/icons/complex/moneyFilled.svelte';
	let comment = {
		user:{
			id: 321321,
			name: "FermBoy",
			avatar: "/userAvatars/4.jpg",
			icon: "bot"
		},
		comment:"Rorem ipsum, dolor sit amet. Gaudeamus igitur, nortradamus to chaltur.",
		time: "2min ago",
		rank: 26,
		vote: null,
	}
</script>

<Comment {comment} />
<div class="comments container">
	<div class="threadContainer">
		<div class="comment">
			<div class="user">
				<img src="/userAvatars/4.jpg" alt="user avatar" />
				<div class="user-info">
					<div class="username">
						<span>FermBoy</span>
						<MoneyFilled class="icon" />
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
		<!-- <div class="reply"></div> -->
	</div>
	<div class="threadContainer">
		<div class="comment">
			<div class="user">
				<img src="/userAvatars/2.jpg" alt="user avatar" />
				<div class="user-info">
					<div class="username">
						<span>YourMom</span>
						<MoneyFilled class="icon" />
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
				jarum wurden die ja versichert. Aus dem Link weiter oben in der Kette: "Mitte Januar 1913
				versahen sie ihren acht Monate alten Sohn James mit Briefmarken im Wert von 15 Cent,
				versicherten ihn für 50 Dollar und sendeten ihn zur Grossmutter." Das sind umerechnet heute
				1600€. yr tai man yra visiškai nepriimtina.
			</div>
		</div>
		<div class="comment">
			<div class="user">
				<img src="/userAvatars/4.jpg" alt="user avatar" />
				<div class="user-info">
					<div class="username">
						<span>FermBoy</span>
						<MoneyFilled class="icon" />
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
				Rorem ipsum, dolor sit amet. Gaudeamus itur, nortradamus to chaltur.
			</div>
		</div>
		<div class="comment">
			<div class="user">
				<img src="/userAvatars/3.jpg" alt="user avatar" />
				<div class="user-info">
					<div class="username">
						<span>Space Man of the moon</span>
						<MoneyFilled class="icon" />
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
				Rorem ipsum, dolor sit amet. Gaudeamus itur, nortradamus to chaltur.
			</div>
		</div>
	</div>
	<div class="threadContainer">
		<div class="comment">
			<div class="user">
				<img src="/userAvatars/1.jpg" alt="user avatar" />
				<div class="user-info">
					<div class="username">
						<span>Gigachad9000</span>
						<MoneyFilled class="icon" />
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
				"Als Paket" heisst hierbei es wurde eine Paketmarke auf ihre Jacke geklebt und ihr gesagt
				setz dich ins Auto/Zug. Das war ein Schlupfloch das sich immer mal wieder Leute zur Nutze
				gemacht haben, aber sie ist quasi als normaler Beifahrer für die Postleute mitgefahren. Ist
				wie als würdest du zum Postboten sagen "Du fährst doch da lang, kannst du meine Tochter
				mitnehmen? Ich bezahl auch das 'Paket' damit es offiziel ist."
			</div>
		</div>
		<!-- <div class="reply"></div> -->
	</div>
</div>

<style>
	.comments {
		display: flex;
		flex-direction: column;
		gap: var(--px24);
		padding-top: var(--px24);
	}
	.threadContainer {
		display: flex;
		flex-direction: column;
		gap: var(--px16);
		padding: calc(var(--px1) * 12) 0 var(--px8) var(--px12);
		border-top-left-radius: calc(var(--px1) * 36);
		border-bottom-left-radius: var(--px16);
		border-left: calc(var(--px1) * 2) solid transparent;
		border-bottom: calc(var(--px1) * 1) solid transparent;
		background:
			linear-gradient(var(--black), var(--black)) padding-box,
			linear-gradient(90deg, var(--gray60) 0%, var(--gray15) 35%, black 70%) border-box;

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
	}
</style>
