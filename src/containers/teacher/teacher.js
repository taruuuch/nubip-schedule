import React from 'react';
import Teacher from '../../components/teacher/teacher';

const TeacherPage = props => {
	return(
		<Teacher id={parseInt(props.match.params.id, 10)} />
	);
};

export default TeacherPage;