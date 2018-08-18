import React from 'react';
import { Switch, Route } from "react-router-dom";
import TeacherPage from "../../containers/Teacher";

const TeacherLink = () => {
	return(
		<Switch>
			<Route exact path='/teacher' component={TeacherPage} />
      <Route path='/teacher/:id' component={TeacherPage} />
		</Switch>
	);
};

export default TeacherLink;