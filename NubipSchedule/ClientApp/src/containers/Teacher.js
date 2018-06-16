import React, {Component} from 'react';
import {TeacherInfo} from "../components/teacher/info/info";
import {TeacherLessons} from "../components/teacher/lesson/lesson";

export class Teacher extends Component {
	render() {
		return(
            <main className="container group-page block-container">
                <TeacherInfo/>
                <TeacherLessons/>
            </main>
		);
	}
}