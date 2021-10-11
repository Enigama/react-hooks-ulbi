import About from "../pages/About";
import Posts from "../pages/Posts";
import PostPage from "../pages/PostPage";
import Login from "../pages/Login";

export const privateRoutes = [
	{path: '/about', exact: true, component: About},
	{path: '/posts', exact: true, component: Posts},
	{path: '/posts/:id', exact: true, component: PostPage},
];

export const publicRoutes = [
	{path: '/login', exact: true, component: Login},
];
