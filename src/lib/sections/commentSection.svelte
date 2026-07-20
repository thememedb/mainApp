<script>
	import { Icon, Comment, StatusIcon } from '$lib';
	let comment = {
		user: {
			id: 321321,
			name: 'user1',
			avatar: '/userAvatars/4.jpg',
			icon: 'bot'
		},
		comment: 'Rorem ipsum, dolor sit amet. Gaudeamus igitur, nortradamus to chaltur.',
		time: '2min ago',
		rank: 26,
		vote: null
	};
	let comment1 = {
		user: {
			id: 321321,
			name: 'FermBoy1',
			avatar: '/userAvatars/1.jpg',
			icon: 'coins'
		},
		comment: 'Rorem ipsum, dolor sit amet. Gaudeamus igitur, nortradamus to chaltur.',
		time: '2min ago',
		rank: 26,
		vote: null
	};
	let comment2 = {
		user: {
			id: 321321,
			name: 'LameO2',
			avatar: '/userAvatars/2.jpg',
			icon: 'starSolid'
		},
		comment: 'Rorem ipsum, dolor sit amet. Gaudeamus igitur, nortradamus to chaltur.',
		time: '2min ago',
		rank: 26,
		vote: null
	};
	let comment3 = {
		user: {
			id: 321321,
			name: 'Into 3',
			avatar: '/userAvatars/3.jpg',
			icon: 'verified'
		},
		comment: 'Rorem ipsum, dolor sit amet. Gaudeamus igitur, nortradamus to chaltur.',
		time: '2min ago',
		rank: 26,
		vote: null
	};
	let threads = [[comment1], [comment1, comment2, comment3], [comment2]];
</script>

<div class="comments container">
	{#each threads as comments}
		<div class="threadContainer">
			{#each comments as comment}
				<Comment {comment} />
			{/each}
		</div>
	{/each}
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
		padding: var(--px12) 0 var(--px8) var(--px12);
		border-top-left-radius: calc(var(--px1) * 36);
		border-bottom-left-radius: var(--px16);
		border-left: calc(var(--px1) * 2) solid transparent;
		border-bottom: calc(var(--px1) * 2) solid transparent;
		background:
			linear-gradient(var(--black), var(--black)) padding-box,
			linear-gradient(90deg, var(--gray60) 0%, var(--gray15) 35%, black 70%) border-box;
	}
</style>
