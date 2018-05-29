import '../style/navbar.css'
import { Link } from 'react-router-dom';
import React, { Component } from 'react';

export class Nav extends Component {
	displayName = Nav.name;
	
	render() {
		return (
			<nav className="navbar">
				<div className="container">
					<div className="navigation">
						<Link to='/' className="navbar-link">Головна</Link>
						<Link to='/faq' className="navbar-link">ЧаВо</Link>
						<Link to='/api' className="navbar-link">API</Link>
					</div>
					<div className="logo">
						<Link to='/'>
							<img src="../images/logo.png" alt="" />
						</Link>
					</div>
					<div className="gotoadmin">
						<Link to="/login">
							<img src="../images/login.png" alt="" />
						</Link>
					</div>
				</div>
			</nav>
		);
	}
}
