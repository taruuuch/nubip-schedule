import '../../../style/add.css';
import React, {Component} from 'react';
import {day, subgroup, week, FORM_CLEANER, ADD_LESSON} from "../../../constants";

export class AddLesson extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
            subject: [],
            subjecttype: [],
            faculty: [],
            speciality: [],
            group: [],
            departament: [],
            teacher: [],
            building: [],
            auditorium: [],
            time: [],
            
            subjectName: '',
            curriculumName: '',
            groupName: '',
            teacherName: '',
            auditoriumName: '',
            timeName: '',
            dayName: '',
            weekName: '',
            subgroupName: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);

        this.handleSubjectTypeClick = this.handleSubjectTypeClick.bind(this);
        this.handleFacultyClick = this.handleFacultyClick.bind(this);
        this.handleSpecialityClick = this.handleSpecialityClick.bind(this);
        this.handleDepartamentClick = this.handleDepartamentClick.bind(this);
        this.handleBuildingClick = this.handleBuildingClick.bind(this);
        // this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount() {
        fetch('/api/subjecttype/')
            .then( res => res.json() )
            .then( subjecttype => this.setState( { subjecttype } ) );

        fetch('/api/faculty/')
            .then( res => res.json() )
            .then( faculty => this.setState( { faculty } ) );

        fetch('/api/departament/')
            .then( res => res.json() )
            .then( departament => this.setState( { departament } ) );
        
        fetch('/api/building/')
            .then( res => res.json() )
            .then( building => this.setState( { building } ) );

        fetch('/api/time/GetTimeList/')
            .then( res => res.json() )
            .then( time => this.setState( { time } ) );
    }

    handleSubjectTypeClick(event) {
        fetch('/api/subject/' + event.target.id)
            .then( res => res.json() )
            .then( subject => this.setState( { subject } ) );
    }

    handleFacultyClick(event) {
        fetch('/api/speciality/')
            .then( res => res.json() )
            .then( speciality => this.setState( { speciality } ) );
    }

    handleSpecialityClick(event) {
        fetch('/api/speciality/' + event.target.id)
            .then( res => res.json() )
            .then( group => this.setState( { group } ) );
    }

    handleDepartamentClick(event) {
        fetch('/api/departament/' + event.target.id)
            .then( res => res.json() )
            .then( teacher => this.setState( { teacher } ) );
    }

    handleBuildingClick(event) {
        fetch('/api/building/' + event.target.id)
            .then( res => res.json() )
            .then( auditorium => this.setState( { auditorium } ) );
    }
    
    handleSubmit(event) {
        let subjectId = this.state.subjectName;
        let curriculumId = this.state.curriculumName;
        let groupId = this.state.groupName;
        let teacherId = this.state.teacherName;
        let auditoriumId = this.state.auditoriumName;
        let timeId = this.state.timeName;
        let day = this.state.dayName;
        let week = this.state.weekName;
        let subgroup = this.state.subgroupName;
        
        if (!subjectId || !curriculumId || !groupId || !teacherId || !auditoriumId || !timeId || !day || !week || !subgroup) {
            return;
        }
        
        this.props.onLessonSubmit({ 
            subject: subjectId,
            curriculum: curriculumId,
            group: groupId,
            teacher: teacherId,
            auditorium: auditoriumId,
            time: timeId,
            day: day,
            week: week,
            subgroup: subgroup,
        });
        
        this.setState({
            subjectName: '',
            curriculumName: '',
            groupName: '',
            teacherName: '',
            auditoriumName: '',
            timeName: '',
            dayName: '',
            weekName: '',
            subgroupName: '',
        });
    }

    render() {
        const subjectTypeList = this.state.subjecttype.map(data => {
                return (
                    <option
                        id={data.id}
                        onClick={this.handleSubjectTypeClick}>
                        {data.title}
                    </option>
                );
            }
        );
        const subjectList = this.state.subject.map(data => {
                return (
                    <option
                        id={data.id}
                        onClick={this.handleSubjectClick}>
                        {data.title}
                    </option>
                );
            }
        );
        const facultyList = this.state.faculty.map(data => {
                return (
                    <option
                        id={data.id}
                        onClick={this.handleFacultyClick}>
                        {data.title}
                    </option>
                );
            }
        );
        const specialityList = this.state.speciality.map(data => {
                return (
                    <option
                        id={data.id}
                        onClick={this.handleSpecialityClick}>
                        {data.title}
                    </option>
                );
            }
        );
        const groupList = this.state.group.map(data => {
                return (
                    <option
                        id={data.id}
                        onClick={this.handleGroupClick}>
                        {data.title}
                    </option>
                );
            }
        );
        const departamentList = this.state.departament.map(data => {
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
                        onClick={this.handleTeacherClick}>
                        {data.lastName} {data.name} {data.middleName}
                    </option>
                );
            }
        );
        const buildingList = this.state.building.map(data => {
                return (
                    <option
                        id={data.id}
                        onClick={this.handleBuildingClick}>
                        {data.title}
                    </option>
                );
            }
        );
        const auditoriumList = this.state.auditorium.map(data => {
                return (
                    <option
                        id={data.id}
                        onClick={this.handleAuditoriumClick}>
                        {data.title}
                    </option>
                );
            }
        );
        const timeList = this.state.time.map(data => {
                return (
                    <option
                        id={data.id}
                        onClick={this.handleTimeClick}>
                        {data.title} ({data.start} - {data.end})
                    </option>
                );
            }
        );

        const dayList = day.map(data => {
                return (
                    <option
                        id={data.id}
                        onClick={this.handleDayClick}>
                        {data.title}
                    </option>
                );
            }
        );
        const weekList = week.map(data => {
                return (
                    <option
                        id={data.id}
                        onClick={this.handleWeekClick}>
                        {data.title}
                    </option>
                );
            }
        );
        const subgroupList = subgroup.map(data => {
                return (
                    <option
                        id={data.id}
                        onClick={this.handleSubgroupClick}>
                        {data.title}
                    </option>
                );
            }
        );

        return(
            <main className="container block-container">
                <div className="add-block block">
                    <form onSubmit={this.handleSubmit}>
                        <div className="title">Додати заняття до розкладу</div>
                        <div className="form-inputs">
                            <select>
                                <option selected disabled>Тип заняття</option>
                                {subjectTypeList}
                            </select>
                            <select>
                                <option selected disabled>Назва заняття</option>
                                {subjectList}
                            </select>
                            <select>
                                <option selected disabled>Факультет групи</option>
                                {facultyList}
                            </select>
                            <select>
                                <option selected disabled>Спеціальність групи</option>
                                {specialityList}
                            </select>
                            <select>
                                <option selected disabled>Група</option>
                                {groupList}
                            </select>
                            <select>
                                <option selected disabled>Кафедра викладача</option>
                                {departamentList}
                            </select>
                            <select>
                                <option selected disabled>Викладач</option>
                                {teacherList}
                            </select>
                            <select>
                                <option selected disabled>Корпус</option>
                                {buildingList}
                            </select>
                            <select>
                                <option selected disabled>Аудиторія</option>
                                {auditoriumList}
                            </select>
                            <select>
                                <option selected disabled>День проведення заняття</option>
                                {dayList}
                            </select>
                            <select>
                                <option selected disabled>Номер заняття</option>
                                {timeList}
                            </select>
                            <select>
                                <option selected disabled>Чисельник або знаменник</option>
                                {weekList}
                            </select>
                            <select>
                                <option selected disabled>Підгрупа</option>
                                {subgroupList}
                            </select>
                        </div>
                        <div className="form-buttons">
                            <div className="btn-flex">
                                <button type="submit" className="btn">{FORM_CLEANER}</button>
                            </div>
                            <div className="btn-flex">
                                <button type="submit" className="btn">{ADD_LESSON}</button>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
        );
    }
}