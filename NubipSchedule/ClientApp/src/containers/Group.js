import '../style/group.css';
import React, { Component } from 'react';

export class Group extends Component {
	displayName = Group.name;
	
	render() {
		return(
			<main className="container group-page">
				<div className="group-title">Розклад групи "ПІ-1506"</div>
				<div className="group-info">
					<p>
						<span className="info-title">Факультет: </span>
						<span className="info-description">Інформаційних технологій</span>
					</p>
				</div>
				<div className="group-schedule">
					<div className="header-of-schedule">
						<div className="day">День</div>
						<div className="number">Пара</div>
						<div className="first-group">1-ша підгрупа</div>
						<div className="second-group">2-га підгрупа</div>
					</div>
					<div className="schedule-day">
						<div className="day">Понеділок</div>
						<div className="schedule-content">
							<ul>
								<li>1</li>
								<li>1</li>
								<li>1</li>
								<li>1</li>
							</ul>
						</div>
					</div>
				</div>
			</main>
		);
	}
}