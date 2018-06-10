import '../style/request.css';
import React, { Component } from 'react';

export class Request extends Component {
    displayName = Request.name;

    render() {
        return(
            <main className="container block-container flex-container">
                <div className="request-block block flex-block req-block req-active">
                    <div className="req-status">
                        <p>Активна заявка</p>
                        <p>07.06.2018 22:57:32</p>
                    </div>
                    <div className="req-lesson">Основи баз даних</div>
                    <div className="req-teacher">Голуб Б. Л.</div>
                    <div className="req-location">к. 15, ауд. 230, лекція</div>
                    <div className="req-from">Перенести у Вівторок пару #3 (11:40 - 13:00)</div>
                    <div className="req-arrow">
                        <img src="../images/circle-arrow.png" alt="" width="100"/>
                    </div>
                    <div className="req-to">Перенести на Вівторок пару #4 (13:15 - 14:35)</div>
                    <div className="req-buttons">
                        <div className="btn-flex">
                            <button className="btn btn-discard">Відхилити</button>
                        </div>
                        <div className="btn-flex">
                            <button className="btn btn-accept">Прийняти</button>
                        </div>
                    </div>
                </div>
                <div className="request-block block flex-block req-block req-discard">
                    <div className="req-status">
                        <p>Неактивна заявка</p>
                        <p>07.06.2018 22:57:32</p>
                    </div>
                    <div className="req-lesson">Основи баз даних</div>
                    <div className="req-teacher">Голуб Б. Л.</div>
                    <div className="req-location">к. 15, ауд. 230, лекція</div>
                    <div className="req-from">Перенести у Вівторок пару #3 (11:40 - 13:00)</div>
                    <div className="req-arrow">
                        <img src="../images/circle-arrow.png" alt="" width="100"/>
                    </div>
                    <div className="req-to">Перенести на Вівторок пару #4 (13:15 - 14:35)</div>
                    <div className="req-why">Заявку було відхилено</div>
                </div>
            </main>
        );
    }
}