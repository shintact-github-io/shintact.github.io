// @ts-nocheck
import { getEntries } from '$utils/entries.js';

const authors = getEntries('authors');

/** */
export async function load() {
	return {
		// eslint-disable-next-line no-unused-vars
		authors: authors
	};
}
