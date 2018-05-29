import '../style/searchform.css';
import '../style/animation.css';
import React, { Component } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

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

export class SearchForm extends Component {
	displayName = SearchForm.name;
	
	constructor() {
		super();
		
		this.state = {
			modalIsOpen: false
		};

		this.openModal = this.openModal.bind(this);
		this.afterOpenModal = this.afterOpenModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	};

	openModal() {
		this.setState({modalIsOpen: true});
	}

	afterOpenModal() {
		//Add facultys after load modal window
	}

	closeModal() {
		this.setState({modalIsOpen: false});
	}
	
	render() {
		return (
			<main className="container main-page">
				<div className="form-container">
					<ul className="form-tab-buttons">
						<li><a href="#group-form" className="form-active">Група</a></li>
						<li><a href="#teacher-form">Викладач</a></li>
					</ul>
					<form action="" className="form-custom-style" id="group-form">
						<div className="form-inputs">
							<input type="text" placeholder="Ввести номер групи" />
						</div>
						<div className="form-buttons">
							<div className="btn-flex">
								<button type="button" className="btn btn-flex" onClick={this.openModal}>Знайти групу</button>
							</div>
							<div className="btn-flex">
								<Link to="/group">
									<button type="submit" className="btn">Показати розклад</button>
								</Link>
							</div>
						</div>
					</form>
				</div>

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
						<form action="">
							<div className="form-inputs">
								<select name="" id="">
									<option value="" selected>Обрати факультет</option>
									<option value="">1</option>
									<option value="">1</option>
								</select>
								<select name="" id="">
									<option value="" selected>Обрати групу</option>
									<option value="">1</option>
									<option value="">1</option>
								</select>
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
            </main>
		);
	}
}