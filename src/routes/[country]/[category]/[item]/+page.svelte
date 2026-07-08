<script lang="ts">
	import Tag from '$lib/assets/tag.svelte';
	import MoneyFilled from '$lib/assets/icons/complex/moneyFilled.svelte';
	import Icon from '$lib/assets/icons/icon.svelte';
	let { data } = $props();
</script>

<div class="media container">
	<img class="image" src={'https://img.pr0gramm.com/' + data.thumb} alt="full meme" />
</div>

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
	<div class="reply">
		<a href="/reply">
			<Icon name="reply" class="icon" />
		</a>
	</div>
</div>

<div class="reactions container">
	<div class="icons">
		<Icon name="plus" class="icon" />
		<Icon name="minus" class="icon" />
		<Icon name="heart" class="icon" />
		<Icon name="smiley" class="icon" />
	</div>
	<div class="emojis">
		<img src="/emojis/face-with-tears-of-joy_1f602.png" alt="emoji1" style="--i: 1;" />
		<img src="/emojis/grinning-face-with-smiling-eyes_1f601.png" alt="emoji2" style="--i: 0.9;" />
		<img src="/emojis/pile-of-poo_1f4a9.png" alt="emoji3" style="--i: {0.9 ** 2};" />
		<img src="/emojis/grinning-face_1f600.png" alt="emoji3" style="--i: {0.9 ** 3};" />
		<img src="/emojis/see-no-evil-monkey_1f648.png" alt="emoji3" style="--i: {0.9 ** 4};" />
		<img
			src="/emojis/smiling-face-with-open-mouth-and-cold-sweat_1f605.png"
			alt="emoji3"
			style="--i: {0.9 ** 5};"
		/>
		<img
			src="/emojis/smiling-face-with-open-mouth-and-smiling-eyes_1f604.png"
			alt="emoji3"
			style="--i: {0.9 ** 6};"
		/>
		<img
			src="/emojis/smiling-face-with-open-mouth-and-tightly-closed-eyes_1f606.png"
			alt="emoji3"
			style="--i: {0.9 ** 7};"
		/>
		<img
			src="/emojis/smiling-face-with-open-mouth-and-tightly-closed-eyes_1f606.png"
			alt="emoji3"
			style="--i: {0.9 ** 8};"
		/>
		<img
			src="/emojis/smiling-face-with-open-mouth-and-tightly-closed-eyes_1f606.png"
			alt="emoji3"
			style="--i: {0.9 ** 9};"
		/>
		<img
			src="/emojis/smiling-face-with-open-mouth-and-tightly-closed-eyes_1f606.png"
			alt="emoji3"
			style="--i: {0.9 ** 10};"
		/>
		<img
			src="/emojis/smiling-face-with-open-mouth-and-tightly-closed-eyes_1f606.png"
			alt="emoji3"
			style="--i: {0.9 ** 11};"
		/>
		<img
			src="/emojis/smiling-face-with-open-mouth-and-tightly-closed-eyes_1f606.png"
			alt="emoji3"
			style="--i: {0.9 ** 12};"
		/>
		<img
			src="/emojis/smiling-face-with-open-mouth-and-tightly-closed-eyes_1f606.png"
			alt="emoji3"
			style="--i: {0.9 ** 13};"
		/>
		<img
			src="/emojis/smiling-face-with-open-mouth-and-tightly-closed-eyes_1f606.png"
			alt="emoji3"
			style="--i: {0.9 ** 14};"
		/>
		<img
			src="/emojis/smiling-face-with-open-mouth-and-tightly-closed-eyes_1f606.png"
			alt="emoji3"
			style="--i: {0.9 ** 15};"
		/>
		<img
			src="/emojis/smiling-face-with-open-mouth-and-tightly-closed-eyes_1f606.png"
			alt="emoji3"
			style="--i: {0.9 ** 16};"
		/>
		<img
			src="/emojis/smiling-face-with-open-mouth-and-tightly-closed-eyes_1f606.png"
			alt="emoji3"
			style="--i: {0.9 ** 17};"
		/>
		<img
			src="/emojis/smiling-face-with-open-mouth-and-tightly-closed-eyes_1f606.png"
			alt="emoji3"
			style="--i: {0.9 ** 18};"
		/>
		<img
			src="/emojis/smiling-face-with-open-mouth-and-tightly-closed-eyes_1f606.png"
			alt="emoji3"
			style="--i: {0.9 ** 19};"
		/>
		<img
			src="/emojis/smiling-face-with-open-mouth-and-tightly-closed-eyes_1f606.png"
			alt="emoji3"
			style="--i: {0.9 ** 20};"
		/>
		<img
			src="/emojis/smiling-face-with-open-mouth-and-tightly-closed-eyes_1f606.png"
			alt="emoji3"
			style="--i: {0.9 ** 21};"
		/>
	</div>
</div>

<div class="tags container">
	<Tag text="funny" />
	<Tag text="kvykt" />
	<Tag text="smiling" />
	<Tag text="happy" />
	<Tag text="lol" />
	<Tag text="katukas" />
	<Tag text="precious" />
</div>

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
							<Icon name="plus" class="icon" />
							<Icon name="minus" class="icon" />
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
							<Icon name="plus" class="icon" />
							<Icon name="minus" class="icon" />
							<Icon name="reply" class="icon" />
						</div>
					</div>
				</div>
			</div>
			<div class="commentText">
				Darum wurden die ja versichert. Aus dem Link weiter oben in der Kette: "Mitte Januar 1913
				versahen sie ihren acht Monate alten Sohn James mit Briefmarken im Wert von 15 Cent,
				versicherten ihn für 50 Dollar und sendeten ihn zur Grossmutter." Das sind umerechnet heute
				1600€.
			</div>
		</div>
		<div class="reply">
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
								<Icon name="plus" class="icon" />
								<Icon name="minus" class="icon" />
								<Icon name="reply" class="icon" />
							</div>
						</div>
					</div>
				</div>
				<div class="commentText">
					Rorem ipsum, dolor sit amet. Gaudeamus itur, nortradamus to chaltur.
				</div>
			</div>
			<div class="reply">
				<div class="comment">
					<div class="user">
						<img src="/userAvatars/3.jpg" alt="user avatar" />
						<div class="user-info">
							<div class="username">
								<span>Space Man</span>
								<MoneyFilled class="icon" />
							</div>
							<div class="bottom">
								<div class="score-time">
									<span class="score">+17 • </span>
									<span class="time">1min ago</span>
								</div>
								<div class="reactionButtons">
									<Icon name="threeDots" class="icon" />
									<Icon name="plus" class="icon" />
									<Icon name="minus" class="icon" />
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
							<Icon name="plus" class="icon" />
							<Icon name="minus" class="icon" />
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
<div class="end">• • •</div>

<style>
	.container {
		position: relative;
		width: 100%;
		height: max-content;
		&.postUser {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: calc(12 * var(--px1)) var(--px8) var(--px16) var(--leftpad);
			.user {
				display: flex;
				align-items: center;
				justify-content: flex-start;
				gap: var(--px8);
				gap: calc(10 * var(--px1));
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
			.reply {
				padding: var(--px8);
				:global(.icon) {
					color: var(--gray80);
					width: var(--px32);
					height: var(--px32);
				}
			}
		}
		&.reactions {
			display: flex;
			align-items: center;
			justify-content: flex-start;
			padding-left: var(--leftpad);
			.icons {
				background: linear-gradient(
					to bottom,
					rgba(0, 0, 0, 0) 0%,
					rgba(0, 0, 0, 0.96) 30%,
					rgba(0, 0, 0, 0.9) 80%,
					rgba(0, 0, 0, 0.85) 90%,
					rgba(0, 0, 0, 0.8) 97%,
					rgba(0, 0, 0, 0) 100%
				);
				flex: 0 0 auto;
				display: flex;
				align-items: center;
				justify-content: flex-start;
				gap: var(--px8);
				:global(.icon) {
					color: var(--gray80);
					width: var(--px32);
					height: var(--px32);
				}
			}
			.emojis {
				padding-left: var(--px24);
				flex: 1 1 auto;
				display: flex;
				align-items: center;
				justify-content: flex-start;
				gap: var(--px8);
				overflow-x: scroll;
				scrollbar-width: none;
				-ms-overflow-style: none;
				-webkit-overflow-scrolling: touch;
				mask-image: linear-gradient(
					to right,
					transparent,
					rgba(0, 0, 0, 0.05) var(--px4),
					rgba(0, 0, 0, 0.13) var(--px8),
					rgba(0, 0, 0, 0.22) var(--px12),
					rgba(0, 0, 0, 0.35) var(--px16),
					rgba(0, 0, 0, 0.4) var(--px18),
					rgba(0, 0, 0, 0.45) var(--px20),
					rgba(0, 0, 0, 0.55) var(--px24),
					rgba(0, 0, 0, 1) var(--px32),
					rgba(0, 0, 0, 1) calc(100% - var(--px64)),
					transparent
				);
				&::-webkit-scrollbar {
					display: none;
				}
				img {
					width: calc(var(--px28) * var(--i));
					height: calc(var(--px28) * var(--i));
				}
			}
		}
		&.tags {
			overflow-x: scroll;
			scrollbar-width: none;
			-ms-overflow-style: none;
			-webkit-overflow-scrolling: touch;
			display: flex;
			align-items: center;
			gap: var(--px8);
			padding: var(--px16) 0 var(--px16) var(--leftpad);
			&::-webkit-scrollbar {
				display: none;
			}
		}
		&.comments {
			padding: var(--px16) 0 0 var(--leftpad);
		}
		.threadContainer {
			padding: 0 0 var(--px32) 0;
			&:last-child {
				padding-bottom: 0;
			}
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
							align-items: center;
							gap: var(--px8);
							.score-time {
								color: var(--gray80);
								font-weight: 400;
								line-height: 1.4;
								font-size: var(--px14);
							}
							.reactionButtons {
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
					font-size: var(--px18);
					font-weight: 400;
					color: var(--gray80);
					line-height: 1.33333;
				}
			}
			.reply {
				padding: var(--px8) var(--px8) var(--px12) var(--px12);
				border-bottom-left-radius: var(--px24);
				border-left: var(--px2) solid transparent;
				border-bottom: var(--px1) solid transparent;
				background:
					linear-gradient(var(--black), var(--black)) padding-box,
					linear-gradient(90deg, var(--gray60) 0%, var(--gray15) 35%, black 70%) border-box;
				.reply {
					background:
						linear-gradient(var(--black), var(--black)) padding-box,
						linear-gradient(90deg, var(--gray60) 0%, var(--gray15) 45%, black 90%) border-box;
					border-bottom-left-radius: var(--px12);
					.commentText {
						margin-bottom: calc(var(--px1) * -4);
					}
				}
			}
		}
	}
	.end {
		display: flex;
		align-items: center;
		justify-content: center;
		height: var(--px48);
	}
	img {
		width: 100%;
		height: auto;
	}
</style>
