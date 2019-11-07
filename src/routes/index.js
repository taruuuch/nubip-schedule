import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import Home from '../containers/Home';

class Routing extends Component {
  render = () => {
    return (
      <Router>
				<Route exact path="/" component={Home} />
      </Router>
    );
  };
};

export default Routing;
