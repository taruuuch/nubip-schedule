import React from 'react';
import { Switch, Route } from "react-router-dom";
import Group from '../group/group';

const GroupLink = () => {
	return(
		<Switch>
      <Route exact path='/group' component={Group} />
			<Route path='/group/:id' component={Group} />
		</Switch>
	);
};

export default GroupLink;