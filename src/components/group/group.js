import './group.css';
import React, { Component } from 'react';
import axios from 'axios';
import { renderGroupInfo, renderLesson } from '../../constants/group';

class Group extends Component {
	constructor() {
		super();

		this.state = {
			lesson: [],
			groupInfo: [],
		};
	}

	componentWillMount = () => {
		axios.get('http://localhost:5000/api/v1/groups/' + parseInt(this.props.id, 10) + '/lessons')
			.then(result => {
				this.setState({
					lesson: result.data
				})
			})
			.catch(function (error) {
				console.log(error);
			});

		axios.get('http://localhost:5000/api/v1/groups/' + parseInt(this.props.id, 10))
			.then(result => {
				this.setState({
					groupInfo: result.data
				})
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	render() {
		return(
			<main className="container group__page block-container">
				<div className="block group__title">Розклад групи</div>
				{renderGroupInfo(this.state.groupInfo)}
				<div className="block group__schedule">
					<table>
						<thead className="group__header-of-schedule">
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

export default Group;