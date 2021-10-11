import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/Postsservice";
import Comments from "../components/Comments";

const PostPage = () => {
	const params = useParams();
	const [post, setPost] = useState(null);
	const [comments, setComments] = useState([]);
	const [fetchPost, isLoading, error] = useFetching(async (id) => {
		const response = await PostService.getById(id);
		setPost(response.data)
	});
	const [fetchComments, isLoadingComments, errorComments] = useFetching(async (id) => {
		const response = await PostService.getCommentsByPostId(id);
		setComments(response.data)
	});

	useEffect(() => {
		fetchPost(params.id)
	}, []);
	useEffect(() => {
		post && fetchComments(post.id)
	}, [post]);

	if (error) {
		return <h1>{error}</h1>
	}
	return (
		<div>
			<h1>Welcome post page</h1>
			{isLoading && <h1>Loading...</h1>}
			{
				post &&
				<div>
					<strong>{post.id} - {post.title}</strong>
					<div>{post.body}</div>
				</div>
			}
			{
				comments.length ? <Comments comments={comments}/> : null
			}
		</div>
	);
};

export default PostPage;
