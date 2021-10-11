import React, {useContext, useEffect, useState} from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import {AuthContext} from "../context";

const Login = () => {
	const {isAuth, setIsAuth} = useContext(AuthContext);

	const login = event => {
		event.preventDefault();
		setIsAuth(true);
		localStorage.setItem('auth', 'true');
	};

	return (
		<form onSubmit={login}>
			<h1>Login page</h1>
			<MyInput placeholder="Login" type="text"/>
			<MyInput placeholder="Password" type="password"/>
			<MyButton>Login</MyButton>
		</form>
	);
};

export default Login;
