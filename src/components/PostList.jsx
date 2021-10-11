import React from 'react';
import PostItem from "./PostItem";
import {
	CSSTransition,
	TransitionGroup,
} from 'react-transition-group';

const PostList = ({posts, removePost}) => {
	if (!posts.length) {
		return <h3>There are no more posts!!!</h3>
	}
	return (
		<div>
			<h1>Posts list</h1>
			<TransitionGroup className="posts">
				{
					posts.map(post => (
						<CSSTransition
							key={post.id}
							timeout={500}
							classNames="post"
						>
							<PostItem removePost={removePost} post={post} />
						</CSSTransition>
					))
				}
			</TransitionGroup>
		</div>
	);
};

export default PostList;
