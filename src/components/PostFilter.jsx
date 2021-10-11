import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter: {query, sort}, setFilter}) => {
	return (
		<div>
			<MyInput
				placeholder="Search post"
				value={query}
				onChange={(e) => setFilter({sort, query: e.target.value})}
			/>
			<MySelect
				value={sort}
				onChange={(sortText) => setFilter({sort: sortText, query})}
				defaultValue="Sort"
				options={[
					{
						value: 'title',
						name: 'Sort on title'
					},
					{
						value: 'body',
						name: 'Sort on content'
					}
				]}
			/>
		</div>
	);
};

export default PostFilter;
