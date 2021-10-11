import React, {useContext} from 'react';
import cl from './Navbar.module.css';
import {Link} from "react-router-dom";
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context";

const Navbar = () => {
	const {isAuth, setIsAuth} = useContext(AuthContext);
	const logout = () => {
		setIsAuth(false);
		localStorage.removeItem('auth');
	};

	return (
		<div className={cl.Navbar}>
			{isAuth ? <MyButton onClick={logout}>Log out</MyButton> : null}
			<Link className={cl.NavbarItem} to="/about">About</Link>
			<Link className={cl.NavbarItem} to="/posts">Posts</Link>
		</div>
	);
};

export default Navbar;
