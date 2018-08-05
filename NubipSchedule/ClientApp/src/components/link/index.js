import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Home from '../../containers/Home';
import Group from '../group/group';
import ApiPage from "../../containers/Api";
import FaqPage from "../../containers/Faq";
import TeacherPage from "../../containers/Teacher";
import LoginPage from "../../containers/Login";
import RequestPage from "../../containers/Request";
import LessonForm from "../../components/form/lesson/lessonform";

class RouteLink extends Component {
	render() {
		return (
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/group/:id' component={Group} />
				<Route exact path='/teacher/:id' component={TeacherPage} />
				<Route exact path='/api' component={ApiPage} />
				<Route exact path='/faq' component={FaqPage} />
				<Route exact path='/login' component={LoginPage} />
				<Route exact path='/add/lesson/' component={LessonForm} />
				<Route exact path='/request' component={RequestPage} />
			</Switch>
		);
	}
}

export default RouteLink;