import './App.css';

import React, {useContext, useEffect, useState} from 'react';
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context";

const App = () => {
	const [isAuth, setIsAuth] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (localStorage.getItem('auth')) {
			setIsAuth(true)
		}
		setIsLoading(false)
	}, []);

	return (
		<div className="App">
			<AuthContext.Provider value={{
				isAuth,
				setIsAuth,
				isLoading,
				setIsLoading,
			}}>
				<AppRouter/>
			</AuthContext.Provider>
		</div>
	);
};

export default App;
