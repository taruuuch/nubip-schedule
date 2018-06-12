import '../style/group.css';
import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class Lesson extends Component {
    constructor() {
        super();

        this.state = {
            lessons: [],
        };
    }

    componentWillMount() {
        fetch('/api/lesson/' + parseInt(this.props.match.params.id, 10))
            .then(res => res.json())
            .then(lessons => this.setState({lessons}));
    }
    
    render() {
        return(
            <tr>
                {/*<td rowSpan="2" className="day">Понеділок</td>*/}
                {/*<td className="lesson-number">{lessons.subjectNumber}</td>*/}
                {/*<td colSpan="2">*/}
                    {/*<p className="lesson-title">{item.subjectTitle}</p>*/}
                    {/*<p className="lesson-teacher">*/}
                        {/*<Link to="/teacher">{item.teacherAcademic} {item.teacherLastname} {item.teacherName} {item.teacherMiddlename}</Link>*/}
                    {/*</p>*/}
                    {/*<p className="lesson-location">*/}
                        {/*<Link to="https://www.google.com/maps/" target="_blank">*/}
                        {/*{item.building} н.к., ауд. {item.auditorium}, {item.subjectType}*/}
                        {/*</Link>*/}
                    {/*</p>*/}
                {/*</td>*/}
            </tr>
        );
    }
}