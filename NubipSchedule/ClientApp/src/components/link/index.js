import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import { Home } from '../../containers/Home';
import { GroupPage } from "../../containers/Group";
import { ApiPage } from "../../containers/Api";
import { FaqPage } from "../../containers/Faq";
import { Teacher } from "../../containers/Teacher";
import { Login } from "../../containers/Login";
import { RequestPage } from "../../containers/Request";
import { AddLesson } from "../../components/form/lesson/lessonform";

export default class RouteLink extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/group/:id' component={GroupPage} />
                <Route exact path='/teacher/:id' component={Teacher} />
                <Route exact path='/api' component={ApiPage} />
                <Route exact path='/faq' component={FaqPage} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/add/lesson/' component={AddLesson} />
                {/*<Route exact path='/add/group/' component={AddGroup} />*/}
                {/*<Route exact path='/add/teacher/' component={AddTeacher} />*/}
                {/*<Route exact path='/add/subject/' component={AddSubject} />*/}
                {/*<Route exact path='/add/curriculum/' component={AddCurriculum} />*/}
                {/*<Route exact path='/add/request/' component={AddRequest} />*/}
                <Route exact path='/request' component={RequestPage} />
            </Switch>
        );
    }
}
