import React, {Component} from 'react';
import {ADD_GROUP, FORM_CLEANER} from "../../../constants";

class GroupForm extends Component {
	render() {
		return(
			<form action="">
				<div className="title">
					{ADD_GROUP}
				</div>
				<div className="form-inputs">
					<input type="text" placeholder="Номер групи"/>
					<select name="" id="">
						<option value="" defaultValue>Програмна інженерія</option>
					</select>
					<select name="" id="">
						<option value="" defaultValue>Голуб Белла Львівна</option>
					</select>
					<input type="number" placeholder="Кількість студентів"/>
					<label htmlFor="isactive" className="active-label">
						<div>
							<input id="isactive" name="isactive" type="checkbox"/>
						</div>
						<div>Активний</div>
					</label>
					<select name="" id="">
						<option value="" defaultValue>Денна</option>
					</select>
					<select name="" id="">
						<option value="" defaultValue>Бакалавр</option>
					</select>
				</div>
				<div className="form-buttons">
					<div className="btn-flex">
						<button type="submit" className="btn">{FORM_CLEANER}</button>
					</div>
					<div className="btn-flex">
						<button type="submit" className="btn">{ADD_GROUP}</button>
					</div>
				</div>
			</form>
		);
	}
}

export default GroupForm;