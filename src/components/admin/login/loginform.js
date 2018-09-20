import React, { Component } from 'react';
import { Redirect } from "react-dom";
import axios from 'axios';

class LoginForm extends Component {
	constructor() {
		super();

		this.state = {
			redirectToAdmin: false,
		};

		this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
	}

	handleLoginSubmit = (event) => {
		axios.post('http://localhost:5000/api/v1/auth', {
			login: event.target.login,
			password: event.target.password,
		});

		this.setState({
			redirectToAdmin: true
		});
	}

	render() {
		if (this.state.redirectToAdmin === true) {
			return <Redirect to={'/dashboard'} />
		}

		return (
			<div>
				<main className="container main-page">
					<div className="form-container">
						<form action="http://localhost:5000/api/v1/auth" method="post" className="form-custom-style" onSubmit={this.handleLoginSubmit}>
							<div className="form-inputs">
								<input type="text" id="login" name="login" placeholder="Введіть логін"/>
								<input type="password" id="password" name="password" placeholder="Введіть пароль"/>
							</div>
							<div className="form-buttons">
								<div className="btn-flex"></div>
								<div className="btn-flex">
									<button type="submit" className="btn btn-flex">Увійти</button>
								</div>
							</div>
						</form>
					</div>
				</main>
			</div>
		);
	}
}

export default LoginForm;