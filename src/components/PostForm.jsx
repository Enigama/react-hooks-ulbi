import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({createPost}) => {
	const [post, setPost] = useState({
		title: '',
		content: '',
	});
	const addNewPost = (e) => {
		e.preventDefault();
		const newPost = {
			id: Date.now(),
		...post
		};
		createPost(newPost);
		setPost({
			title: '',
			content: ''
		})
	};
	return (
		<form action="">
			<MyInput type="text" placeholder='Post name' value={post.title} onInput={(e) => setPost({...post, title: e.target.value})}/>
			<MyInput type="text" placeholder='Post content' value={post.content} onInput={(e) => setPost({...post, content: e.target.value})}/>
			<MyButton  onClick={addNewPost}>Add post</MyButton>
		</form>
	);
};

export default PostForm;
