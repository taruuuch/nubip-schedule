import React from 'react';
import { Switch, Route } from "react-router-dom";
import Dashboard from "../../components/admin/dashboard";
import RequestPage from "../../containers/request/request";
import LessonForm from "../form/lesson/lessonform";

const DashboardLink = () => (
	<Switch>
		<Route exact path='/dashboard' component={Dashboard} />
		<Route path='/dashboard/add/lesson/' component={LessonForm} />
		<Route path='/dashboard/request' component={RequestPage} />
	</Switch>
);

export default DashboardLink;