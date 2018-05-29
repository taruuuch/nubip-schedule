import React, { Component } from 'react';
import { LoginForm } from "../components/LoginForm";

export class Login extends Component {
    displayName = Login.name

    render() {
        return (
            <LoginForm />
        );
    }
}