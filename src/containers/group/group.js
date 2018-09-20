import React from 'react';
import Group from "../../components/group/group";

const GroupPage = props => {
	return(
		<Group id={parseInt(props.match.params.id, 10)} />
	);
};

export default GroupPage;