import type { PageServerLoad } from './$types';
import { PUBLIC_BASE_URL } from '$env/static/public';

interface PostData {
	id: number;
	author: string;
	title: string;
	content: string;
	slug: string;
	image?: string;
	tags: string[];
	createAt: string;
	updatedAt: string;
}

export const load: PageServerLoad = async ({ url }) => {
	const page = url.searchParams.get('page');
	const pageNumber = page ? (+page > 0 ? +page : 1) : 1;
	const limit = 10;
	const offset = (pageNumber - 1) * limit;
	const res = await fetch(`${PUBLIC_BASE_URL}/post?limit=${limit}&offset=${offset}`);
	const posts: PostData[] = await res.json();

	return {
		posts,
		pageNumber
	};
};
