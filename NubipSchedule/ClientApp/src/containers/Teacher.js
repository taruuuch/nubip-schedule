import React, { Component } from 'react';
import TeacherInfo from '../components/teacher/info/info';
import TeacherLessons from '../components/teacher/lesson/lesson';

class TeacherPage extends Component {
	render() {
		return(
			<main className="container group-page block-container">
				<TeacherInfo/>
				<TeacherLessons/>
			</main>
		);
	}
}

export default TeacherPage;