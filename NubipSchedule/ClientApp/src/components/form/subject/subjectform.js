import React, {Component} from 'react';
import {ADD_SUBJECT, FORM_CLEANER} from "../../../constants";

export class SubjectForm extends Component {
    render() {
        return(
            <form action="">
                <div className="title">
                    {ADD_SUBJECT}
                </div>
                <div className="form-inputs">
                    <input type="text" placeholder="Номер заняття"/>
                    <select name="" id="">
                        <option value="" defaultValue>Лекція</option>
                    </select>
                </div>
                <div className="form-buttons">
                    <div className="btn-flex">
                        <button type="submit" className="btn">{FORM_CLEANER}</button>
                    </div>
                    <div className="btn-flex">
                        <button type="submit" className="btn">{ADD_SUBJECT}</button>
                    </div>
                </div>
            </form>
        );
    }
}