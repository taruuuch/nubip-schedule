import './group.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const renderLesson = (lessonOfDay) => {
    let data = lessonOfDay.map( (data, index) => {
        return (
            <tr>
                <td rowSpan="1" className="day">
                    {(() => {
                        switch (data.weekDay) {
                            case "1":   return "Понеділок";
                            case "2":   return "Вівторок";
                            case "3":   return "Середа";
                            case "4":   return "Четверг";
                            case "5":   return "П'ятниця";
                            default:    return "Понеділок";
                        }
                    })()}
                </td>
                <td className="lesson-number">
                    {data.subjectNumber}
                </td>
                <td colSpan="2">
                    <p className="lesson-title">
                        {data.subjectTitle}
                    </p>
                    <p className="lesson-teacher">
                        <Link to={"/teacher/" + data.teacherId}>
                            {data.teacherAcademic} {data.teacherLastname} {data.teacherName} {data.teacherMiddlename}
                        </Link>
                    </p>
                    <p className="lesson-location">
                        <a href={"https://www.google.com/maps/@" + data.buildingLat + "," + data.buildingLong + ",18z"} target="_blank">
                            {data.building} н.к., ауд. {data.auditorium}, {data.subjectType}
                        </a>
                    </p>
                </td>
            </tr>
        );
    });

    return(
        data
    );
};

const renderGroupInfo = (group) => {
    let data = group.map( (data, index) => {
        return (
            <div className="block group-info">
                <p>
                    <span className="info-title">Група: </span>
                    <span className="info-description">{data.title}</span>
                </p>
                <p>
                    <span className="info-title">Факультет: </span>
                    <span className="info-description">{data.faculty}</span>
                </p>

                <p>
                    <span className="info-title">Спеціальність: </span>
                    <span className="info-description">{data.speciality}</span>
                </p>

                <p>
                    <span className="info-title">Освітній рівень: </span>
                    <span className="info-description">{data.educationLevel}</span>
                </p>

                <p>
                    <span className="info-title">Форма навчання: </span>
                    <span className="info-description">{data.educationForm}</span>
                </p>

                <p>
                    <span className="info-title">Кількість студентів: </span>
                    <span className="info-description">{data.students}</span>
                </p>
            </div>
        );
    });

    return(
        data
    );
};

export class Group extends Component {
    constructor() {
        super();

        this.state = {
            lesson: [],
            groupInfo: [],
        };
    }

    componentWillMount() {
        fetch('/api/lesson/' + parseInt(this.props.match.params.id, 10))
            .then( result => result.json() )
            .then( lesson => this.setState({lesson}) );

        fetch('/api/group/' + parseInt(this.props.match.params.id, 10))
            .then( result => result.json() )
            .then( groupInfo => this.setState({groupInfo}) );
    }

    render() {
        return(
            <main className="container group-page block-container">
                <div className="block group-title">Розклад групи</div>
                {renderGroupInfo(this.state.groupInfo)}
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
                        {renderLesson(this.state.lesson)}
                        </tbody>
                    </table>
                </div>
            </main>
        );
    }
}