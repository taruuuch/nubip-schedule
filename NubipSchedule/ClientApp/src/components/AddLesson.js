import '../style/add.css';
import React, { Component } from 'react';

export class AddForm extends Component {
    constructor() {
        super();
        
        this.state = {
            subject: [],
            group: [],
            teacher: [],
            auditorium: [],
            time: [],
            day: [],
            subgroup: [],
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    componentWillMount() {
        fetch('/api/subject/')
            .then( res => res.json() )
            .then( subject => this.setState( { subject } ) );

        fetch('/api/group/')
            .then( res => res.json() )
            .then( group => this.setState( { group } ) );

        fetch('/api/teacher/')
            .then( res => res.json() )
            .then( teacher => this.setState( { teacher } ) );
    }

    handleSubmit(event) {
        
    }
    
    render() {
        const subjectList = this.state.subject.map(data => {
                return (
                    <option
                        id={data.id}
                        onClick={this.handleDepartamentClick}>
                        {data.title} ({data.type})
                    </option>
                );
            }
        );
        const groupList = this.state.group.map(data => {
                return (
                    <option
                        id={data.id}
                        onClick={this.handleDepartamentClick}>
                        {data.title}
                    </option>
                );
            }
        );
        const teacherList = this.state.teacher.map(data => {
                return (
                    <option
                        id={data.id}
                        onClick={this.handleDepartamentClick}>
                        {data.lastName} {data.name} {data.middleName}
                    </option>
                );
            }
        );
        // const auditoriumList = ;
        // const timeList = ;
        // const dayList = ;
        // const subgroupList = ;

        return(
            <main className="container block-container">
                <div className="add-block block">
                    <form onSubmit={this.handleSubmit}>
                        <div className="title">Додати заняття до розкладу</div>
                        <div className="form-inputs">
                            <select>
                                {subjectList}
                            </select>
                            <select>
                                {groupList}
                            </select>
                            <select>
                                {teacherList}
                            </select>
                            <select>
                                <option value="" defaultValue>к. 15, ауд. 230</option>
                            </select>
                            <select>
                                <option value="" defaultValue>3 пара (11:40 - 13:00)</option>
                            </select>
                            <select>
                                <option value="" defaultValue>Вівторок</option>
                            </select>
                            <select>
                                <option value="" defaultValue>Вся</option>
                            </select>
                        </div>
                        <div className="form-buttons">
                            <div className="btn-flex">
                                {/*<button type="submit" className="btn">Очистити</button>*/}
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