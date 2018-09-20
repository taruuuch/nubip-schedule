import './add.css';
import React from 'react';
import LessonForm from '../../components/form/lesson/lessonform'

const AddPage = () => {
	return (
		<main className="container block-container">
			<div className="add-block block">
				<LessonForm/>
			</div>
		</main>
	);
};

export default AddPage;