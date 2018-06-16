import React, { Component } from 'react';

export class TeacherInfo extends Component {
    render() {
        return(
            <div>
                <div className="block group-title">Розклад викладача "Голуб Белла Львівна"</div>
                <div className="block group-info">
                    <p>
                        <span className="info-title">Кафедра: </span>
                        <span className="info-description">Комп'ютерних наук</span>
                    </p>
                    <p>
                        <span className="info-title">Вчена ступінь: </span>
                        <span className="info-description">Кандидат технічних наук, доцент</span>
                    </p>
                    <p>
                        <span className="info-title">Email: </span>
                        <span className="info-description">test@gmail.com</span>
                    </p>
                    <p>
                        <span className="info-title">Сайт: </span>
                        <span className="info-description">test.com</span>
                    </p>
                </div>
            </div>
        );
    }
}