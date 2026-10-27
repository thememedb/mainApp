export function load({ params }) {
	let { user } = params;
	return {
		avatar: `/userAvatars/${Math.floor(Math.random() * 6) + 1}.jpg`,
		icon: 'verified',
		name: user,
		aura: Math.floor(Math.random() * 100) + 1,
		credits: Math.floor(Math.random() * 1000) + 1
	};
}
