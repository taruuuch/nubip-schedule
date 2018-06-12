import '../style/searchmodal.css';
import React, { Component } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const customStyles = {
    content : {
        maxWidth              : '600px',
        width                 : '100%',
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        padding               : '15px',
        border                : 'none',
        borderRadius          : '5px',
        boxShadow             : '0 5px 10px rgba(0, 0, 0, .3)',
        transform             : 'translate(-50%, -50%)',
        animationName         : 'easeIn',
        animationDuration     : '.3s'
    }
};

export class SearchModal extends Component {
    constructor() {
        super();

        this.state = {
            modalIsOpen: false,
            specialitys: [],
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
    	this.setState({modalIsOpen: true});
    }

    afterOpenModal() {
       fetch('/api/speciality')
           .then( res => res.json() )
           .then( specialitys => this.setState( { specialitys } ) );
    }

    closeModal() {
    	this.setState({modalIsOpen: false});
    }
    
    render() {
        return(
            <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                style={customStyles}
            >
                <div className="modal-header">
                    Знайти групу
                </div>
                <div className="modal-content">
                    <form method="get">
                        <div className="form-inputs">
                            {/*<Select 
                                    name="selectSpeciality"
                                    onChange={this.specialityOptionClick}
                                    options={this.state.options}
                                />
                                <Select
                                    name="selectGroup"
                                    onChange={this.specialityOptionClick}
                                    options={this.state.options}
                                />*/}

                        </div>
                        <div className="form-buttons">
                            <div className="btn-flex">
                                <button className="btn" onClick={this.closeModal}>Закрити</button>
                            </div>
                            <div className="btn-flex">
                                <Link to='/group'>
                                    <button className="btn">Показати розклад</button>
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </Modal>
        );
    }
}