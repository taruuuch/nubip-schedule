import React, { Component } from 'C:/Users/taruuuch/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';
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