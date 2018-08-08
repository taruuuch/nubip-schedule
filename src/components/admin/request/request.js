import './request.css';
import React, { Component } from 'C:/Users/taruuuch/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';

class Request extends Component {
	render() {
		return(
			<main className="container block-container flex-container">
				<div className="request-block block flex-block req-block req-active">
					<div className="req-status">
						<p>������� ������</p>
						<p>07.06.2018 22:57:32</p>
					</div>
					<div className="req-lesson">������ ��� �����</div>
					<div className="req-teacher">����� �. �.</div>
					<div className="req-location">�. 15, ���. 230, ������</div>
					<div className="req-from">��������� � ³������ ���� #3 (11:40 - 13:00)</div>
					<div className="req-arrow">
						<img src="../images/circle-arrow.png" alt="" width="100"/>
					</div>
					<div className="req-to">��������� �� ³������ ���� #4 (13:15 - 14:35)</div>
					<div className="req-buttons">
						<div className="btn-flex">
							<button className="btn btn-discard">³�������</button>
						</div>
						<div className="btn-flex">
							<button className="btn btn-accept">��������</button>
						</div>
					</div>
				</div>
				<div className="request-block block flex-block req-block req-discard">
					<div className="req-status">
						<p>��������� ������</p>
						<p>07.06.2018 22:57:32</p>
					</div>
					<div className="req-lesson">������ ��� �����</div>
					<div className="req-teacher">����� �. �.</div>
					<div className="req-location">�. 15, ���. 230, ������</div>
					<div className="req-from">��������� � ³������ ���� #3 (11:40 - 13:00)</div>
					<div className="req-arrow">
						<img src="../../images/circle-arrow.png" alt="" width="100"/>
					</div>
					<div className="req-to">��������� �� ³������ ���� #4 (13:15 - 14:35)</div>
					<div className="req-why">������ ���� ��������</div>
				</div>
			</main>
		);
	}
}

export default Request;