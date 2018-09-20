import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from '../../containers/home/home';
import ApiPage from "../../containers/api/api";
import FaqPage from "../../containers/faq/faq";
import LoginPage from "../../containers/login/login";
import DashboardLink from "./dashboard";
import TeacherLink from "./teacher";
import GroupLink from "./group";

const RouteLink = () => (
	<Switch>
		<Route exact path='/' component={Home} />
		<Route path='/api' component={ApiPage} />
		<Route path='/faq' component={FaqPage} />
		<Route path='/login' component={LoginPage} />
		<Route path='/group' component={GroupLink} />
		<Route path='/teacher' component={TeacherLink} />
		<Route path='/dashboard' component={DashboardLink} />
	</Switch>
);

export default RouteLink;