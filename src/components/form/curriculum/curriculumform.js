import React, {Component} from 'react';
import {ADD_CURRICULUM, FORM_CLEANER} from "../../../constants";

class CurriculumForm extends Component {
	render() {
		return(
			<form action="">
				<div className="title">
					{ADD_CURRICULUM}
				</div>
				<div className="form-inputs">
					<select name="" id="">
						<option value="" defaultValue>Кафедра комп'ютерних наук</option>
					</select>
					<select name="" id="">
						<option value="" defaultValue>Організація баз даних</option>
					</select>
					<input type="number" placeholder="Кількість лекція"/>
					<input type="number" placeholder="Кількість лабораторних"/>
					<input type="number" placeholder="Навчальний семестр"/>
					<select name="" id="">
						<option value="" defaultValue>Програмна інженерія</option>
					</select>
				</div>
				<div className="form-buttons">
					<div className="btn-flex">
						<button type="submit" className="btn">{FORM_CLEANER}</button>
					</div>
					<div className="btn-flex">
						<button type="submit" className="btn">{ADD_CURRICULUM}</button>
					</div>
				</div>
			</form>
		);
	}
}

export default CurriculumForm;