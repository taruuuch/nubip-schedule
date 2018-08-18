import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from '../../containers/home/Home';
import Group from '../group/group';
import ApiPage from "../../containers/Api";
import FaqPage from "../../containers/Faq";
import TeacherPage from "../../containers/Teacher";
import LoginPage from "../../containers/Login";
import RequestPage from "../../containers/Request";
import LessonForm from "../form/lesson/lessonform";

const RouteLink = () => {
	return(
		<Switch>
			<Route exact path='/' component={Home} />
			<Route path='/api' component={ApiPage} />
			<Route path='/faq' component={FaqPage} />
			<Route path='/login' component={LoginPage} />
			<Route path='/group/:id' component={Group} />
			<Route path='/teacher/:id' component={TeacherPage} />
			{/* <Route path='/admin' component={Admin} /> */}
			<Route path='/admin/add/lesson/' component={LessonForm} />
			<Route path='/admin/request' component={RequestPage} />
		</Switch>
	);
};

export default RouteLink;