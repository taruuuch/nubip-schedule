import React from 'react';
import { Switch, Route } from "react-router-dom";
import RequestPage from "../../containers/Request";
import LessonForm from "../form/lesson/lessonform";

const AdminLink = () => {
	return(
		<Switch>
			<Route exact path='/admin' component={Admin} />
			<Route path='/admin/add/lesson/' component={LessonForm} />
			<Route path='/admin/request' component={RequestPage} />
		</Switch>
	);
};

export default AdminLink;