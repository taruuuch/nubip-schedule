import './navigation.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navigation extends Component {
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
                            <img src="../../images/logo.png" alt="" />
                        </Link>
                    </div>
                    <div className="gotoadmin">
                        <Link to="/login">
                            <img src="../../images/login.png" alt="" />
                        </Link>
                    </div>
                </div>
            </nav>
        );
    }
}
