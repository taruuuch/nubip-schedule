import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import { Home } from './containers/Home';
import { Group } from "./containers/Group";
import { Nav } from "./components/Nav";
import { Api } from "./containers/Api";
import { Faq } from "./containers/Faq";
import { Teacher } from "./containers/Teacher";
import { Login } from "./containers/Login";
import { Request } from "./containers/Request";
import { AddForm } from "./components/AddLesson";

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/group/:id' component={Group} />
            <Route exact path='/teacher/:id' component={Teacher} />
            <Route exact path='/api' component={Api} />
            <Route exact path='/faq' component={Faq} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/add/lesson/' component={AddForm} />
            {/*<Route exact path='/add/group/' component={AddForm} />*/}
            {/*<Route exact path='/add/teacher/' component={AddForm} />*/}
            {/*<Route exact path='/add/subject/' component={AddForm} />*/}
            {/*<Route exact path='/add/curriculum/' component={AddForm} />*/}
            {/*<Route exact path='/add/request/' component={AddForm} />*/}
            <Route exact path='/request' component={Request} />
        </Switch>
      </div>
    );
  }
}
