import './navigation.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
	return (
		<nav className="navbar">
			<div className="container">
				<div className="navbar__navigation">
					<Link to='/' className="navbar-link">Головна</Link>
					<Link to='/faq' className="navbar-link">ЧаВо</Link>
					<Link to='/api' className="navbar-link">API</Link>
				</div>
				<div className="navbar__logo">
					<Link to='/'>
						<img src="../../images/logo.png" alt="" />
					</Link>
				</div>
				<div className="navbar__dashboard">
					<Link to="/login">
						<img src="../../images/login.png" alt="" />
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;