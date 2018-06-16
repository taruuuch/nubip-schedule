import './searchform.css';
import '../../../style/animation.css';
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import axios from 'axios';

export class SearchForm extends Component {
    constructor() {
        super();

        this.state = {
            speciality: [],
            group: [],
            departament: [],
            teacher: [],

            searchGroupId: 4,
            searchTeacherId: 1,

            toGroup: false,
            toTeacher: false,
        };

        this.handleSpecialityClick = this.handleSpecialityClick.bind(this);
        this.handleGroupClick = this.handleGroupClick.bind(this);
        this.handleDepartamentClick = this.handleDepartamentClick.bind(this);
        this.handleTeacherClick = this.handleTeacherClick.bind(this);

        this.handleGroupSubmit = this.handleGroupSubmit.bind(this);
        this.handleTeacherSubmit = this.handleTeacherSubmit.bind(this);
    };

    componentDidMount() {
        axios.get('/api/speciality')
            .then(res => {
                const speciality = res.data;
                this.setState({ speciality });
            })
            .catch(function (error) {
                console.log(error);
            });

        axios.get('/api/departament')
            .then(res => {
                const departament = res.data;
                this.setState({ departament });
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    handleSpecialityClick(event) {
        fetch('/api/speciality/' + event.target.id)
            .then( res => res.json() )
            .then( group => this.setState( { group } ) );
    }

    handleGroupClick(event) {
        this.state.searchGroupId = event.target.id;
    }

    handleGroupSubmit(event) {
        event.preventDefault();

        this.setState(() => ({
                toGroup: true
            })
        )
    }

    handleDepartamentClick(event) {
        axios.get('/api/departament/' + event.target.id)
            .then(res => {
                const teacher = res.data;
                this.setState({ teacher });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    handleTeacherClick(event) {
        this.state.searchTeacherId = event.target.id;
    }

    handleTeacherSubmit(event) {
        this.state.searchTeacherId = event.target.id
    }

    render() {
        if (this.state.toGroup === true) {
            return <Redirect to={'/group/' + this.state.searchGroupId} />
        }

        if (this.state.toTeacher === true) {
            return <Redirect to={'/teacher/' + this.state.searchTeacherId} />
        }

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
                        onClick={this.handleDepartamentClick}>
                        {data.lastName} {data.name} {data.middleName}
                    </option>
                );
            }
        );

        return (
            <main className="container main-page">
                <div className="form-container">
                    <Tabs>
                        <TabList>
                            <Tab>Група</Tab>
                            <Tab>Викладач</Tab>
                        </TabList>

                        <TabPanel>

                            <form action="" className="form-custom-style" onSubmit={this.handleGroupSubmit}>
                                <div className="form-inputs">
                                    {/*<input type="text" value={this.state.searchGroup} onChange={this.handleGroupChange} placeholder="Ввести номер групи" />*/}

                                    <select
                                        id="selectSpeciality"
                                        required>
                                        {specialityList}
                                    </select>

                                    <select
                                        id="selectGroup"
                                        required>
                                        {groupList}
                                    </select>
                                </div>
                                <div className="form-buttons">
                                    <div className="btn-flex">
                                        {/*<button type="button" className="btn btn-flex" onClick={this.openModal}>Знайти групу</button>*/}
                                    </div>
                                    <div className="btn-flex">
                                        <button type="submit" className="btn">Показати розклад</button>
                                    </div>
                                </div>
                            </form>

                        </TabPanel>
                        <TabPanel>

                            <form action="" className="form-custom-style" onSubmit={this.handleTeacherSubmit}>
                                <div className="form-inputs">
                                    <select
                                        id="selectDepartament"
                                        required>
                                        {departamentList}
                                    </select>

                                    <select
                                        id="selectTeacher"
                                        required>
                                        {teacherList}
                                    </select>
                                </div>

                                <div className="form-buttons">
                                    <div className="btn-flex">
                                        {/*<button type="button" className="btn btn-flex" onClick={this.openModal}>Знайти групу</button>*/}
                                    </div>
                                    <div className="btn-flex">
                                        <button type="submit" className="btn">Показати розклад</button>
                                    </div>
                                </div>
                            </form>

                        </TabPanel>
                    </Tabs>
                </div>
            </main>
        );
    }
}