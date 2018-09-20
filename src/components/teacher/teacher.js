import React from 'react';
import TeacherInfo from './info/info';
import TeacherLessons from './lesson/lesson';

const Teacher = () => {
	return(
		<main className="container group-page block-container">
			<TeacherInfo/>
			<TeacherLessons/>
		</main>
	);
};

export default Teacher;