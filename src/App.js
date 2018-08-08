import './App.css';

import React, { Component } from 'C:/Users/taruuuch/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';
import Navigation from './components/navigation/navigation';
import RouteLink from './components/link';

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
