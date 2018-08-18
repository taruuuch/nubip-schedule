import './style/index.css';
import React, { Component } from 'react';
import Navigation from './components/navigation/navigation';
import RouteLink from './components/link/index';

class App extends Component {
  render() {
    return (
      <div>
				<Navigation/>
				<RouteLink/>
			</div>
    );
  }
}

export default App;
