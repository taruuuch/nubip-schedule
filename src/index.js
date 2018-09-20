import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

const appElement = document.getElementById('app');

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  appElement);

registerServiceWorker();
