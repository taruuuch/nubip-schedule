import React, {Component} from 'react';
import {ADD_TEACHER, FORM_CLEANER} from "../../../constants";

export class TeacherForm extends Component {
    render() {
        return(
            <form action="">
                <div className="title">
                    {ADD_TEACHER}
                </div>
                <div className="form-inputs">
                    <input type="text" placeholder="Прізвище"/>
                    <input type="text" placeholder="Ім'я"/>
                    <input type="text" placeholder="По-батькові"/>
                    <label htmlFor="isactive" className="active-label">
                        <div>
                            <input id="isactive" name="isactive" type="checkbox"/>
                        </div>
                        <div>Активний</div>
                    </label>
                    <select name="" id="">
                        <option value="" defaultValue>Кафедра комп'ютерних наук</option>
                    </select>
                    <input type="text" placeholder="Особистий email"/>
                    <input type="text" placeholder="Особистий сайт"/>
                    <select name="" id="">
                        <option value="" defaultValue>Кандидат технічних наук</option>
                    </select>
                    <select name="" id="">
                        <option value="" defaultValue>Доцент</option>
                    </select>
                </div>
                <div className="form-buttons">
                    <div className="btn-flex">
                        <button type="submit" className="btn">{FORM_CLEANER}</button>
                    </div>
                    <div className="btn-flex">
                        <button type="submit" className="btn">{ADD_TEACHER}</button>
                    </div>
                </div>
            </form>
        );
    }
}