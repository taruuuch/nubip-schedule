import './faq.css';
import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Faq extends Component {
	render() {
		return (
			<main className="container block-container">
				<div className="faq-info-block block">
					<div className="help-schedule">
						<div className="title">Пояснення до розкладу</div>
						<div className="description">
							<table>
								<thead>
								<tr>
									<th>Пара</th>
									<th>Час початку - час закінчення</th>
								</tr>
								</thead>
								<tbody>
								<tr>
									<td>1</td>
									<td>8:30 − 9:50</td>
								</tr>
								<tr>
									<td>2</td>
									<td>10:05 − 11:25</td>
								</tr>
								<tr>
									<td>3</td>
									<td>11:40 − 13:00</td>
								</tr>
								<tr>
									<td>4</td>
									<td>13:15 − 14:35</td>
								</tr>
								<tr>
									<td>5</td>
									<td>14:50 − 16:10</td>
								</tr>
								<tr>
									<td>6</td>
									<td>16:25 − 17:45</td>
								</tr>
								<tr>
									<td>7</td>
									<td>18:00 − 19:20</td>
								</tr>
								<tr>
									<td>8</td>
									<td>19:35 − 20:55</td>
								</tr>
								</tbody>
							</table>
	
							<div className="active-day">Розклад на поточний день підсвічується синім</div>
						</div>
					</div>
					<div className="faq-block">
						<div className="title">FAQ</div>
						<div className="description">В майбутньому тут буде опис системи від університету НУБіП України!</div>
					</div>
					<div className="github-schedule">
						<div className="title">Це проект з відкритим вихідним кодом</div>
						<Link to="https://github.com/taruuuch/nubip-schedule">
							<img src="https://cdn-st3.rtr-vesti.ru/vh/pictures/hdr/163/058/2.jpg" alt="" width="150px"/>
						</Link>
					</div>
				</div>
			</main>
		);
	}
}

export default Faq;