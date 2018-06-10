import React, { Component } from 'react';
import {Link} from "react-router-dom";

export class Teacher extends Component {
	displayName = Teacher.name;

	render() {
		return(
            <main className="container group-page block-container">
                <div className="block group-title">Розклад викладача "Голуб Белла Львівна"</div>
                <div className="block group-info">
                    <p>
                        <span className="info-title">Кафедра: </span>
                        <span className="info-description">Комп'ютерних наук</span>
                    </p>
                    <p>
                        <span className="info-title">Вчена ступінь: </span>
                        <span className="info-description">Кандидат технічних наук, доцент</span>
                    </p>
                    <p>
                        <span className="info-title">Email: </span>
                        <span className="info-description">test@gmail.com</span>
                    </p>
                    <p>
                        <span className="info-title">Сайт: </span>
                        <span className="info-description">test.com</span>
                    </p>
                </div>
                <div className="block group-schedule">
                    <table>
                        <thead className="header-of-schedule">
                        <tr>
                            <th>День</th>
                            <th>Пара</th>
                            <th>1-ша підгрупа</th>
                            <th>2-га підгрупа</th>
                        </tr>
                        </thead>
                        <tbody>
                        {/*Понеділок*/}
                        <tr>
                            <td rowSpan="2" className="day">Понеділок</td>
                            <td className="lesson-number">4</td>
                            <td colSpan="2" className="lesson-active">
                                <p className="lesson-title">Методи об'єктно-орієнтованого проектування програмних систем</p>
                                <p className="lesson-teacher">
                                    <Link to="/teacher">доцент Голуб Б. Л.</Link>
                                </p>
                                <p className="lesson-location">
                                    <Link to="https://www.google.com/maps/@50.3813495,30.4955044,18.5z" target="_blank">
                                        15 н.к., ауд. 213, лекція/лабораторна
                                    </Link>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td className="lesson-number">5</td>
                            <td colSpan="2">
                                <p className="lesson-title">Моделювювання програмного забезпечення</p>
                                <p className="lesson-teacher">
                                    <Link to="/teacher">доцент Голуб Б. Л.</Link>
                                </p>
                                <p className="lesson-location">
                                    <Link to="https://www.google.com/maps/@50.3813495,30.4955044,18.5z" target="_blank">
                                        15 н.к., ауд. 214, лекція
                                    </Link>
                                </p>
                            </td>
                        </tr>
                        {/*Вівторок*/}
                        <tr>
                            <td rowSpan="2" className="day">Вівторок</td>
                            <td className="lesson-number">1</td>
                            <td colSpan="2">
                                <p className="lesson-title">Професійна практика</p>
                                <p className="lesson-teacher">
                                    <Link to="/teacher">доцент Голуб Б. Л.</Link>
                                </p>
                                <p className="lesson-location">
                                    <Link to="https://www.google.com/maps/@50.3813495,30.4955044,18.5z" target="_blank">
                                        15 н.к., ауд. 213, лабораторна
                                    </Link>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td className="lesson-number">2</td>
                            <td colSpan="2">
                                <p className="lesson-title">Професійна практика</p>
                                <p className="lesson-teacher">
                                    <Link to="/teacher">доцент Голуб Б. Л.</Link>
                                </p>
                                <p className="lesson-location">
                                    <Link to="https://www.google.com/maps/@50.3813495,30.4955044,18.5z" target="_blank">
                                        15 н.к., ауд. 214, лекція
                                    </Link>
                                </p>
                            </td>
                        </tr>
                        {/*Середа*/}
                        <tr>
                            <td rowSpan="4" className="day">Середа</td>
                            <td className="lesson-number">1</td>
                            <td colSpan="2">
                                <p className="lesson-title">Емпіричні методи</p>
                                <p className="lesson-teacher">
                                    <Link to="/teacher">доцент Голуб Б. Л.</Link>
                                </p>
                                <p className="lesson-location">
                                    <Link to="https://www.google.com/maps/@50.3813495,30.4955044,18.5z" target="_blank">
                                        15 н.к., ауд. 224, лабораторна
                                    </Link>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td className="lesson-number">2</td>
                            <td colSpan="2">
                                <p className="lesson-title">Емпіричні методи</p>
                                <p className="lesson-teacher">
                                    <Link to="/teacher">доцент Голуб Б. Л.</Link>
                                </p>
                                <p className="lesson-location">
                                    <Link to="https://www.google.com/maps/@50.3813495,30.4955044,18.5z" target="_blank">
                                        15 н.к., ауд. 230, лекція
                                    </Link>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td className="lesson-number">3</td>
                            <td colSpan="2">
                                <p className="lesson-title">Архітектура та проектування ПЗ</p>
                                <p className="lesson-teacher">
                                    <Link to="/teacher">доцент Голуб Б. Л.</Link>
                                </p>
                                <p className="lesson-location">
                                    <Link to="https://www.google.com/maps/@50.3813495,30.4955044,18.5z" target="_blank">
                                        15 н.к., ауд. 206, лабораторна
                                    </Link>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td className="lesson-number">4</td>
                            <td colSpan="2">
                                <p className="lesson-title">Архітектура та проектування ПЗ</p>
                                <p className="lesson-teacher">
                                    <Link to="/teacher">доцент Голуб Б. Л.</Link>
                                </p>
                                <p className="lesson-location">
                                    <Link to="https://www.google.com/maps/@50.3813495,30.4955044,18.5z" target="_blank">
                                        11 н.к., ауд. 355, лекція
                                    </Link>
                                </p>
                            </td>
                        </tr>
                        {/*Четверг*/}
                        <tr>
                            <td rowSpan="2" className="day">Четверг</td>
                            <td className="lesson-number">4</td>
                            <td colSpan="2">
                                <p className="lesson-title">Технології розподіленого програмування</p>
                                <p className="lesson-teacher">
                                    <Link to="/teacher">доцент Голуб Б. Л.</Link>
                                </p>
                                <p className="lesson-location">
                                    <Link to="https://www.google.com/maps/@50.3813495,30.4955044,18.5z" target="_blank">
                                        15 н.к., ауд. 213, лекція/лабораторна
                                    </Link>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td className="lesson-number">5</td>
                            <td colSpan="2">
                                <p className="lesson-title">Проектний практикум</p>
                                <p className="lesson-teacher">
                                    <Link to="/teacher">доцент Голуб Б. Л.</Link>
                                </p>
                                <p className="lesson-location">
                                    <Link to="https://www.google.com/maps/@50.3813495,30.4955044,18.5z" target="_blank">
                                        15 н.к., ауд. 213, лекція/лабораторна
                                    </Link>
                                </p>
                            </td>
                        </tr>
                        {/*Пятниця*/}
                        <tr>
                            <td rowSpan="2" className="day">Пятниця</td>
                            <td className="lesson-number">1</td>
                            <td colSpan="2">
                                <p className="lesson-title">Економіка програмного забезпечення</p>
                                <p className="lesson-teacher">
                                    <Link to="/teacher">доцент Голуб Б. Л.</Link>
                                </p>
                                <p className="lesson-location">
                                    <Link to="https://www.google.com/maps/@50.3813495,30.4955044,18.5z" target="_blank">
                                        15 н.к., ауд. 206, лабораторна
                                    </Link>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td className="lesson-number">2</td>
                            <td colSpan="2">
                                <p className="lesson-title">Економіка програмного забезпечення</p>
                                <p className="lesson-teacher">
                                    <Link to="/teacher">доцент Голуб Б. Л.</Link>
                                </p>
                                <p className="lesson-location">
                                    <Link to="https://www.google.com/maps/@50.3813495,30.4955044,18.5z" target="_blank">
                                        10 н.к., ауд. 513, лекція
                                    </Link>
                                </p>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </main>
		);
	}
}