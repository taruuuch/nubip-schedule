import React from 'react';
import { Switch, Route } from "react-router-dom";
import TeacherPage from "../../containers/teacher/teacher";

const TeacherLink = () => (
	<Switch>
		<Route exact path='/teacher' component={TeacherPage} />
		<Route path='/teacher/:id' component={TeacherPage} />
	</Switch>
);

export default TeacherLink;