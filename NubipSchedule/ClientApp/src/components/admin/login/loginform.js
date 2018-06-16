import React, {Component} from 'react';
import {Redirect} from "react-router-dom";

export class LoginForm extends Component {
    constructor() {
        super();

        this.state = {
            toAdmin: false,
        };

        this.handleSumbit = this.handleSumbit.bind(this);
    }

    handleSumbit(event) {
        event.preventDefault();

        this.setState(() => ({
                toAdmin: true
            })
        )
    }

    render() {
        if (this.state.toGroup === true) {
            return <Redirect to={'/request/'} />
        }

        return (
            <div>
                <main className="container main-page">
                    <div className="form-container">
                        <form action="/api/login/" method="post" className="form-custom-style" onSubmit={this.handleSumbit}>
                            <div className="form-inputs">
                                <input type="text" id="login" name="login" placeholder="Введіть логін"/>
                                <input type="password" id="password" name="password" placeholder="Введіть пароль"/>
                            </div>
                            <div className="form-buttons">
                                <div className="btn-flex"></div>
                                <div className="btn-flex">
                                    <button className="btn btn-flex">Увійти</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        );
    }
}