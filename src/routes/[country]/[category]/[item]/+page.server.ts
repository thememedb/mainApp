import { thumbs } from '$lib';

let comment1 = {
	user: {
		id: 321321,
		name: 'Beprisikopūstkyštel',
		avatar: '/userAvatars/1.jpg',
		icon: 'verified'
	},
	comment: 'This is the most cursed thing I have ever ever seen 😂',
	time: new Date(Date.now() - 30 * 1000).toString(),
	rank: 26,
	vote: null
};
let comment2 = {
	user: {
		id: 321321,
		name: 'Beprisikopūstkiškeliaud',
		avatar: '/userAvatars/2.jpg',
		icon: 'starLine'
	},
	comment: 'Rorem ipsum, dolor sit amet. Gaudeamus igitur, nortradamus to chaltur.',
	time: new Date(Date.now() - 120 * 1000).toString(),
	rank: 26,
	vote: null
};
let comment3 = {
	user: {
		id: 321321,
		name: 'Bil 3 hours',
		avatar: '/userAvatars/3.jpg',
		icon: 'starSolid'
	},
	comment: 'GLORIOUS ipsum, dolor sit amet. Gaudeamus igitur, nortradamus to chaltur.',
	time: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
	rank: 26,
	vote: null
};
let comment4 = {
	user: {
		id: 321321,
		name: 'Into 4',
		avatar: '/userAvatars/4.jpg',
		icon: 'donator'
	},
	comment:
		"Lorem Ipsum is simply dummy text of the printing and typedsfgsetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.",
	time: new Date(Date.now() - 30 * 60 * 60 * 1000).toISOString(),
	rank: 26,
	vote: null
};
let comment5 = {
	user: {
		id: 321321,
		name: 'Kopūstas Nr.5',
		avatar: '/userAvatars/5.jpg',
		icon: 'rich'
	},
	comment: 'Rorem ipsum, dolor sit amet. Gaudeamus igitur, nortradamus to chaltur.',
	time: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
	rank: 26,
	vote: null
};
let comment6 = {
	user: {
		id: 321321,
		name: 'Android 17',
		avatar: '/userAvatars/6.png',
		icon: 'coins'
	},
	comment: 'Rorem ipsum, dolor sit amet. Gaudeamus igitur, nortradamus to chaltur.',
	time: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
	rank: 26,
	vote: null
};
let comment7 = {
	user: {
		id: 321321,
		name: 'Android 17',
		avatar: '/userAvatars/7.jpg',
		icon: 'bot'
	},
	comment: 'Rorem ipsum, dolor sit amet. Gaudeamus igitur, nortradamus to chaltur.',
	time: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
	rank: 26,
	vote: null
};
let comment8 = {
	user: {
		id: 321321,
		name: 'Frigid Sexbot Androido',
		avatar: '/userAvatars/2.jpg',
		icon: 'donator'
	},
	comment: 'Rorem ipsum, dolor sit amet. Gaudeamus igitur, nortradamus to chaltur.',
	time: '2025-01-11T23:00:00.000Z',
	rank: 126,
	vote: null
};
let comments = [
	[comment1, comment2, comment3],
	[comment4, comment5, comment6, comment7, comment8]
];

export async function load({ params }) {
	const post = {
		media: thumbs.items.find((item) => item.id === Number(params.item)),
		user: {
			name: 'Beprisikopūstkiškelia',
			avatar: '/userAvatars/3.jpg',
			id: 'asdf6a8sd47f36as5d7f357',
			time: new Date(2026, 6, 3, 1, 30).toString(),
			score: 692
		},
		reactions: [
			{ id: 2, score: '19', emoji: '😁' },
			{ id: 1, score: '20', emoji: '😂' },
			{ id: 3, score: '18', emoji: '🐢' },
			{ id: 4, score: '17', emoji: '🗿' },
			{ id: 5, score: '16', emoji: '🦫' },
			{ id: 6, score: '15', emoji: '🕋' },
			{ id: 7, score: '14', emoji: '☪️' },
			{ id: 8, score: '13', emoji: '🤯' },
			{ id: 9, score: '12', emoji: '🙈' },
			{ id: 10, score: '11', emoji: '🔥' },
			{ id: 11, score: '10', emoji: '😢' },
			{ id: 12, score: '9', emoji: '🤔' },
			{ id: 13, score: '8', emoji: '👍' },
			{ id: 14, score: '7', emoji: '👀' },
			{ id: 15, score: '6', emoji: '💀' },
			{ id: 16, score: '5', emoji: '🥶' },
			{ id: 17, score: '4', emoji: '😴' },
			{ id: 18, score: '3', emoji: '🙌' },
			{ id: 19, score: '2', emoji: '🤝' },
			{ id: 20, score: '1', emoji: '🌟' }
		],
		tags: [
			{
				id: 31365464,
				score: 12,
				text: 'funny'
			},
			{
				id: 31365464,
				score: 11,
				text: 'kvykt'
			},
			{
				id: 31365464,
				score: 10,
				text: 'smiling'
			},
			{
				id: 31365464,
				score: 9,
				text: 'happy'
			},
			{
				id: 31365464,
				score: 8,
				text: 'lol'
			},
			{
				id: 31365464,
				score: 7,
				text: 'katukas'
			},
			{
				id: 31365464,
				score: 6,
				text: '☪️ancer'
			}
		],
		comments: [
			[comment1, comment2, comment3],
			[comment4, comment5, comment6, comment7, comment8]
		]
	};
	return post;
}
