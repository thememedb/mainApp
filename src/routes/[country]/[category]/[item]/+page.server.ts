import thumbs from '$lib/assets/thumbs.json';

export async function load({ params }) {
	const item = thumbs.items.find((item) => item.id === Number(params.item));
	return item;
}
