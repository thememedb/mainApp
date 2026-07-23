import { thumbs } from '$lib';

let comment1 = {
	user: {
		id: 321321,
		name: 'Beprisikopūstkiškeliau1',
		avatar: '/userAvatars/1.jpg',
		icon: 'coins'
	},
	comment: 'Rorem ipsum, dolor sit amet. Gaudeamus igitur, nortradamus to chaltur.',
	time: new Date(Date.now() - 30 * 1000).toString(),
	rank: 26,
	vote: null
};
let comment2 = {
	user: {
		id: 321321,
		name: 'Your mom 2',
		avatar: '/userAvatars/2.jpg',
		icon: 'starSolid'
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
		icon: 'verified'
	},
	comment: 'Rorem ipsum, dolor sit amet. Gaudeamus igitur, nortradamus to chaltur.',
	time: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
	rank: 26,
	vote: null
};
let comment4 = {
	user: {
		id: 321321,
		name: 'Into 4',
		avatar: '/userAvatars/4.jpg',
		icon: 'verified'
	},
	comment: 'Rorem ipsum, dolor sit amet. Gaudeamus igitur, nortradamus to chaltur.',
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
		name: 'Šyška 6',
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
		name: 'Frigid Sexbot Android 18',
		avatar: '/userAvatars/2.jpg',
		icon: 'bot'
	},
	comment: 'Rorem ipsum, dolor sit amet. Gaudeamus igitur, nortradamus to chaltur.',
	time: "2026-01-11T23:00:00.000Z",
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
			name: 'Beprisikopūstkiškeliaud',
			avatar: '/userAvatars/3.jpg',
			id: 'asdf6a8sd47f36as5d7f357',
			time: new Date(2026, 6, 3, 1, 30).toString(),
			score: 692
		},
		reactions: {},
		tags: [],
		comments: comments
	};
	return post;
}
