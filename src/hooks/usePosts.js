import {useMemo} from "react";

export const useSortedPosts = (posts, sort) => {
	return useMemo(() => {
		return sort ? ([...posts].sort((a, b) => a[sort].localeCompare(b[sort]))) : posts
	}, [sort, posts]);
};

export const useSortedAndSearchedPosts = (posts, sort, query) => {
	const sortedPosts = useSortedPosts(posts, sort);
	return useMemo(() => {
		return sortedPosts.filter(({title, body}) => title.toLowerCase().includes(query) || body.toLowerCase().includes(query))
	}, [query, sortedPosts])
};
