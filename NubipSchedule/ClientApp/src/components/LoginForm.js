import React, { Component } from 'react';

export class LoginForm extends Component {
  render() {
    return (
      <div>
          <main className="container main-page">
              <div className="form-container">
                  <form action="" className="form-custom-style">
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