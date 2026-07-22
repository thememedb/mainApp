import { thumbs } from '$lib';

let comment1 = {
	user: {
		id: 321321,
		name: 'Beprisikopūstkiškeliaud',
		avatar: '/userAvatars/1.jpg',
		icon: 'coins'
	},
	comment: 'Rorem ipsum, dolor sit amet. Gaudeamus igitur, nortradamus to chaltur.',
	time: new Date(Date.now() - 10 * 60 * 1000).toISOString(),
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
	time: new Date(Date.now() - 10 * 60 * 60 * 1000).toISOString(),
	rank: 26,
	vote: null
};
let comment3 = {
	user: {
		id: 321321,
		name: 'Bil',
		avatar: '/userAvatars/3.jpg',
		icon: 'verified'
	},
	comment: 'Rorem ipsum, dolor sit amet. Gaudeamus igitur, nortradamus to chaltur.',
	time: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
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
	time: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(),
	rank: 26,
	vote: null
};
let comment5 = {
	user: {
		id: 321321,
		name: 'Beprisikopūstkiškeliaud',
		avatar: '/userAvatars/5.jpg',
		icon: 'rich'
	},
	comment: 'Rorem ipsum, dolor sit amet. Gaudeamus igitur, nortradamus to chaltur.',
	time: new Date(Date.now() - 382 * 24 * 60 * 60 * 1000).toISOString(),
	rank: 26,
	vote: null
};
let comments = [[comment1], [comment1, comment2, comment3], [comment4, comment5, comment2]];

export async function load({ params }) {
	const post = {
		media: thumbs.items.find((item) => item.id === Number(params.item)),
		user: {
			name: 'Beprisikopūstkiškeliaud',
			avatar: '/userAvatars/3.jpg',
			id: 'asdf6a8sd47f36as5d7f357',
			time: new Date(Date.now() - 10 * 60 * 60 * 1000).toISOString(),
			score: 692
		},
		reactions: {},
		tags: [],
		comments: comments
	};
	return post;
}
