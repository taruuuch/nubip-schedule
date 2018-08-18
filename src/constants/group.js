import React from 'react';
import { Link } from 'react-router-dom';

export const renderGroupInfo = (group) => {
	let data = group.map( (data, index) => {
		return (
			<div className="block group__info">
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

export const renderLesson = (lessonOfDay) => {
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
						<Link to={"/teacher/" + data.teacherId + '/info'}>
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