import React, {useContext} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Navbar from "./UI/navbar/Navbar";
import {publicRoutes, privateRoutes} from "../router";
import {AuthContext} from "../context";

const AppRouter = () => {
	const {isAuth, isLoading} = useContext(AuthContext);

	if (isLoading) {
		return <h3>Loading ...</h3>
	}

	return (
		<Router>
			<Navbar/>

			{
				isAuth ?
					<Switch>
						{
							privateRoutes.map(({path, exact, component}) => (
								<Route key={path} path={path} exact={exact} component={component}/>
							))
						}
						<Redirect to="/posts"/>
					</Switch>
					:
					<Switch>
						{
							publicRoutes.map(({path, exact, component}) => (
								<Route key={path} path={path} exact={exact} component={component}/>
							))
						}
						<Redirect to="/login"/>
					</Switch>
			}

		</Router>
	);
};

export default AppRouter;
