import React from 'react';
import { Switch, Route } from "react-router-dom";
import GroupPage from '../../containers/group/group';

const GroupLink = () => (
	<Switch>
		<Route exact path='/group' component={GroupPage} />
		<Route path='/group/:id' component={GroupPage} />
	</Switch>
);

export default GroupLink;