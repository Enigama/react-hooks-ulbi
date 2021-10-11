import {useMemo} from "react";

export const usePagination = (count) => useMemo(() => {
	const pages = [];
		for (let i = 1; i <= count; i++) {
			pages.push(i)
		}
		return pages
}, [count]);
