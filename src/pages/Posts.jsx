import React, {useEffect, useRef, useState} from 'react';
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/MyModal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import {useSortedAndSearchedPosts} from "../hooks/usePosts";
import PostsService from "../API/Postsservice";
import {useFetching} from "../hooks/useFetching";
import {getPagesCount} from "../components/utils/pages";
import Pagination from "../components/UI/pagination/Pagination";

const Posts = () => {
	const [posts, setPosts] = useState([]);
	const [filter, setFilter] = useState({
		sort: '',
		query: ''
	});
	const [modal, setModal] = useState(false);
	const sortedAndSearchedPosts = useSortedAndSearchedPosts(posts, filter.sort, filter.query);
	const [totalPages, setTotalPages] = useState(0);
	const [page, setPage] = useState(1);
	const [limit, setLimit] = useState(10);
	const [fetchPosts, isPostsLoading, error] = useFetching(async (limit, page) => {
		const response = await PostsService.getAll(limit, page);
		const totalCount = response.headers['x-total-count'];
		setTotalPages(getPagesCount(totalCount, limit));
		setPosts([...posts, ...response.data])
	});
	const lastElement = useRef();
	const observer = useRef();

	const createPost = (newPost) => {
		setPosts([
			...posts,
			newPost
		]);
		setModal(false)
	};
	const removePost = (id) => {
		setPosts(posts.filter(item => item.id !== id))
	};
	const changePage = (page) => {
		setPage(page);
		fetchPosts(limit, page);
	};

	useEffect(() => {
		fetchPosts(limit, page);
	}, [page, limit]);

	useEffect(() => {
		if (isPostsLoading) {
			return true
		}
		if (observer.current) observer.current.disconnect();
		const handleIntersect = (entries) => {
			if (entries[0].isIntersecting && page < totalPages) {
				setPage(page+1)
			}
		};
		observer.current = new IntersectionObserver(handleIntersect);
		observer.current.observe(lastElement.current);
	}, [isPostsLoading]);

	return (
		<div className="Post">
			<MyButton onClick={() => setModal(!modal)}>Create post</MyButton>
			<MyModal
				visible={modal}
				setVisible={setModal}
			>
				<PostForm createPost={createPost}/>
			</MyModal>
			<PostFilter
				filter={filter}
				setFilter={setFilter}
			/>
			{
				error && <h1>Error {error}</h1>
			}
			{
				isPostsLoading && <h1>Loading...</h1>
			}
			<PostList posts={sortedAndSearchedPosts} removePost={removePost}/>
			<div ref={lastElement} style={{height: '20px', background: 'green'}} />
			<Pagination
				totalPages={totalPages}
				currentPage={page}
				changePage={changePage}
			/>
		</div>
	);
};

export default Posts;
