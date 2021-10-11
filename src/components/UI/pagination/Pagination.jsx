import React from 'react';
import {usePagination} from "../../../hooks/usePagination";

const Pagination = ({totalPages, currentPage, changePage,}) => {
	const pages = usePagination(totalPages);

	return (
		<div style={{display: 'flex'}}>
			{
				pages.map(p => (
					<div
						onClick={() => changePage(p)}
						className={['page', p === currentPage && 'page--active'].join(' ')}
						key={p}
					>
						{p}
					</div>
				))
			}
		</div>
	);
};

export default Pagination;
