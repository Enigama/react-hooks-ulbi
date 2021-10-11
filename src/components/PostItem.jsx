import React from 'react';
import MyButton from "./UI/button/MyButton";
import {useHistory} from 'react-router-dom'

const PostItem = ({post: {id, title, body}, removePost}) => {
	const router = useHistory();

	return (
		<div style={
			{
				marginBottom: '10px',
				padding: '25px',
				border: '1px solid green'
			}
		}>
			<strong>{id}. {title}</strong>
			<div>{body}</div>
			<div style={{display: 'flex', marginTop: '10px'}}>
				<MyButton onClick={() => router.push(`/posts/${id}`)}>Go to post</MyButton>
				<MyButton onClick={() => removePost(id)}>Delete</MyButton>
			</div>
		</div>
	);
};

export default PostItem;
