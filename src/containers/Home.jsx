import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Search from './Search';
import AppState from '../redux/reducers';

const mapStateToProps = (state = AppState) => ({});

class Home extends Component {
  render = () => {
    return (
			<main className="app">
				<Search />
			</main>
    );
  };
};

export default withRouter(connect(mapStateToProps)(Home));
