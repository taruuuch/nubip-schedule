import '../style/searchform.css';
import '../style/animation.css';
import React, { Component } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
// import Select from 'react-select';

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
			modalIsOpen: false,
            specialitys: [],
            groups: [],
            // value: '?',
            // specSelect: '',
            // groupSelect: ''
		};

		this.openModal = this.openModal.bind(this);
		this.afterOpenModal = this.afterOpenModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		
		this.specialityOptionClick = this.specialityOptionClick.bind(this);
		// this.handleSubmit = this.handleSubmit.bind(this);
	};

	componentDidMount() {
        
    }
	
	openModal() {
		this.setState({modalIsOpen: true});
	}

	afterOpenModal() {
        fetch('/api/speciality')
            .then(res => res.json())
            .then(specialitys=>this.setState({specialitys}));
	}

	closeModal() {
		this.setState({modalIsOpen: false});
	}

    specialityOptionClick() {
	    // document.getElementById("groupSelect").disabled = false;
        fetch('/api/speciality/1')
            .then(res => res.json())
            .then(groups=>this.setState({groups}));
    }

    handleSubmit(e) {
        e.preventDefault();
    }
	
	render() {
        // const { specSelect } = this.state;
        // const { groupSelect } = this.state;
        //
        // const getOptions = (input) => {
        //     return fetch('/api/speciality')
        //         .then((response) => response.json())
        //         .then((json) => {
        //             return { options: json.title };
        //         });
        // };
        
		return (
			<main className="container main-page">
				<div className="form-container">
					<ul className="form-tab-buttons">
						<li><a href="" className="form-active">Група</a></li>
						<li><a href="">Викладач</a></li>
					</ul>
					<form action="" className="form-custom-style" id="group-form" onSubmit={this.handleSubmit}>
						<div className="form-inputs">
							<input type="text" placeholder="Ввести номер групи" />
						</div>
						<div className="form-buttons">
							<div className="btn-flex">
								<button type="button" className="btn btn-flex" onClick={this.openModal}>Знайти групу</button>
							</div>
							<div className="btn-flex">
                                <button type="submit" className="btn">Показати розклад</button>
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
								{/*<select onClick={this.specialityOptionClick} value={this.value}>*/}
                                    {/*{this.state.specialitys.map(item => */}
                                        {/*<option */}
                                            {/*id={item.specialityId} */}
                                            {/*key={item.specialityId}>*/}
                                            {/*{item.title}*/}
                                        {/*</option>*/}
                                    {/*)}*/}
								{/*</select>*/}
								{/*<select id="groupSelect" value={this.value}>*/}
                                    {/*{this.state.groups.map(item =>*/}
                                        {/*<option*/}
                                            {/*id={item.groupId}*/}
                                            {/*key={item.groupId}>*/}
                                            {/*{item.title}*/}
                                        {/*</option>*/}
                                    {/*)}*/}
								{/*</select>*/}
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