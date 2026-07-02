import thumbs from '$lib/assets/thumbs.json';

export async function load() {
	return {
		items: thumbs.items ?? []
	};
}
