import './style/index.css';
import React from 'react';
import Navigation from './components/navigation/navigation';
import RouteLink from './components/link/index';

const App = () => {
  return (
    <div>
      <Navigation/>
      <RouteLink/>
    </div>
  );
};

export default App;
