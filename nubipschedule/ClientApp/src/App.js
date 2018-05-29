import React, { Component } from 'react';
import { Route } from 'react-router';
import { Home } from './containers/Home';
import { Group } from "./containers/Group";
import { Nav } from "./components/Nav";
import { Api } from "./containers/Api";
import { Faq } from "./containers/Faq";
import { Teacher } from "./containers/Teacher";
import { Login } from "./containers/Login";

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <div>
        <Nav/>
        <Route exact path='/' component={Home} />
        <Route exact path='/group' component={Group} />
        <Route exact path='/teacher' component={Teacher} />
        <Route exact path='/api' component={Api} />
        <Route exact path='/faq' component={Faq} />
        <Route exact path='/login' component={Login} />
      </div>
    );
  }
}
