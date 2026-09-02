import { thumbs } from '$lib';

export async function load() {
	return {
		items: thumbs.items
	};
}
