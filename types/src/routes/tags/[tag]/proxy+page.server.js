// @ts-nocheck
import { error } from '@sveltejs/kit';
import { slug } from 'github-slugger';
import { getEntries } from '$utils/entries.js';

function slugsArray(tags) {
	return tags?.map((t) => slug(t)) || [];
}

/** @param {Parameters<import('./$types').PageServerLoad>[0]} event */
export async function load({ params }) {
	const { tag } = params;
	const posts = getEntries('posts');
	const filteredPosts = posts.filter((p) => slugsArray(p.tags).includes(tag));

	if (!filteredPosts) {
		throw error(404, 'No post found');
	}

	return {
		// eslint-disable-next-line no-unused-vars
		tag: tag,
		posts: filteredPosts
	};
}
