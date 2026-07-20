import thumbs from '$lib/assets/thumbs.json';

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
let comments = [[comment1], [comment1, comment2, comment3], [comment2]];

export async function load({ params }) {
	const item = thumbs.items.find((item) => item.id === Number(params.item));

	const post = {
		item: item,
		comments: comments
	};
	return post;
}
