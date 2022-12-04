import type { PageServerLoad } from './$types';
import { PUBLIC_BASE_URL } from '$env/static/public';
import { marked } from 'marked';
import sanitizeHtml from 'sanitize-html';

interface PostData {
	id: number;
	author: string;
	title: string;
	content: string;
	slug: string;
	image: string;
	tags: string[];
	createAt: string;
	updatedAt: string;
}

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;
	const res = await fetch(`${PUBLIC_BASE_URL}/post/${slug}`);
	const post: PostData = await res.json();

	return {
		post: {
			...post,
			content: sanitizeHtml(marked(post.content))
		}
	};
};
