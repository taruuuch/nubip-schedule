import '../form.css';
import React, { Component } from 'react';
import { DAY, SUB_GROUP, WEEK, FORM_CLEANER, ADD_LESSON } from "../../../constants";
import axios from 'axios';

class LessonForm extends Component {
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
		axios.get('/api/subject/types')
			.then(res => {
				const subjecttype = res.data;
				this.setState({ subjecttype });
			})
			.catch(function (error) {
				console.log('====================================');
				console.log(error);
				console.log('====================================');
			});

		axios.get('/api/faculties')
			.then(res => {
				const faculty = res.data;
				this.setState({ faculty });
			})
			.catch(function (error) {
				console.log('====================================');
				console.log(error);
				console.log('====================================');
			});


		axios.get('/api/departaments')
			.then(res => {
				const departament = res.data;
				this.setState({ departament });
			})
			.catch(function (error) {
				console.log('====================================');
				console.log(error);
				console.log('====================================');
			});

		axios.get('/api/buildings')
			.then(res => {
				const building = res.data;
				this.setState({ building });
			})
			.catch(function (error) {
				console.log('====================================');
				console.log(error);
				console.log('====================================');
			});

		axios.get('/api/times')
			.then(res => {
				const time = res.data;
				this.setState({ time });
			})
			.catch(function (error) {
				console.log('====================================');
				console.log(error);
				console.log('====================================');
			});
	}

	handleSubjectTypeClick(event) {
		axios.get('/api/type/' + event.target.id + '/subjects')
			.then(res => {
				const subject = res.data;
				this.setState({ subject });
			})
			.catch(function (error) {
				console.log('====================================');
				console.log(error);
				console.log('====================================');
			});
	}

	handleFacultyClick(event) {
		axios.get('/api/specialities')
			.then(res => {
				const speciality = res.data;
				this.setState({ speciality });
			})
			.catch(function (error) {
				console.log('====================================');
				console.log(error);
				console.log('====================================');
			});
	}

	handleSpecialityClick(event) {
		axios.get('/api/speciality/' + event.target.id + '/groups')
			.then(res => {
				const group = res.data;
				this.setState({ group });
			})
			.catch(function (error) {
				console.log('====================================');
				console.log(error);
				console.log('====================================');
			});
	}

	handleDepartamentClick(event) {
		axios.get('/api/departament/' + event.target.id + '/teachers')
			.then(res => {
				const teacher = res.data;
				this.setState({ teacher });
			})
			.catch(function (error) {
				console.log('====================================');
				console.log(error);
				console.log('====================================');
			});
	}

	handleBuildingClick(event) {
		axios.get('/api/building/' + event.target.id + '/auditoriums')
			.then(res => {
				const auditorium = res.data;
				this.setState({ auditorium });
			})
			.catch(function (error) {
				console.log('====================================');
				console.log(error);
				console.log('====================================');
			});
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
						{data.number} ({data.start} - {data.end})
					</option>
				);
			}
		);

		const dayList = DAY.map(data => {
				return (
					<option
						id={data.id}
						onClick={this.handleDayClick}>
						{data.title}
					</option>
				);
			}
		);
		const weekList = WEEK.map(data => {
				return (
					<option
						id={data.id}
						onClick={this.handleWeekClick}>
						{data.title}
					</option>
				);
			}
		);
		const subgroupList = SUB_GROUP.map(data => {
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

export default LessonForm;