import '../style/add.css';
import React, { Component } from 'react';

export class AddForm extends Component {
    render() {
        return (
            <main className="container block-container">
                <div className="add-block block">
                    <form action="">
                        <div className="title">
                            Додати заняття до розкладу
                        </div>
                        <div className="form-inputs">
                            {/*/!*Розклад*!/*/}
                            <select name="" id="">
                                <option value="" defaultValue>Організація баз даних</option>
                            </select>
                            <select name="" id="">
                                <option value="" defaultValue>ПІ-1506</option>
                            </select>
                            <select name="" id="">
                                <option value="" defaultValue>Голуб Белла Львівна</option>
                            </select>
                            <select name="" id="">
                                <option value="" defaultValue>к. 15, ауд. 230</option>
                            </select>
                            <select name="" id="">
                                <option value="" defaultValue>3 пара (11:40 - 13:00)</option>
                            </select>
                            <select name="" id="">
                                <option value="" defaultValue>Вівторок</option>
                            </select>
                            <select name="" id="">
                                <option value="" defaultValue>Вся</option>
                            </select>
                            
                            {/*Навч план*/}
                            {/*<select name="" id="">*/}
                                {/*<option value="" defaultValue>Кафедра комп'ютерних наук</option>*/}
                            {/*</select>*/}
                            {/*<select name="" id="">*/}
                                {/*<option value="" defaultValue>Організація баз даних</option>*/}
                            {/*</select>*/}
                            {/*<input type="number" placeholder="Кількість лекція"/>*/}
                            {/*<input type="number" placeholder="Кількість лабораторних"/>*/}
                            {/*<input type="number" placeholder="Навчальний семестр"/>*/}
                            {/*<select name="" id="">*/}
                                {/*<option value="" defaultValue>Програмна інженерія</option>*/}
                            {/*</select>*/}
                            
                            {/*/!*Пара*!/*/}
                            {/*<input type="text" placeholder="Номер заняття"/>*/}
                            {/*<select name="" id="">*/}
                                {/*<option value="" defaultValue>Лекція</option>*/}
                            {/*</select>*/}
                            
                            {/*/!*Група*!/*/}
                            {/*<input type="text" placeholder="Номер групи"/>*/}
                            {/*<select name="" id="">*/}
                                {/*<option value="" defaultValue>Програмна інженерія</option>*/}
                            {/*</select>*/}
                            {/*<select name="" id="">*/}
                                {/*<option value="" defaultValue>Голуб Белла Львівна</option>*/}
                            {/*</select>*/}
                            {/*<input type="number" placeholder="Кількість студентів"/>*/}
                            {/*<label for="isactive" className="active-label">*/}
                                {/*<div>*/}
                                    {/*<input id="isactive" name="isactive" type="checkbox"/>*/}
                                {/*</div>*/}
                                {/*<div>Активний</div>*/}
                            {/*</label>*/}
                            {/*<select name="" id="">*/}
                                {/*<option value="" defaultValue>Денна</option>*/}
                            {/*</select>*/}
                            {/*<select name="" id="">*/}
                                {/*<option value="" defaultValue>Бакалавр</option>*/}
                            {/*</select>*/}
                            
                            {/*/!*Викладач*!/*/}
                            {/*<input type="text" placeholder="Прізвище"/>*/}
                            {/*<input type="text" placeholder="Ім'я"/>*/}
                            {/*<input type="text" placeholder="По-батькові"/>*/}
                            {/*<label for="isactive" className="active-label">*/}
                                {/*<div>*/}
                                    {/*<input id="isactive" name="isactive" type="checkbox"/>*/}
                                {/*</div>*/}
                                {/*<div>Активний</div>*/}
                            {/*</label>*/}
                            {/*<select name="" id="">*/}
                                {/*<option value="" defaultValue>Кафедра комп'ютерних наук</option>*/}
                            {/*</select>*/}
                            {/*<input type="text" placeholder="Особистий email"/>*/}
                            {/*<input type="text" placeholder="Особистий сайт"/>*/}
                            {/*<select name="" id="">*/}
                                {/*<option value="" defaultValue>Кандидат технічних наук</option>*/}
                            {/*</select>*/}
                            {/*<select name="" id="">*/}
                                {/*<option value="" defaultValue>Доцент</option>*/}
                            {/*</select>*/}
                        </div>
                        <div className="form-buttons">
                            <div className="btn-flex">
                                <button type="submit" className="btn">Очистити</button>
                            </div>
                            <div className="btn-flex">
                                <button type="submit" className="btn">Додати</button>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
        );
    }
}